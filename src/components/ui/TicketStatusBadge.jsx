/**
 * Komponen status tiket yang dapat digunakan ulang.
 * Menampilkan label status serta indikator warna sesuai theme Edelweiss.
 */
import React from 'react';
import { Circle } from 'lucide-react';

const statusStyles = {
  open: 'bg-tertiary-container/20 text-tertiary border border-tertiary/30',
  pending: 'bg-primary-container/15 text-primary border border-primary/30',
  closed: 'bg-error-container/15 text-error border border-error/30',
};

const TicketStatusBadge = ({ status = 'Open', label = 'Menunggu Pembayaran' }) => {
  const normalized = status.toLowerCase();
  const badgeClass = statusStyles[normalized] || statusStyles.pending;

  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-body-bold shadow-[0_0_10px_rgba(34,211,238,0.15)] ${badgeClass}`}>
      <Circle size={10} className={normalized === 'closed' ? 'text-error' : normalized === 'open' ? 'text-tertiary' : 'text-primary'} />
      {label}
    </span>
  );
};

export default TicketStatusBadge;
