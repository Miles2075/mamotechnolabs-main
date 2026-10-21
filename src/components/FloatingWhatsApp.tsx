import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919325910095?text=Hello,%20I%20want%20to%20know%20more%20about%20your%20IT%20courses."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
        Chat with us
      </span>
    </a>
  );
};
