import { create } from 'zustand';

const parsePrice = (price) => {
  if (typeof price === 'number') return price;
  if (typeof price !== 'string') return 0;
  const numeric = price.replace(/[^\d]/g, '');
  return Number(numeric) || 0;
};

const useCartStore = create((set, get) => ({
  items: [],
  addItem: (product) => {
    const price = parsePrice(product.price);
    const quantityToAdd = product.quantity && product.quantity > 0 ? product.quantity : 1;
    const normalizedId = product.id || product.title;

    set((state) => {
      const existing = state.items.find((item) => item.id === normalizedId);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === normalizedId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            id: normalizedId,
            title: product.title,
            category: product.category,
            desc: product.desc,
            price,
            priceLabel: product.price,
            image: product.imgSrc,
            badge: product.badge,
            quantity: quantityToAdd,
          },
        ],
      };
    });
  },
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })) ,
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) return;
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    }));
  },
  clearCart: () => set({ items: [] }),
  getTotalCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
}));

export default useCartStore;
