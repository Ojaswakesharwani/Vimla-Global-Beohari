import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Phone, Mail, ChevronRight, Award, GraduationCap } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import FallbackImage from './FallbackImage';

export default function LeadershipDesk({ currentLang = 'en' }) {
  const leaders = schoolData.leadership;
  const [selectedLeader, setSelectedLeader] = useState(0);

  return (
    <section className="py-16 sm:py-20 bg-ivory-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-heritage/5 border border-navy-heritage/10 text-navy-heritage text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-marigold" />
            <span>{currentLang === 'hi' ? 'मार्गदर्शन एवं नेतृत्व' : 'Guiding Vision & Leadership'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-navy-heritage font-fraunces tracking-tight">
            {currentLang === 'hi' ? 'प्रबंधन एवं प्राचार्या संदेश' : 'From the Leadership Desk'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-charcoal-slate max-w-2xl mx-auto font-sans leading-relaxed">
            {currentLang === 'hi'
              ? 'ब्यौहारी में आधुनिक तकनीक व भारतीय संस्कारों से युक्त विश्वस्तरीय शिक्षा उपलब्ध कराने के लिए हमारा समर्पित नेतृत्व।'
              : 'Our experienced educators and management committee, committed to raising principled, creative, and globally competent citizens.'}
          </p>
        </div>

        {/* 5 Clean Equal Leadership Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {leaders.map((leader, index) => {
            const isSelected = selectedLeader === index;

            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedLeader(index)}
                className={`group cursor-pointer rounded-3xl bg-white border p-5 flex flex-col justify-between transition-all duration-300 shadow-warm relative overflow-hidden ${
                  isSelected
                    ? 'border-marigold ring-2 ring-marigold/20 shadow-warm-lg scale-102'
                    : 'border-navy-heritage/10 hover:border-marigold/40 hover:shadow-warm-lg'
                }`}
              >
                {/* Active Indicator Top Tag */}
                {isSelected && (
                  <div className="absolute top-0 right-0 left-0 h-1 bg-marigold" />
                )}

                <div>
                  {/* Portrait with Rounded Heritage Frame */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-ivory-cream mb-4 border border-navy-heritage/10 group-hover:border-marigold/50 transition-colors">
                    <FallbackImage
                      src={leader.image}
                      alt={leader.name}
                      fallbackText={leader.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-heritage/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Name and Designation */}
                  <h3 className="font-bold text-base text-navy-heritage font-fraunces group-hover:text-marigold transition-colors">
                    {currentLang === 'hi' ? leader.hindiName : leader.name}
                  </h3>

                  <div className="mt-0.5 inline-block text-[11px] font-bold text-marigold-dark uppercase tracking-wider font-sans">
                    {currentLang === 'hi' ? leader.hindiRole : leader.role}
                  </div>

                  {leader.qualifications && (
                    <div className="text-[10px] text-charcoal-muted mt-0.5 font-medium">
                      {leader.qualifications}
                    </div>
                  )}

                  {/* Snippet */}
                  <p className="mt-3 text-xs text-charcoal-slate line-clamp-3 leading-relaxed font-sans italic">
                    "{currentLang === 'hi' ? leader.hindiQuote : leader.quote}"
                  </p>
                </div>

                {/* Bottom link to view full message */}
                <div className="mt-4 pt-3 border-t border-navy-heritage/5 flex items-center justify-between text-[11px] text-charcoal-muted font-medium">
                  <span className={isSelected ? 'text-marigold font-bold' : ''}>
                    {isSelected ? 'Currently Viewing' : 'Read Message'}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-marigold' : 'text-charcoal-muted'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expanded Spotlight Leader Message Box */}
        <div className="mt-10 rounded-3xl bg-white border border-navy-heritage/10 shadow-warm p-6 sm:p-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-ivory-cream shrink-0 border-2 border-marigold/30 shadow-md">
              <FallbackImage
                src={leaders[selectedLeader].image}
                alt={leaders[selectedLeader].name}
                fallbackText={leaders[selectedLeader].name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                <h3 className="text-xl font-bold text-navy-heritage font-fraunces">
                  {currentLang === 'hi' ? leaders[selectedLeader].hindiName : leaders[selectedLeader].name}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-marigold/10 text-marigold-dark text-xs font-bold font-sans">
                  {currentLang === 'hi' ? leaders[selectedLeader].hindiRole : leaders[selectedLeader].role}
                </span>
                {leaders[selectedLeader].phone && (
                  <a
                    href={`tel:${leaders[selectedLeader].phone}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-forest bg-forest-mist px-2.5 py-0.5 rounded-full hover:underline"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{leaders[selectedLeader].phone}</span>
                  </a>
                )}
              </div>

              <div className="relative">
                <Quote className="w-6 h-6 text-marigold/20 absolute -top-3 -left-3 hidden md:block" />
                <p className="text-sm sm:text-base text-charcoal-ink font-sans leading-relaxed md:pl-4">
                  "{currentLang === 'hi' ? leaders[selectedLeader].hindiQuote : leaders[selectedLeader].quote}"
                </p>
              </div>

              <div className="mt-3 flex items-center justify-center md:justify-start gap-4 text-xs text-charcoal-muted md:pl-4">
                <span>Vimla Global School, Beohari</span>
                <span>•</span>
                <span>CBSE Affiliation: 1031305</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
