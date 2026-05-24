/**
 * Halaman Ticket Detail untuk mendukung tiket support di Edelweiss Craft.
 * Menggunakan state untuk input pesan dan menampilkan percakapan chat secara dinamis.
 */
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';
import TicketHeader from '../components/ticket/TicketHeader';
import TicketSidebar from '../components/ticket/TicketSidebar';
import TicketMessageInput from '../components/ui/TicketMessageInput';
import MessageBubble from '../components/ui/MessageBubble';

const TicketDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [draftMessage, setDraftMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);
  const injectedRef = useRef(false);

  useEffect(() => {
    if (product && !injectedRef.current) {
      const purchaseMsg = {
        id: `purchase-${Date.now()}`,
        variant: 'user',
        author: 'Pembeli',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        text: `Saya ingin membeli ${product.title} (${product.price}). Mohon bantu proses pembelian.`,
        avatar: product.imgSrc,
      };
      setMessages([purchaseMsg]);
      injectedRef.current = true;
    }

    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [product]);

  const handleSendMessage = () => {
    const trimmed = draftMessage.trim();
    if (!trimmed) return;

    const newMessage = {
      id: `sent-${Date.now()}`,
      variant: 'staff',
      author: 'Admin_Prime',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      text: trimmed,
    };

    setMessages((prev) => [...prev, newMessage]);
    setDraftMessage('');
  };

  const handleCloseChat = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-body-base selection:bg-primary selection:text-on-primary">
      <BackgroundAnimation variant="v1" />

      <main className="relative w-full max-w-[1280px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-lg py-md min-h-screen">
        <section className="lg:col-span-8 flex flex-col gap-md">
          <TicketHeader onClose={handleCloseChat} />

          <div className="flex-grow glass-panel rounded-lg p-md overflow-y-auto custom-scrollbar flex flex-col gap-lg shadow-inner cyber-animated-bg">
            {messages.length === 0 ? (
              <div className="text-center py-24 text-on-surface-variant">
                Percakapan belum dimulai. Kirim pesan di bawah untuk memulai tiket.
              </div>
            ) : (
              messages.map((item) =>
                item.type === 'divider' ? (
                  <div key={item.id} className="flex justify-center my-2">
                    <span className="font-label-caps text-label-caps text-outline bg-surface-container-highest px-3 py-1 rounded-full border border-outline-variant">
                      {item.label}
                    </span>
                  </div>
                ) : (
                  <MessageBubble
                    key={item.id}
                    variant={item.variant}
                    author={item.author}
                    time={item.time}
                    text={item.text}
                    avatar={item.avatar}
                  />
                )
              )
            )}
            <div ref={messageEndRef} />
          </div>

          <TicketMessageInput
            value={draftMessage}
            onChange={setDraftMessage}
            onSubmit={handleSendMessage}
          />
        </section>

        <TicketSidebar />
      </main>

      <footer className="w-full py-8 px-gutter text-center text-on-surface-variant/40 text-xs font-label-caps">
        © 2026 EDELWEISS CRAFT. ALL DATA ENCRYPTED.
      </footer>
    </div>
  );
};

export default TicketDetail;
