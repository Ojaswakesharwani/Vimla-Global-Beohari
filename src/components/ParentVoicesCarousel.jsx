import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Heart, MessageSquare } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function ParentVoicesCarousel({ currentLang = 'en' }) {
  const testimonials = schoolData.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden border-t border-navy-heritage/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-mist border border-forest/20 text-forest-dark text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-forest" />
            <span>{currentLang === 'hi' ? 'सच्चे अनुभव • स्थानीय अभिभावक' : 'Authentic Parent Voices'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-navy-heritage font-fraunces tracking-tight">
            {currentLang === 'hi' ? 'अभिभावकों के सच्चे विचार' : 'What Beohari Parents Say'}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-charcoal-slate font-sans">
            {currentLang === 'hi'
              ? 'ब्यौहारी, बाणसागर, बुढ़वा और आसपास के गाँवों के परिजनों की सच्ची प्रतिक्रियाएँ।'
              : 'Direct reflections from parents across Beohari town, Bansagar, and surrounding communities.'}
          </p>
        </div>

        {/* Carousel Card */}
        <div
          className="relative max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-ivory-paper via-white to-ivory-cream border border-navy-heritage/10 shadow-warm-xl p-6 sm:p-10 lg:p-12 overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Subtle Quote Background Emblem */}
          <Quote className="absolute -bottom-6 -right-6 w-44 h-44 text-marigold/5 pointer-events-none" />

          {/* 5-Star Rating Badge */}
          <div className="flex items-center gap-1 mb-6 text-marigold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-marigold text-marigold" />
            ))}
            <span className="text-xs font-bold text-navy-heritage ml-2 font-sans">
              Parent Satisfaction
            </span>
          </div>

          {/* Testimonial Quote Animated */}
          <div className="min-h-[140px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                <p className="text-base sm:text-xl lg:text-2xl text-navy-heritage font-sans font-medium leading-relaxed italic">
                  "{currentLang === 'hi' ? current.textHi : current.textEn}"
                </p>

                <div className="mt-6 pt-4 border-t border-navy-heritage/10 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base font-bold text-navy-heritage font-fraunces">
                      {currentLang === 'hi' ? current.hindiName : current.name}
                    </h4>
                    <p className="text-xs text-charcoal-muted font-sans">
                      Parent of Student • <span className="text-marigold-dark font-medium">{current.location}</span>
                    </p>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white border border-navy-heritage/10 text-xs font-medium text-charcoal-slate shadow-sm">
                    Verified Beohari Parent
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="mt-8 flex items-center justify-between pt-4 border-t border-navy-heritage/5">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-marigold'
                      : 'w-2 bg-navy-heritage/20 hover:bg-navy-heritage/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-navy-heritage/10 bg-white hover:bg-ivory-cream text-navy-heritage flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-navy-heritage/10 bg-white hover:bg-ivory-cream text-navy-heritage flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Small Parent Callout Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {testimonials.map((t, idx) => (
            <button
              key={t.name}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(idx);
              }}
              className={`p-3 rounded-2xl text-left border transition-all ${
                idx === currentIndex
                  ? 'bg-navy-heritage text-white border-navy-heritage shadow-md'
                  : 'bg-ivory-paper text-charcoal-ink border-navy-heritage/5 hover:border-marigold/40'
              }`}
            >
              <span className="block text-xs font-bold truncate">
                {currentLang === 'hi' ? t.hindiName : t.name}
              </span>
              <span className={`block text-[10px] truncate ${idx === currentIndex ? 'text-marigold' : 'text-charcoal-muted'}`}>
                {t.location}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
