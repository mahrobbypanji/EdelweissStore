import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';
import ProductCard from '../components/ui/ProductCard';
import useCartStore from '../store/cartStore';
import { swalSuccess } from '../utils/swalHelper';
import { useNavigate } from 'react-router-dom';

/**
 * Halaman Utama (Home Page)
 * Menyajikan landing page server Minecraft Edelweiss Craft, meliputi hero section,
 * highlight rank/produk, panduan dasar, dan galeri komunitas.
 * Telah diperbarui dengan integrasi latar belakang animasi (BackgroundAnimation).
 */
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-base antialiased relative z-0">
      {/* Mengaktifkan animasi background partikel dan void gradient */}
      <BackgroundAnimation variant="v1" />

      <Navbar />

      <main className="flex-grow flex flex-col gap-section-gap pb-section-gap">
        {/* Hero Section */}
        <section className="relative w-full max-w-[1280px] mx-auto px-gutter mt-section-gap flex flex-col md:flex-row items-center gap-xl">
          <div className="flex-1 flex flex-col gap-lg z-10">
            <h1 className="font-display-lg text-display-lg md:font-display-lg md:text-display-lg text-on-surface">
              Enter the <span className="text-primary aether-text-glow">Void</span>
            </h1>
            <p className="font-body-base text-body-base text-on-surface-variant max-w-lg">
              Experience Minecraft survival elevated. Join Edelweiss Craft for an immersive, high-performance journey through custom biomes, intricate economies, and challenging dungeons.
            </p>
            <div className="flex gap-md mt-md">
              <button className="btn-primary">Join the Adventure</button>
              <button className="btn-outline">Browse Store</button>
            </div>
            {/* Rank/product teaser removed to reduce UI clutter */}
            {/* Elite Rank removed - no longer used */}
          </div>

          {/* Right-side hero image (restored) */}
          <div className="hidden md:flex md:flex-1 items-center justify-center">
            <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-xl steel-edge">
              <img
                alt="Edelweiss Void Art"
                className="w-full h-80 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLGb_Y3IKN6K4upnW62sdWf7nh7_RMHZDOKvL0hiyPbn_3t7V3w9N5xQC4n4zWD7EFNNaHOUkqZiW7OC6vzBFYc9kJ3tfXUQjJhYb1LUeqsXpo5ABmvyGotKsZ37N3VJJ1ZiAYvSd846xVMDWixTrSWGdSruSqaOn4q99ZwDQDakcK3yY63iAQ7kc9uP-I9rtmkPa_5kgqGcUEu5bU9Z_kh_RhV6E0KdtCmGQfTe0g1bs-TgTtH8IJmOnY7VHsaVZSqewzuYsqcmyA"
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full max-w-[1280px] mx-auto px-gutter mt-section-gap">
          <div className="flex flex-col gap-sm mb-xl">
            <h2 className="font-headline-lg text-headline-lg md:font-headline-lg md:text-headline-lg text-on-surface flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
              Product Unggulan
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant">Koleksi pilihan terbaik kami — produk berkualitas tinggi, fitur eksklusif, dan penawaran terbatas yang dirancang untuk meningkatkan pengalaman bermainmu. Temukan favoritmu dan tambahkan ke keranjang sekarang.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {[
              {
                id: 'feat-1',
                title: 'Obsidian Rank',
                category: 'RANK',
                desc: 'Ultimate prestige and power in the server. Gain access to exclusive areas, daily rewards, and premium commands to enhance your journey.',
                price: 'Rp 89.900',
                imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLGb_Y3IKN6K4upnW62sdWf7nh7_RMHZDOKvL0hiyPbn_3t7V3w9N5xQC4n4zWD7EFNNaHOUkqZiW7OC6vzBFYc9kJ3tfXUQjJhYb1LUeqsXpo5ABmvyGotKsZ37N3VJJ1ZiAYvSd846xVMDWixTrSWGdSruSqaOn4q99ZwDQDakcK3yY63iAQ7kc9uP-I9rtmkPa_5kgqGcUEu5bU9Z_kh_RhV6E0KdtCmGQfTe0g1bs-TgTtH8IJmOnY7VHsaVZSqewzuYsqcmyA',
              },
              {
                id: 'feat-2',
                title: 'Aether Blade Skin',
                category: 'ITEM',
                desc: 'Cosmetic weapon skin with glowing particle effects. Stand out in combat with this visually stunning legendary skin override.',
                price: 'Rp 14.900',
                imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEEN5p-yboFiuU20K8XDq3NAwIUIodnNuJtfSje4_46Q8r4wO96Kt_4KrISJr-bqyIbcwC7vTmG2Yr3qmllfB-DlknJwbdkBlV45JtLLPoTalRrsXRMUdzG7b1PJ5vdqWnPc6G9DKlSNrj1VnuVz-77CufJeY9JEJ3O1WhOcojkYO3zqmwXyZ-9XG2x3mfmYdO2Edv01cZdhio3lz347lHRVtJVct97fyxJbreqaF9Rwj',
              },
              {
                id: 'feat-3',
                title: 'Anti-Cheat Core',
                category: 'ADDON',
                desc: 'Server addon for enhanced security. Protect your progress and ensure a fair playing environment with our advanced detection systems.',
                price: 'Rp 29.900',
                imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXZCgw-hd9fjxNWgzsOiJn-TT1vmsGgyim7COnpvGVLf_R2c5weDFbFUK7ajS8NMqV_qF70rU9ZUIs0ORHKhpbUBl4W24DmEiQOgZ8NvrOdDkBzSSSedq2sAenMIG01J0ZiafNUn1Bm4qpT8sBtZ9M6sd8N__OhStPs6VaZl_Q5BdWhct-fa2H1U9q192bX2e8X0lj2AtqVxGLyXSawjybmUGLDY9hbZD5lTFnB8OBQg8qC0KNfqfZ_90f5uPDdvwKukwIlW_-8VkW',
              }
            ].map((p) => (
              <ProductCard
                key={p.id}
                title={p.title}
                category={p.category}
                desc={p.desc}
                price={p.price}
                imgSrc={p.imgSrc}
                onClick={() => navigate('/product', { state: { product: { title: p.title, category: p.category, desc: p.desc, price: p.price, imgSrc: p.imgSrc } } })}
                onAdd={() => {
                  const product = { title: p.title, category: p.category, desc: p.desc, price: p.price, imgSrc: p.imgSrc };
                  useCartStore.getState().addItem(product);
                  const cartCount = useCartStore.getState().items.reduce((sum, i) => sum + i.quantity, 0);
                  swalSuccess(`${p.title} ditambahkan ke keranjang`, `Total ${cartCount} item.`);
                }}
                onBuy={() => navigate('/product', { state: { product: { title: p.title, category: p.category, desc: p.desc, price: p.price, imgSrc: p.imgSrc } } })}
              />
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="w-full max-w-[1280px] mx-auto px-gutter mt-section-gap">
          <div className="flex flex-col gap-sm mb-xl">
            <h2 className="font-headline-lg text-headline-lg md:font-headline-lg md:text-headline-lg text-on-surface flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
              Panduan Dasar
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant">Mulai petualangan Anda dengan panduan ini.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            <a className="bg-surface-container-high hover:bg-surface-container-highest transition-colors duration-300 rounded-xl p-lg flex flex-col gap-sm steel-edge group" href="#">
              <span className="material-symbols-outlined text-primary text-3xl mb-sm group-hover:scale-110 transition-transform">wifi</span>
              <h3 className="font-body-bold text-lg text-on-surface">Connection Info</h3>
              <p className="font-body-base text-on-surface-variant">Cara bergabung ke server.</p>
            </a>
            <a className="bg-surface-container-high hover:bg-surface-container-highest transition-colors duration-300 rounded-xl p-lg flex flex-col gap-sm steel-edge group" href="#">
              <span className="material-symbols-outlined text-primary text-3xl mb-sm group-hover:scale-110 transition-transform">gavel</span>
              <h3 className="font-body-bold text-lg text-on-surface">Rules</h3>
              <p className="font-body-base text-on-surface-variant">Peraturan komunitas dan server.</p>
            </a>
            <a className="bg-surface-container-high hover:bg-surface-container-highest transition-colors duration-300 rounded-xl p-lg flex flex-col gap-sm steel-edge group" href="#">
              <span className="material-symbols-outlined text-primary text-3xl mb-sm group-hover:scale-110 transition-transform">download</span>
              <h3 className="font-body-bold text-lg text-on-surface">Installation</h3>
              <p className="font-body-base text-on-surface-variant">Panduan instalasi modpack.</p>
            </a>
          </div>
        </section>

        {/* Community Showcase */}
        <section className="w-full max-w-[1280px] mx-auto px-gutter mt-section-gap">
          <div className="flex flex-col gap-sm mb-xl">
            <h2 className="font-headline-lg text-headline-lg md:font-headline-lg md:text-headline-lg text-on-surface flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>photo_camera</span>
              Cuplikan Komunitas Server
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant">Karya dan momen terbaik dari pemain.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            <div className="aspect-square rounded-xl overflow-hidden steel-edge">
              <img alt="Community Build 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9P16qANsbJmiKFBA6vHVmmzxTCJm3A0z848dWBTCyF4O4Llv4ds7PdEUZZ6Ohv1tAb2NaU9KKyxruhxS-0zC79D1p0UyBdGmQhgsBptX3iwtuK29tu2YLomnZifdEPrCrcQzal5JV3-Xe78B_FVJYE1W8ErF8hFYJ0AtyNspTP2P1zWJ_4IWCjwzuWOfhpjBLWru9ELilucJN4N63RLngvwdpdvOcq-6oYmOjo2hCAwRtA4Rw8eIqGhAKfNEwSPVJI_FIcs_aOSra" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden steel-edge">
              <img alt="Community Build 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9P16qANsbJmiKFBA6vHVmmzxTCJm3A0z848dWBTCyF4O4Llv4ds7PdEUZZ6Ohv1tAb2NaU9KKyxruhxS-0zC79D1p0UyBdGmQhgsBptX3iwtuK29tu2YLomnZifdEPrCrcQzal5JV3-Xe78B_FVJYE1W8ErF8hFYJ0AtyNspTP2P1zWJ_4IWCjwzuWOfhpjBLWru9ELilucJN4N63RLngvwdpdvOcq-6oYmOjo2hCAwRtA4Rw8eIqGhAKfNEwSPVJI_FIcs_aOSra" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden steel-edge">
              <img alt="Community Build 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9P16qANsbJmiKFBA6vHVmmzxTCJm3A0z848dWBTCyF4O4Llv4ds7PdEUZZ6Ohv1tAb2NaU9KKyxruhxS-0zC79D1p0UyBdGmQhgsBptX3iwtuK29tu2YLomnZifdEPrCrcQzal5JV3-Xe78B_FVJYE1W8ErF8hFYJ0AtyNspTP2P1zWJ_4IWCjwzuWOfhpjBLWru9ELilucJN4N63RLngvwdpdvOcq-6oYmOjo2hCAwRtA4Rw8eIqGhAKfNEwSPVJI_FIcs_aOSra" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden steel-edge">
              <img alt="Community Build 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9P16qANsbJmiKFBA6vHVmmzxTCJm3A0z848dWBTCyF4O4Llv4ds7PdEUZZ6Ohv1tAb2NaU9KKyxruhxS-0zC79D1p0UyBdGmQhgsBptX3iwtuK29tu2YLomnZifdEPrCrcQzal5JV3-Xe78B_FVJYE1W8ErF8hFYJ0AtyNspTP2P1zWJ_4IWCjwzuWOfhpjBLWru9ELilucJN4N63RLngvwdpdvOcq-6oYmOjo2hCAwRtA4Rw8eIqGhAKfNEwSPVJI_FIcs_aOSra" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}