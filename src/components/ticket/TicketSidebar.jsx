/**
 * Komponen sidebar halaman ticket.
 * Menyajikan detail tiket, konteks order, dan informasi staff yang ditugaskan.
 */
import React from 'react';
import { ShoppingBag, Lock, ShieldCheck } from 'lucide-react';
import TicketStatusBadge from '../ui/TicketStatusBadge';

const TicketSidebar = () => {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-lg h-full flex-grow">
      <div className="glass-panel rounded-lg p-lg shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-surface-tint opacity-5 blur-[40px] group-hover:opacity-10 transition-opacity" />
        <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-md border-b border-outline-variant pb-2">TICKET DETAILS</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant">Status</span>
            <TicketStatusBadge status="open" label="Open" />
          </div>
          <div className="flex justify-between items-center border-t border-outline-variant/50 pt-3">
            <span className="text-on-surface-variant">Ticket ID</span>
            <span className="font-code text-code text-on-surface bg-[#0d0d0f] px-2 py-1 rounded border border-[#3d3d3d]">#TK-1024</span>
          </div>
          <div className="flex justify-between items-center border-t border-outline-variant/50 pt-3">
            <span className="text-on-surface-variant">Opened</span>
            <span className="text-on-surface">Oct 24, 2023</span>
          </div>
          <div className="flex justify-between items-center border-t border-outline-variant/50 pt-3">
            <span className="text-on-surface-variant">Total Produk</span>
            <span className="text-on-surface font-body-bold">1 Produk</span>
          </div>
        </div>
      </div>

      <div className="bg-[#0d0d0f]/80 backdrop-blur-md rounded-lg p-lg border border-[#3d3d3d] shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] relative">
        <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-md flex items-center gap-2">
          <ShoppingBag size={16} />
          ORDER CONTEXT
        </h2>
        <div className="mt-4">
          <div className="font-body-bold text-body-bold text-primary mb-1">Obsidian Rank Upgrade</div>
          <div className="text-xs text-on-surface-variant mb-4 font-code text-code bg-surface-container-low inline-block px-2 py-1 rounded border border-outline-variant/50">TXN-99823-A</div>
          <div className="flex flex-col gap-2 border-t border-[#3d3d3d] pt-4">
            <span className="text-label-caps text-on-surface-variant/70 font-label-caps">Price</span>
            <div className="flex items-baseline justify-between">
              <span className="font-code text-3xl font-bold text-[#4ade80] drop-shadow-[0_0_8px_rgba(74,222,128,0.6)] tracking-tight">Rp 49.900</span>
              <span className="text-[#4ade80]/40 text-xl">payments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel rounded-lg p-lg shadow-lg">
        <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-md border-b border-outline-variant pb-2">ASSIGNED STAFF</h2>
        <div className="flex items-center gap-md mt-4">
          <div className="relative">
            <div className="w-12 h-12 rounded bg-surface-container-high border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <ShieldCheck size={24} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#4ade80] rounded-full border-2 border-background animate-pulse shadow-[0_0_8px_#4ade80]" />
          </div>
          <div>
            <div className="font-body-bold text-body-bold text-on-surface flex items-center gap-1">
              Admin_Prime
              <ShieldCheck size={14} className="text-primary" />
            </div>
            <div className="text-sm text-on-surface-variant">Lead Administrator</div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
          <span className="text-xs font-medium text-[#4ade80]">Currently handling your ticket</span>
        </div>
      </div>

      <div className="flex-grow" />

      <button className="w-full bg-surface-container-high/80 backdrop-blur-sm border border-error/50 text-error hover:bg-error hover:text-on-error py-3 rounded-lg font-body-bold text-body-bold transition-all duration-300 active:scale-95 flex justify-center items-center gap-2 group">
        <Lock size={16} className="group-hover:scale-110 transition-transform" />
        Close Ticket
      </button>
    </aside>
  );
};

export default TicketSidebar;
