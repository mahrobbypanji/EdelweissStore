import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';
import ProductDetailView from '../components/ui/ProductDetailView';
import useCartStore from '../store/cartStore';
import { swalSuccess } from '../utils/swalHelper';

export default function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const addItem = useCartStore((s) => s.addItem);

  const formattedPrice = useMemo(() => product?.price || '-', [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-lg">
            <h2 className="font-headline-lg">Produk tidak ditemukan</h2>
            <p className="mt-sm text-on-surface-variant">Produk yang ingin Anda lihat detailnya tidak tersedia.</p>
            <button onClick={() => navigate('/store')} className="btn-primary mt-lg">Kembali ke Store</button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ title: product.title, category: product.category, desc: product.desc, price: product.price, imgSrc: product.imgSrc });
    const cartCount = useCartStore.getState().items.reduce((sum, i) => sum + i.quantity, 0);
    swalSuccess(`${product.title} ditambahkan ke keranjang`, `Total ${cartCount} item.`);
  };

  const handleBuyNow = () => {
    navigate('/ticket', { state: { product } });
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-body-base">
      <BackgroundAnimation variant="v1" />
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-gutter py-section-gap">
        <ProductDetailView
          product={product}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      </main>

      <Footer />
    </div>
  );
}
