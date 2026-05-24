/**
 * Komponen message bubble untuk percakapan tiket.
 * Mendukung styling alternatif untuk pesan user dan staff.
 */
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const MessageBubble = ({ author, time, text, variant = 'user', avatar }) => {
  const isStaff = variant === 'staff';
  const wrapperClass = isStaff ? 'self-end flex-row-reverse' : '';
  const bubbleClass = isStaff
    ? 'bg-[#1e293b] border border-primary/30 rounded-lg rounded-tr-none p-md text-on-surface shadow-[0_4px_12px_rgba(34,211,238,0.1)]'
    : 'bg-surface-container-low border border-outline-variant rounded-lg rounded-tl-none p-md text-on-surface shadow-md';

  return (
    <div className={`flex items-start gap-md max-w-[85%] ${wrapperClass}`}>
      {isStaff ? (
        <div className="w-10 h-10 rounded-full border border-primary bg-primary-fixed/10 flex items-center justify-center text-primary shadow-[0_0_10px_rgba(34,211,238,0.2)]">
          <ShieldCheck size={18} />
        </div>
      ) : (
        <img
          src={avatar}
          alt={`${author} avatar`}
          className="w-10 h-10 rounded-full border border-outline-variant object-cover"
        />
      )}

      <div className={bubbleClass}>
        <div className={`flex justify-between items-center mb-1 gap-4 ${isStaff ? 'flex-row-reverse' : ''}`}>
          <span className={`font-body-bold text-body-bold ${isStaff ? 'text-primary flex items-center gap-1' : ''}`}>
            {author}
            {isStaff && <ShieldCheck size={14} className="text-primary" />}
          </span>
          <span className="text-xs text-on-surface-variant">{time}</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
