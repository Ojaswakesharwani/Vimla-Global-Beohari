import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Quote, Sparkles, Heart } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import FallbackImage from './FallbackImage';

export default function FoundingTribute({ currentLang = 'en' }) {
  const { memorial } = schoolData;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-ivory-paper via-white to-ivory-paper relative overflow-hidden border-y border-navy-heritage/10">
      {/* Decorative Ashoka Wheel / Lotus background watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-navy-heritage fill-current animate-spin-very-slow">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Memorial Card */}
        <div className="rounded-3xl bg-white border-2 border-navy-heritage/10 shadow-warm-xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Top Decorative Header Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-heritage/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-marigold/15 text-marigold flex items-center justify-center">
                <Award className="w-5 h-5 text-marigold" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-marigold font-fraunces">
                  {currentLang === 'hi' ? 'पावन प्रेरणा एवं संस्थापना' : 'Founding Inspiration & Memorial Heritage'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-navy-heritage font-fraunces">
                  {currentLang === 'hi'
                    ? 'अमर विभूति स्व. श्री लवकेश सिंह एवं श्रीमती विमला सिंह'
                    : 'In Reverent Memory of Late Shri Lavkesh Singh & Smt. Vimla Singh'}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-charcoal-muted font-medium bg-ivory-paper px-3 py-1.5 rounded-full border border-navy-heritage/10">
              <Calendar className="w-3.5 h-3.5 text-forest" />
              <span>Inaugurated: June 26, 2018</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Twin Founders Portraits with Golden Frames */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-6">
              {/* Late Shri Lavkesh Singh */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl p-1.5 bg-gradient-to-br from-marigold/30 via-white to-navy-heritage/20 shadow-warm overflow-hidden border border-marigold/40 transition-transform group-hover:scale-102">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-ivory-cream">
                    <FallbackImage
                      src="/images/LKSingh.jpg"
                      alt="Late Shri Lavkesh Singh"
                      fallbackText="Late Shri Lavkesh Singh"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <h4 className="mt-3 font-bold text-sm text-navy-heritage font-fraunces">
                  Late Shri Lavkesh Singh
                </h4>
                <p className="text-[11px] text-marigold-dark font-medium max-w-[160px] leading-tight">
                  Former Law, Labour & Revenue Minister (Govt. of M.P.)
                </p>
                <p className="text-[10px] text-charcoal-muted font-hindi mt-0.5">
                  पूर्व विधि, श्रम एवं राजस्व मंत्री
                </p>
              </div>

              {/* Smt. Vimla Singh */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl p-1.5 bg-gradient-to-br from-marigold/30 via-white to-navy-heritage/20 shadow-warm overflow-hidden border border-marigold/40 transition-transform group-hover:scale-102">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-ivory-cream">
                    <FallbackImage
                      src="/images/vimlaSingh.jpg"
                      alt="Smt. Vimla Singh"
                      fallbackText="Smt. Vimla Singh"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <h4 className="mt-3 font-bold text-sm text-navy-heritage font-fraunces">
                  Smt. Vimla Singh
                </h4>
                <p className="text-[11px] text-marigold-dark font-medium max-w-[160px] leading-tight">
                  Inspirational Patron & Namesake
                </p>
                <p className="text-[10px] text-charcoal-muted font-hindi mt-0.5">
                  प्रेरणास्रोत एवं मातृशक्ति
                </p>
              </div>
            </div>

            {/* Right: Sacred Quote & Story */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* The Sacred Quote (Preserved untouched in Hindi on BOTH modes) */}
              <div className="relative bg-gradient-to-r from-ivory-paper via-white to-marigold/10 rounded-2xl p-6 sm:p-7 border-l-4 border-marigold shadow-sm mb-6">
                <Quote className="w-8 h-8 text-marigold/30 absolute top-3 right-3" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-marigold-dark block mb-2 font-fraunces">
                  मूल प्रेरणा सूत्र / The Guiding Credo
                </span>
                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-heritage font-hindi leading-snug tracking-wide">
                  "मुझे गर्व है कि मैं जनसमस्याओं के समाधान का हिस्सा हूँ !!!"
                </p>
                <p className="text-xs text-charcoal-muted mt-2 font-fraunces italic">
                  — Late Shri Lavkesh Singh
                </p>
              </div>

              {/* Founding Narrative */}
              <div className="space-y-3 text-xs sm:text-sm text-charcoal-slate font-sans leading-relaxed">
                <p>
                  {currentLang === 'hi'
                    ? memorial.narrativeHi
                    : memorial.narrativeEn}
                </p>
                <p className="text-xs text-charcoal-muted">
                  {currentLang === 'hi'
                    ? 'संस्थान का उद्घाटन २६ जून २०१८ को श्री श्री १०८ श्री संत शरण जी महाराज (छप्रौर आश्रम) के कर-कमलों द्वारा वैदिक मंत्रोच्चार के साथ संपन्न हुआ।'
                    : 'The institution was auspiciously consecrated on June 26, 2018, by Shri Shri 108 Shri Sant Sharan Ji Maharaj (Chhapraur Ashram), dedicated as a permanent seat of enlightenment for the children of Shahdol and nearby districts.'}
                </p>
              </div>

              {/* 3 Core Memorial Values */}
              <div className="mt-6 grid grid-cols-3 gap-3 pt-4 border-t border-navy-heritage/10">
                <div className="text-center p-2 rounded-xl bg-ivory-paper">
                  <span className="block text-xs sm:text-sm font-bold text-navy-heritage font-fraunces">
                    {currentLang === 'hi' ? 'जनसेवा' : 'Public Duty'}
                  </span>
                  <span className="text-[10px] text-charcoal-muted font-sans">Commitment</span>
                </div>
                <div className="text-center p-2 rounded-xl bg-ivory-paper">
                  <span className="block text-xs sm:text-sm font-bold text-navy-heritage font-fraunces">
                    {currentLang === 'hi' ? 'संस्कार' : 'Moral Roots'}
                  </span>
                  <span className="text-[10px] text-charcoal-muted font-sans">Bhartiya Values</span>
                </div>
                <div className="text-center p-2 rounded-xl bg-ivory-paper">
                  <span className="block text-xs sm:text-sm font-bold text-navy-heritage font-fraunces">
                    {currentLang === 'hi' ? 'समानता' : 'Equality'}
                  </span>
                  <span className="text-[10px] text-charcoal-muted font-sans">Unbiased Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
