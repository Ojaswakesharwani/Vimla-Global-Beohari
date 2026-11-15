import React, { useState, useEffect } from 'react';
import { School, Phone, Mail, MapPin, Globe, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import FallbackImage from './FallbackImage';

export default function Header({ currentLang, setLang, activePage, setActivePage, openInquiryModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', labelEn: 'Home', labelHi: 'मुख्य पृष्ठ' },
    { id: 'legacy', labelEn: 'Our Legacy', labelHi: 'हमारा इतिहास' },
    { id: 'campus', labelEn: 'Smart Campus', labelHi: 'स्मार्ट कैंपस' },
    { id: 'admission', labelEn: 'Parent Benefits & Admission', labelHi: 'अभिभावक लाभ एवं प्रवेश' },
    { id: 'disclosure', labelEn: 'CBSE Disclosure', labelHi: 'सीबीएसई प्रकटीकरण' },
    { id: 'contact', labelEn: 'Contact', labelHi: 'संपर्क करें' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Top Trust Strip */}
      <div className="bg-navy-heritage text-white border-b border-white/10 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Affiliation & Address */}
          <div className="flex items-center gap-3 overflow-x-auto py-0.5 scrollbar-none text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 font-medium text-marigold-light whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-marigold shrink-0" />
              <span>CBSE Affiliated No: <strong>1031305</strong></span>
              <span className="text-white/40">•</span>
              <span>School Code: <strong>51322</strong></span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-white/80 border-l border-white/20 pl-3">
              <MapPin className="w-3 h-3 text-marigold shrink-0" />
              <span>Rewa Road, Beohari, Distt. Shahdol (M.P.)</span>
            </span>
          </div>

          {/* Right: Emergency/Office Phone & Language Toggle */}
          <div className="flex items-center gap-3 ml-auto">
            <a
              href="tel:+919977119006"
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/90 hover:text-marigold transition-colors"
            >
              <Phone className="w-3 h-3 text-marigold" />
              <span>+91-9977119006</span>
            </a>

            {/* Language Switcher Pill */}
            <div className="flex items-center bg-white/15 hover:bg-white/25 rounded-full p-0.5 border border-white/20 transition-all">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  currentLang === 'en'
                    ? 'bg-marigold text-white shadow-sm'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('hi')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold font-hindi transition-all ${
                  currentLang === 'hi'
                    ? 'bg-marigold text-white shadow-sm'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-warm py-2.5 border-b border-navy-heritage/10'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-navy-heritage/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & School Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-white p-1 border border-navy-heritage/10 shadow-sm overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
              <FallbackImage
                src="/images/logo.png"
                alt="Vimla Global School Logo"
                fallbackText="VGS"
                className="w-full h-full object-contain"
                priority={true}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-fraunces text-base sm:text-xl font-bold tracking-tight text-navy-heritage group-hover:text-marigold transition-colors">
                  Vimla Global School
                </span>
                <span className="hidden lg:inline-block px-2 py-0.2 bg-forest-mist text-forest-dark text-[10px] font-semibold rounded border border-forest/20">
                  Beohari
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-charcoal-muted tracking-wide font-medium flex items-center gap-1.5">
                <span>CBSE English Medium</span>
                <span>•</span>
                <span className="text-marigold font-semibold">Regd. by L.R.M.C.C.</span>
              </p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'text-navy-heritage bg-ivory-cream font-bold'
                      : 'text-charcoal-slate hover:text-navy-heritage hover:bg-ivory-paper'
                  }`}
                >
                  <span className={currentLang === 'hi' ? 'font-hindi text-xs' : 'font-sans'}>
                    {currentLang === 'hi' ? item.labelHi : item.labelEn}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-marigold rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action CTAs: Apply for Admission */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={openInquiryModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-marigold hover:bg-marigold-dark shadow-sm hover:shadow-gold-glow transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-white animate-spin-very-slow" />
              <span className={currentLang === 'hi' ? 'font-hindi' : 'font-sans'}>
                {currentLang === 'hi' ? 'प्रवेश आवेदन' : 'Apply for Admission'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={openInquiryModal}
              className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-white bg-marigold hover:bg-marigold-dark sm:hidden"
            >
              {currentLang === 'hi' ? 'प्रवेश' : 'Apply'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy-heritage hover:bg-ivory-cream transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-navy-heritage/10 px-4 pt-3 pb-6 shadow-warm-xl animate-fadeIn">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-navy-heritage text-white font-bold'
                        : 'text-charcoal-ink hover:bg-ivory-paper'
                    }`}
                  >
                    <span className={currentLang === 'hi' ? 'font-hindi' : 'font-sans'}>
                      {currentLang === 'hi' ? item.labelHi : item.labelEn}
                    </span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-marigold' : 'text-charcoal-muted'}`} />
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-navy-heritage/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openInquiryModal();
                }}
                className="w-full py-3 rounded-xl bg-marigold text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{currentLang === 'hi' ? 'ऑनलाइन प्रवेश पूछताछ (२ मिनट)' : 'Apply for Admission (2-Min Form)'}</span>
              </button>

              <div className="flex items-center justify-around text-xs text-charcoal-slate pt-2">
                <a href="tel:+919977119006" className="flex items-center gap-1.5 font-semibold text-navy-heritage">
                  <Phone className="w-3.5 h-3.5 text-marigold" />
                  <span>+91-9977119006</span>
                </a>
                <a href="mailto:vgsbeohari@gmail.com" className="flex items-center gap-1.5 font-semibold text-navy-heritage">
                  <Mail className="w-3.5 h-3.5 text-forest" />
                  <span>Email VGS</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
