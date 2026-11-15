import React from 'react';
import { motion } from 'framer-motion';
import { Trees, MonitorPlay, Bus, ShieldCheck, BookOpenCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { schoolData } from '../data/schoolData';

const iconMap = {
  Trees: Trees,
  MonitorPlay: MonitorPlay,
  Bus: Bus,
  ShieldCheck: ShieldCheck,
  BookOpenCheck: BookOpenCheck,
  HeartHandshake: HeartHandshake
};

export default function ParentTrustGrid({ currentLang = 'en', onSelectBenefit }) {
  const pillars = schoolData.trustPillars;

  return (
    <section className="py-16 sm:py-20 bg-ivory-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-heritage/5 border border-navy-heritage/10 text-navy-heritage text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-marigold animate-pulse" />
            <span>{currentLang === 'hi' ? 'अभिभावक सुरक्षा एवं सुविधा' : 'Parent Peace of Mind'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-navy-heritage font-fraunces tracking-tight">
            {currentLang === 'hi'
              ? 'ब्यौहारी के अभिभावक विमला ग्लोबल स्कूल पर क्यों विश्वास करते हैं?'
              : 'Why Beohari Families Trust VGS'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-charcoal-slate max-w-2xl mx-auto font-sans leading-relaxed">
            {currentLang === 'hi'
              ? 'पारदर्शी व्यवस्था, न्यूनतम फीस में उच्च गुणवत्ता और ग्रामीण व शहरी दोनों परिवेश के बच्चों के लिए सुदृढ़ सुविधाएं।'
              : 'Clear, transparent benefits crafted with care so every child from Beohari and nearby regions can achieve their highest potential.'}
          </p>
        </div>

        {/* 6-Card Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            const isDiscount = item.id === 'sibling';
            const isInsurance = item.id === 'insurance';
            const isCampus = item.id === 'campus';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl p-6 sm:p-7 bg-white border transition-all duration-300 shadow-warm flex flex-col justify-between ${
                  isDiscount
                    ? 'border-marigold/40 shadow-gold-glow/20'
                    : isInsurance
                    ? 'border-forest/30 shadow-forest-glow/10'
                    : 'border-navy-heritage/10 hover:border-marigold/40'
                }`}
              >
                {/* Top Stat & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${
                        isDiscount
                          ? 'bg-marigold text-white shadow-gold-glow'
                          : isInsurance
                          ? 'bg-forest text-white shadow-forest-glow'
                          : 'bg-ivory-cream text-navy-heritage border border-navy-heritage/10'
                      }`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <div className="text-right">
                      <span
                        className={`text-xl sm:text-2xl font-black tracking-tight font-fraunces ${
                          isDiscount
                            ? 'text-marigold'
                            : isInsurance
                            ? 'text-forest'
                            : 'text-navy-heritage'
                        }`}
                      >
                        {item.stat}
                      </span>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted">
                        {item.badge}
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-navy-heritage font-fraunces mt-2 mb-1.5">
                    {currentLang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-slate font-medium leading-relaxed">
                    {currentLang === 'hi' ? item.subtitleHi : item.subtitleEn}
                  </p>
                </div>

                {/* Bottom Verification Feature */}
                <div className="mt-6 pt-4 border-t border-navy-heritage/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-forest font-semibold text-[11px] sm:text-xs">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>
                      {item.id === 'campus' && (currentLang === 'hi' ? 'सी.सी.टी.वी. सुरक्षित बाउंड्री' : 'Gated Campus & Security')}
                      {item.id === 'smart' && (currentLang === 'hi' ? 'टाटा क्लास एज सर्टिफाइड' : 'Tata Edge Multi-Media')}
                      {item.id === 'bus' && (currentLang === 'hi' ? 'अनुभवी चालक व अटेंडेंट' : 'Conductor & Speed Governor')}
                      {item.id === 'insurance' && (currentLang === 'hi' ? 'सरकारी मान्यता प्राप्त सुरक्षा' : 'Full Policy Direct Cover')}
                      {item.id === 'books' && (currentLang === 'hi' ? 'सत्रारंभ पर पूर्ण सेट' : 'Complete Kit at Term Start')}
                      {item.id === 'sibling' && (currentLang === 'hi' ? 'सहोदर भाई/बहन हेतु' : 'Valid for 2nd Child')}
                    </span>
                  </div>

                  {onSelectBenefit && (
                    <button
                      onClick={() => onSelectBenefit(item.id)}
                      className="text-navy-heritage hover:text-marigold font-bold text-xs flex items-center gap-1 transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Note below grid */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white/80 border border-marigold/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-marigold/15 text-marigold flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-charcoal-ink font-medium">
              {currentLang === 'hi'
                ? 'क्या आपके दो बच्चे हैं? हमारे सहोदर छूट (Sibling Waiver) से आप दूसरे बच्चे की ट्यूशन फीस पर ५०% की सीधी बचत कर सकते हैं।'
                : 'Have multiple children? Our 50% Sibling Concession automatically applies to the second child’s tuition fee with zero hidden conditions.'}
            </p>
          </div>
          <span className="shrink-0 px-3 py-1 rounded-full bg-forest text-white text-xs font-bold font-sans">
            {currentLang === 'hi' ? '१००% पारदर्शी' : '100% Transparent'}
          </span>
        </div>
      </div>
    </section>
  );
}
