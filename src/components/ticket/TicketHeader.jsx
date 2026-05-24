/**
 * Komponen header halaman ticket.
 * Menampilkan nomor tiket, badge status, dan indikator live chat.
 */
import React from 'react';
import { X } from 'lucide-react';
import TicketStatusBadge from '../ui/TicketStatusBadge';

const TicketHeader = ({ onClose }) => {
  return (
    <header className="glass-panel rounded-lg p-md flex items-center justify-between shadow-xl">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Ticket #TK-1024
          </h1>
          <TicketStatusBadge status="open" label="Menunggu Pembayaran" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-surface-tint shadow-[0_0_8px_#2fd9f4]" />
        <span className="font-label-caps text-label-caps text-primary tracking-wider">LIVE CHAT</span>
        <button
          type="button"
          aria-label="Close chat"
          title="Tutup Chat Sementara"
          onClick={onClose}
          className="ml-2 p-1.5 rounded-lg bg-error/10 border border-error/50 text-error hover:bg-error/20 transition-all flex items-center justify-center"
        >
          <X size={16} />
        </button>
      </div>
    </header>
  );
};

export default TicketHeader;
