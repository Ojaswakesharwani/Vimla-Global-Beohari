import React from 'react';
import { School, MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ArrowUp, Bus, ExternalLink } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import FallbackImage from './FallbackImage';

export default function Footer({ currentLang = 'en', setActivePage, openInquiryModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden pt-16 pb-12 border-t-4 border-marigold">
      {/* Background Subtle Watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-white">
          <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Credo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border border-marigold/30 shadow-sm flex items-center justify-center">
                <FallbackImage
                  src="/images/logo.png"
                  alt="VGS Logo"
                  fallbackText="VGS"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-fraunces text-xl font-bold tracking-tight text-white">
                  Vimla Global School
                </h3>
                <p className="text-xs text-marigold font-semibold tracking-wider uppercase font-fraunces">
                  Beohari, Distt. Shahdol (M.P.)
                </p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-sans">
              {currentLang === 'hi'
                ? 'विमला ग्लोबल स्कूल (सीबीएसई संबद्ध: १०३१३०५) ब्यौहारी का प्रमुख शिक्षण संस्थान है, जहाँ आधुनिक डिजिटल तकनीक और भारतीय संस्कृति के संस्कारों का संगम है।'
                : 'CBSE Affiliated Secondary Institution (Affiliation No: 1031305, School Code: 51322) managed by L.R.M.C.C. Providing small class sizes, Tata Class Edge smart education, and 13-acre pollution-free green spaces.'}
            </p>

            {/* Sacred Credo Badge */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-marigold-light block mb-1 font-fraunces">
                Founding Guiding Principle
              </span>
              <p className="text-xs font-semibold text-white/90 font-hindi">
                "मुझे गर्व है कि मैं जनसमस्याओं के समाधान का हिस्सा हूँ !!!"
              </p>
              <span className="text-[10px] text-white/50 block mt-1">
                — Late Shri Lavkesh Singh (Former Minister, Govt. of M.P.)
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-fraunces text-sm font-bold uppercase tracking-wider text-marigold border-b border-white/10 pb-2">
              {currentLang === 'hi' ? 'महत्वपूर्ण पृष्ठ' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-sans">
              <li>
                <button onClick={() => { setActivePage('home'); scrollToTop(); }} className="hover:text-marigold transition-colors">
                  {currentLang === 'hi' ? 'मुख्य पृष्ठ (Home)' : 'Home Overview'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('legacy'); scrollToTop(); }} className="hover:text-marigold transition-colors">
                  {currentLang === 'hi' ? 'हमारा इतिहास (Our Legacy)' : 'Founders & Legacy'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('campus'); scrollToTop(); }} className="hover:text-marigold transition-colors">
                  {currentLang === 'hi' ? 'स्मार्ट कैंपस व खेल' : 'Smart Campus & Sports'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('admission'); scrollToTop(); }} className="hover:text-marigold transition-colors">
                  {currentLang === 'hi' ? 'प्रवेश एवं ५०% छूट' : 'Admissions & Concession'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('disclosure'); scrollToTop(); }} className="hover:text-marigold transition-colors">
                  {currentLang === 'hi' ? 'सीबीएसई प्रकटीकरण' : 'CBSE SARAS Disclosure'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('contact'); scrollToTop(); }} className="hover:text-marigold transition-colors">
                  {currentLang === 'hi' ? 'संपर्क व मार्गदर्शन' : 'Contact & Campus Visit'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Bus Transit & Parent Relief (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-fraunces text-sm font-bold uppercase tracking-wider text-marigold border-b border-white/10 pb-2">
              {currentLang === 'hi' ? '२५ किमी सुरक्षित बस मार्ग' : 'Safe 25km Bus Routes'}
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-start gap-2">
                <Bus className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Key Village Routes:</span>
                  <span className="text-[11px] text-white/70">Bansagar, Budwa, Khadda, Akhetpur, Civil Lines, Tehsil area.</span>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <ShieldCheck className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">₹2 Lakh Student Insurance:</span>
                  <span className="text-[11px] text-white/70">Every enrolled student covered 24x7 for accidental protection.</span>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <Heart className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">50% Sibling Concession:</span>
                  <span className="text-[11px] text-white/70">Half tuition fee for the second sibling in the same academic session.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-fraunces text-sm font-bold uppercase tracking-wider text-marigold border-b border-white/10 pb-2">
              {currentLang === 'hi' ? 'संपर्क एवं कार्यालय' : 'School Administration'}
            </h4>
            <div className="space-y-2.5 text-xs text-white/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Near Tehsil Office, Rewa Road, Beohari, Distt. Shahdol (M.P.) - 484774
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-marigold shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919977119006" className="hover:text-marigold transition-colors font-mono">
                    +91-9977119006 (Principal / Office)
                  </a>
                  <a href="tel:+916262501601" className="hover:text-marigold transition-colors font-mono">
                    +91-6262501601
                  </a>
                  <a href="tel:+919424331444" className="hover:text-marigold transition-colors font-mono text-[11px] text-marigold-light">
                    +91-9424331444 (Manager: Alok Srivastava)
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-marigold shrink-0" />
                <a href="mailto:vgsbeohari@gmail.com" className="hover:text-marigold transition-colors font-mono">
                  vgsbeohari@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-marigold shrink-0" />
                <span>Mon – Sat: 8:00 AM – 3:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Vimla Global School (VGS), Beohari.</span>
            <span>All Rights Reserved.</span>
            <span className="hidden md:inline">• Managed by Late Ram Manohar Charitable Committee (L.R.M.C.C.)</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openInquiryModal}
              className="px-3.5 py-1.5 rounded-lg bg-marigold text-white font-bold text-xs hover:bg-marigold-dark transition-colors"
            >
              Online Admission Inquiry
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
