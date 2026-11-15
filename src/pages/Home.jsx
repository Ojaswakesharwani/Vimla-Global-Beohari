import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, MapPin, CheckCircle2, Trees, MonitorPlay, Bus, HeartHandshake, Phone, School, Compass, Star } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import Hero3DScene from '../components/Hero3DScene';
import SyncedSchoolEmblem from '../components/SyncedSchoolEmblem';
import ParentTrustGrid from '../components/ParentTrustGrid';
import FoundingTribute from '../components/FoundingTribute';
import LeadershipDesk from '../components/LeadershipDesk';
import ParentVoicesCarousel from '../components/ParentVoicesCarousel';
import FeeCalculator from '../components/FeeCalculator';
import FallbackImage from '../components/FallbackImage';

export default function Home({ currentLang = 'en', setActivePage, openInquiryModal }) {
  const [activePillar, setActivePillar] = useState(0);
  const currentPillarData = schoolData.syncedEmblemPillars[activePillar];

  return (
    <div className="min-h-screen bg-ivory-paper">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-16 sm:py-16">
        {/* 3D Campus Depth Scene Background Canvas */}
        <Hero3DScene />

        {/* Subtle decorative radial overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory-paper/90 via-ivory-paper/80 to-ivory-paper/95 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Authoritative Indian Heritage Typography (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-navy-heritage/15 shadow-xs text-navy-heritage text-xs font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-forest animate-pulse" />
                <span className="font-fraunces font-bold text-navy-heritage">CBSE Affiliation: 1031305</span>
                <span className="text-navy-heritage/30">•</span>
                <span className="text-marigold-dark font-mono font-bold">School Code: 51322</span>
              </div>

              {/* Main Headline with Synced Pillar Lighting */}
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-marigold-dark font-fraunces">
                  {currentLang === 'hi' ? 'ब्यौहारी, जिला शहडोल (म.प्र.)' : 'Beohari, Distt. Shahdol (M.P.) • Est. 2018'}
                </p>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-navy-heritage font-fraunces tracking-tight leading-[1.12]">
                  <span>Vimla Global</span>{' '}
                  <span
                    className="relative inline-block transition-all duration-500"
                    style={{
                      color: currentPillarData.accent,
                      textShadow: `0 0 35px ${currentPillarData.accent}40`
                    }}
                  >
                    School
                  </span>
                </h1>

                {/* Subtitle dynamically linked to current active pillar */}
                <div className="flex items-center justify-center lg:justify-start gap-2 pt-1">
                  <span className="text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded-md bg-navy-heritage text-white font-sans uppercase tracking-wider">
                    Pillar:
                  </span>
                  <span
                    className="text-xs sm:text-sm font-bold transition-colors duration-500 font-sans"
                    style={{ color: currentPillarData.accent }}
                  >
                    {currentLang === 'hi' ? currentPillarData.hindiTitle : currentPillarData.title}
                  </span>
                </div>
              </div>

              {/* Descriptive Paragraph */}
              <p className="text-sm sm:text-base text-charcoal-slate max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                {currentLang === 'hi'
                  ? '१३ एकड़ प्रदूषण मुक्त हरा-भरा कैंपस, टाटा क्लास एज डिजिटल क्लासरूम, २५ किमी सुरक्षित स्कूल बस और भारतीय संस्कृति के संस्कारों से युक्त ब्यौहारी का प्रमुख शिक्षण केंद्र।'
                  : 'Rooted in the timeless values of Baghelkhand and powered by Tata Class Edge smart education. Spread across a pristine 13-acre green campus with complete safety, small class sizes, and 50% second-child fee concession.'}
              </p>

              {/* Two Primary Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={openInquiryModal}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-marigold hover:bg-marigold-dark text-white font-bold text-sm shadow-warm-lg hover:shadow-gold-glow flex items-center justify-center gap-2.5 transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>{currentLang === 'hi' ? 'प्रवेश हेतु आवेदन करें' : 'Apply for Admission'}</span>
                  <ArrowRight className="w-4 h-4 text-white/80" />
                </button>

                <button
                  onClick={() => {
                    setActivePage('campus');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-ivory-cream border border-navy-heritage/20 text-navy-heritage font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Compass className="w-4 h-4 text-forest" />
                  <span>{currentLang === 'hi' ? 'स्मार्ट कैंपस दर्शन' : 'Explore Campus'}</span>
                </button>
              </div>

              {/* 3 Trust Keynotes */}
              <div className="pt-4 border-t border-navy-heritage/10 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
                <div>
                  <span className="block text-base sm:text-lg font-extrabold text-navy-heritage font-fraunces">13 Acres</span>
                  <span className="text-[10px] sm:text-xs text-charcoal-muted font-sans">Green Campus</span>
                </div>
                <div>
                  <span className="block text-base sm:text-lg font-extrabold text-forest font-fraunces">₹2 Lakh</span>
                  <span className="text-[10px] sm:text-xs text-charcoal-muted font-sans">Student Insurance</span>
                </div>
                <div>
                  <span className="block text-base sm:text-lg font-extrabold text-marigold font-fraunces">50% Off</span>
                  <span className="text-[10px] sm:text-xs text-charcoal-muted font-sans">2nd Sibling Fee</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Synced Interactive School Emblem & Motion Graphics (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <SyncedSchoolEmblem
                activePillar={activePillar}
                setActivePillar={setActivePillar}
                currentLang={currentLang}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. 6-CARD VISUAL PARENT TRUST GRID */}
      <ParentTrustGrid
        currentLang={currentLang}
        onSelectBenefit={(id) => {
          if (id === 'sibling') {
            setActivePage('admission');
            window.scrollTo({ top: 500, behavior: 'smooth' });
          } else {
            setActivePage('campus');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />

      {/* 3. FOUNDING INSPIRATION TRIBUTE (LATE SHRI LAVKESH SINGH & SMT. VIMLA SINGH) */}
      <FoundingTribute currentLang={currentLang} />

      {/* 4. LEADERSHIP DESK (CLEAN EQUAL CARDS) */}
      <LeadershipDesk currentLang={currentLang} />

      {/* 5. INTERACTIVE SIBLING CONCESSION & INSTALLMENT CALCULATOR (INLINE ON HOME) */}
      <section className="py-16 sm:py-20 bg-ivory-paper border-t border-navy-heritage/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FeeCalculator
            currentLang={currentLang}
            onInquireWithDetails={(details) => openInquiryModal(details)}
          />
        </div>
      </section>

      {/* 6. PARENT VOICES CAROUSEL */}
      <ParentVoicesCarousel currentLang={currentLang} />

      {/* 7. BOTTOM ADMISSION CALLOUT BANNER */}
      <section className="py-14 bg-navy-heritage text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <span className="px-3 py-1 rounded-full bg-marigold text-white text-xs font-bold uppercase tracking-wider font-fraunces inline-block">
            {currentLang === 'hi' ? 'सत्र २०२६-२७ प्रवेश प्रारंभ' : 'Admissions Open for Session 2026-27'}
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold font-fraunces tracking-tight">
            {currentLang === 'hi'
              ? 'अपने बच्चे के सुनहरे भविष्य की शुरुआत विमला ग्लोबल स्कूल से करें'
              : 'Give Your Child the Foundation of World-Class Learning in Beohari'}
          </h2>

          <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto font-sans leading-relaxed">
            {currentLang === 'hi'
              ? 'निःशुल्क पुस्तकें, ५०% सहोदर छूट एवं २५ किमी स्कूल बस सेवा। सीमित सीटें उपलब्ध हैं।'
              : 'Complimentary academic books pack upon enrollment, 50% second-child fee reduction, and safe transportation to Bansagar, Budwa, Khadda, and Akhetpur.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={openInquiryModal}
              className="px-7 py-3 rounded-xl bg-marigold hover:bg-marigold-dark text-white font-bold text-sm shadow-md hover:shadow-gold-glow transition-all"
            >
              {currentLang === 'hi' ? 'त्वरित प्रवेश फॉर्म भरें' : 'Start 2-Minute Inquiry'}
            </button>

            <a
              href="tel:+919977119006"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-marigold" />
              <span>Call: +91-9977119006</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
