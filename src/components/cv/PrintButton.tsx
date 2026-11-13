'use client';

import React from 'react';
import { Printer } from 'lucide-react';

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
    >
      <Printer className="w-3.5 h-3.5" />
      <span>Salvar PDF / Imprimir</span>
    </button>
  );
}

