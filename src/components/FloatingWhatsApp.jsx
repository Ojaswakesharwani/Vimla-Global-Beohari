import React, { useState } from 'react';
import { MessageSquare, Phone, X, Sparkles } from 'lucide-react';

export default function FloatingWhatsApp({ currentLang = 'en', onOpenForm }) {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  const defaultMsg = encodeURIComponent("Namaste VGS Beohari! I would like to inquire about admission for my child for the upcoming session.");
  const waUrl = `https://wa.me/919977119006?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {tooltipOpen && (
        <div className="mb-3 max-w-xs p-3.5 rounded-2xl bg-white border border-navy-heritage/15 shadow-warm-xl text-xs text-charcoal-ink animate-fadeIn relative">
          <button
            onClick={() => setTooltipOpen(false)}
            className="absolute top-2 right-2 text-charcoal-muted hover:text-charcoal-ink p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-forest font-bold mb-1">
            <span className="w-2 h-2 rounded-full bg-forest animate-ping" />
            <span>{currentLang === 'hi' ? 'वीजीएस प्रवेश सहायता लाइव' : 'VGS Admission Help Desk'}</span>
          </div>
          <p className="text-[11px] text-charcoal-slate font-medium leading-relaxed pr-3">
            {currentLang === 'hi'
              ? 'ब्यौहारी स्कूल ऑफिस से सीधे व्हाट्सएप पर बात करें या फॉर्म भरें।'
              : 'Chat directly on WhatsApp or get instant fee concession assistance.'}
          </p>
        </div>
      )}

      {/* Action Button */}
      <div className="flex items-center gap-2">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-warm-lg hover:shadow-forest-glow transition-all active:scale-95"
          aria-label="Chat on WhatsApp +91-9977119006"
        >
          {/* Animated pulse halo */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 animate-pulse pointer-events-none" />

          <MessageSquare className="w-5 h-5 fill-white shrink-0" />
          <span className="hidden sm:inline-block font-sans">
            {currentLang === 'hi' ? 'व्हाट्सएप पूछताछ' : 'WhatsApp Inquiry'}
          </span>
          <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-mono">
            +91-9977119006
          </span>
        </a>
      </div>
    </div>
  );
}
