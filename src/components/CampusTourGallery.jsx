import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trophy, Monitor, Trees, HeartPulse, Compass, CheckCircle2 } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import FallbackImage from './FallbackImage';

const categories = ["All", "Academics", "Sports", "Labs", "Culture", "Excursions", "Eco-Campus", "Wellness"];

export default function CampusTourGallery({ currentLang = 'en' }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const activities = schoolData.campusActivities;

  const filtered = activeCategory === "All"
    ? activities
    : activities.filter(a => a.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeCategory === cat
                ? "bg-navy-heritage text-white shadow-sm"
                : "bg-white text-charcoal-slate hover:bg-ivory-cream border border-navy-heritage/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Activities with Real Images */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl bg-white border border-navy-heritage/10 shadow-warm overflow-hidden flex flex-col justify-between hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-ivory-cream">
                  <FallbackImage
                    src={item.image}
                    alt={item.title}
                    fallbackText={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-navy-heritage/80 backdrop-blur-sm text-white text-[10px] font-bold tracking-wide">
                    {item.category}
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-bold text-navy-heritage text-base font-fraunces group-hover:text-marigold transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal-slate mt-2 line-clamp-2 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-navy-heritage/5 flex items-center justify-between text-[11px] text-forest font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                  <span>VGS Verified Facility</span>
                </span>
                <span className="text-charcoal-muted font-normal">Beohari</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
