/**
 * Komponen area input pesan untuk halaman tiket.
 * Menggunakan useState lifting dengan props onChange dan onSubmit.
 */
import React from 'react';
import { Paperclip, Send } from 'lucide-react';

const TicketMessageInput = ({ value, onChange, onSubmit, isDisabled = false }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="glass-panel rounded-lg p-sm flex items-end gap-sm shadow-xl relative">
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <button
        type="button"
        aria-label="Attach file"
        className="p-2 text-on-surface-variant hover:text-primary transition-colors"
      >
        <Paperclip size={18} />
      </button>
      <div className="flex-grow bg-[#0f0f13] border border-outline-variant rounded-md focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          rows={3}
          className="w-full bg-transparent border-none text-on-surface focus:ring-0 resize-none p-3 h-12 max-h-32 custom-scrollbar font-body-base text-body-base"
          placeholder="Type your message here..."
          disabled={isDisabled}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
        disabled={isDisabled || !value.trim()}
        className="bg-primary text-[#000000] px-4 py-3 rounded-md font-body-bold text-body-bold hover:bg-primary-fixed active:scale-95 transition-all shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>Send</span>
        <Send size={16} />
      </button>
    </div>
  );
};

export default TicketMessageInput;
