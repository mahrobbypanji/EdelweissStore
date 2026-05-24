import React from 'react';

export default function ProductDetailView({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
  onBuyNow,
  onClose,
  isModal = false,
}) {
  if (!product) {
    return null;
  }

  return (
    <div className={`flex flex-col md:flex-row gap-lg ${isModal ? '' : 'bg-surface-container-lowest rounded-lg p-lg steel-edge'}`}>
      <div className="w-full md:w-1/2 bg-surface-container-lowest p-lg flex items-center justify-center border border-outline-variant rounded-xl overflow-hidden">
        <div className="relative group w-full aspect-square bg-surface/50 rounded-lg overflow-hidden">
          <img alt={product.title} className="w-full h-full object-cover" src={product.imgSrc} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-lg flex flex-col gap-lg">
        {onClose && (
          <button
            className="self-end text-on-surface-variant hover:text-primary transition-colors"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        )}

        <div>
          <span className="bg-primary/10 text-primary border border-primary/30 font-label-caps text-[10px] px-sm py-[4px] rounded-sm tracking-widest inline-block">
            {product.category}
          </span>
          <h2 className="font-headline-lg text-3xl text-on-surface mt-md">{product.title}</h2>
        </div>

        <div className="flex flex-col gap-sm pb-lg border-b border-outline-variant/30">
          <p className="font-code text-primary text-4xl font-bold">{product.price}</p>
          <div className="flex items-center gap-xs text-tertiary">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
            <span className="text-xs font-body-base ml-xs text-on-surface-variant">(4.9/5 • 120+ Terjual)</span>
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="font-body-bold text-on-surface text-sm uppercase tracking-wider mb-sm">Deskripsi Produk</h3>
          <p className="text-on-surface-variant text-base leading-relaxed">{product.desc}</p>
        </div>

        {typeof quantity !== 'undefined' && onQuantityChange && (
          <div className="flex flex-col gap-md">
            <div className="flex items-center gap-lg">
              <span className="text-sm text-outline-variant font-label-caps uppercase">Kuantitas</span>
              <div className="flex items-center border border-outline-variant rounded-lg overflow-hidden bg-surface-container-low">
                <button
                  className="px-4 py-2 hover:bg-surface-container-highest transition-colors text-primary"
                  onClick={() => onQuantityChange('decrease')}
                >
                  -
                </button>
                <input
                  className="w-16 bg-transparent border-none text-center focus:ring-0 text-sm font-body-bold text-on-surface"
                  min="1"
                  type="number"
                  value={quantity}
                  readOnly
                />
                <button
                  className="px-4 py-2 hover:bg-surface-container-highest transition-colors text-primary"
                  onClick={() => onQuantityChange('increase')}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-md pt-lg border-t border-outline-variant/30">
              <button
                onClick={onAddToCart}
                className="flex-1 bg-surface-container-highest text-on-surface border border-outline-variant font-body-bold py-4 rounded-xl hover:border-primary transition-all flex items-center justify-center gap-md active:scale-95"
              >
                <span className="material-symbols-outlined">add_shopping_cart</span>
                <span>Tambah Keranjang</span>
              </button>
              <button
                onClick={onBuyNow}
                className="flex-1 bg-primary text-on-primary font-body-bold py-4 rounded-xl hover:brightness-110 transition-all glowing-primary active:scale-95"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        )}

        {typeof quantity === 'undefined' && (
          <div className="flex gap-md pt-lg border-t border-outline-variant/30">
            <button
              onClick={onAddToCart}
              className="flex-1 bg-surface-container-highest text-on-surface border border-outline-variant font-body-bold py-4 rounded-xl hover:border-primary transition-all flex items-center justify-center gap-md active:scale-95"
            >
              <span className="material-symbols-outlined">add_shopping_cart</span>
              <span>Tambah Keranjang</span>
            </button>
            <button
              onClick={onBuyNow}
              className="flex-1 bg-primary text-on-primary font-body-bold py-4 rounded-xl hover:brightness-110 transition-all glowing-primary active:scale-95"
            >
              Beli Sekarang
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
