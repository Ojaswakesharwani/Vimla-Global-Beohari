import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Heart, BookOpen, ShieldCheck, CheckCircle2, Quote, Sparkles, Users, Calendar } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import FallbackImage from '../components/FallbackImage';
import FoundingTribute from '../components/FoundingTribute';

export default function OurLegacy({ currentLang = 'en', openInquiryModal }) {
  const timelineEvents = [
    {
      year: "26 June 2018",
      title: "Consecration & Inauguration",
      hindiTitle: "भव्य स्थापना एवं उद्घाटन",
      desc: "Inaugurated by Shri Shri 108 Shri Sant Sharan Ji Maharaj (Chhapraur Ashram) in sacred memory of Late Shri Lavkesh Singh and named after Smt. Vimla Singh.",
      icon: Award
    },
    {
      year: "2019 - 2020",
      title: "Tata Class Edge Digital Collaboration",
      hindiTitle: "टाटा क्लास एज डिजिटल साझेदारी",
      desc: "Transformed classroom pedagogy across Beohari by installing Tata Class Edge interactive audio-visual projectors and digitized syllabi.",
      icon: Sparkles
    },
    {
      year: "2021 - 2022",
      title: "CBSE Affiliation Grant (No: 1031305)",
      hindiTitle: "सीबीएसई नई दिल्ली से संबद्धता",
      desc: "Received formal CBSE affiliation with School Code 51322, affirming our standards in pedagogy, teacher qualifications, and fire-life safety.",
      icon: ShieldCheck
    },
    {
      year: "2023 - 2024",
      title: "Division Championship & 100% Board Pass",
      hindiTitle: "संभाग स्तर पर खो-खो विजय व शत-प्रतिशत परिणाम",
      desc: "VGS student athletes won Division-level Kho-Kho competitions; 1st CBSE 10th Class Board batch passed with flying colors.",
      icon: Compass
    },
    {
      year: "Session 2026-27",
      title: "Inclusive Mentorship & Sibling Relief",
      hindiTitle: "व्यक्तिगत मार्गदर्शन व सहोदर राहत अभियान",
      desc: "Strengthened small-batch classrooms with certified Counselor & Special Educator, ₹2 Lakh student safety insurance, and 50% second-child fee reduction.",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-ivory-paper py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-heritage/5 border border-navy-heritage/10 text-navy-heritage text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-marigold" />
            <span>{currentLang === 'hi' ? 'परंपरा एवं दृष्टि' : 'Heritage & Guiding Creed'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-navy-heritage font-fraunces tracking-tight">
            {currentLang === 'hi' ? 'हमारा गौरवशाली इतिहास एवं दृष्टि' : 'Our Legacy, Vision & Mission'}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-charcoal-slate font-sans leading-relaxed">
            {currentLang === 'hi'
              ? 'बघेलखंड की पावन भूमि पर वैश्विक स्तर की शिक्षा और भारतीय मूल्यों का जीवंत केंद्र।'
              : 'A sanctuary of learning where every child’s innate greatness is uncovered with individualized care, modern technology, and deep moral roots.'}
          </p>
        </div>

        {/* Founding Inspiration Component */}
        <FoundingTribute currentLang={currentLang} />

        {/* 3 Pillars of Philosophy */}
        <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-white border border-navy-heritage/10 shadow-warm flex flex-col justify-between hover:border-marigold/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-marigold/15 text-marigold flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-heritage font-fraunces mb-2">
                {currentLang === 'hi' ? 'स्वयं की महानता पहचानें' : 'Find Your Own Greatness'}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-slate leading-relaxed font-sans">
                {currentLang === 'hi'
                  ? 'हमारा दृढ़ विश्वास है कि प्रत्येक बालक में एक विशिष्ट प्रतिभा छिपी होती है। हमारे शिक्षक कमजोर विषयों में व्यक्तिगत मार्गदर्शन देकर उनका आत्मविश्वास बढ़ाते हैं।'
                  : 'We ensure every child is special with their own uniqueness. We help them discover their interests and rebuild core academic fundamentals with patient dedication.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-navy-heritage/5 text-xs font-semibold text-forest">
              Individual Attention & Care
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-white border border-navy-heritage/10 shadow-warm flex flex-col justify-between hover:border-marigold/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-navy-heritage/10 text-navy-heritage flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-heritage font-fraunces mb-2">
                {currentLang === 'hi' ? 'सिद्धांतों का निर्माण' : 'Develop Principle'}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-slate leading-relaxed font-sans">
                {currentLang === 'hi'
                  ? 'विमला ग्लोबल स्कूल निष्पक्ष और समतामूलक शिक्षा देने के लिए कृतसंकल्प है। हम सभी विद्यार्थियों को समान अवसर देते हुए बड़ों के आदर व अनुशासन की शिक्षा देते हैं।'
                  : 'At VGS we are dutiful to provide unbiased education to all pupils. We consider them equal in all respects and raise them to respect society, elders, and the environment.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-navy-heritage/5 text-xs font-semibold text-forest">
              Bhartiya Sanskar & Integrity
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-white border border-navy-heritage/10 shadow-warm flex flex-col justify-between hover:border-marigold/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-forest-mist text-forest flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-heritage font-fraunces mb-2">
                {currentLang === 'hi' ? 'नेतृत्व की सीख' : 'Learn to Lead'}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-slate leading-relaxed font-sans">
                {currentLang === 'hi'
                  ? 'हम आने वाले कल के ऐसे जिम्मेदार नागरिक तैयार कर रहे हैं जो समाज और राष्ट्र की सेवा में अग्रसर रहकर राष्ट्र निर्माता के रूप में नेतृत्व प्रदान करेंगे।'
                  : 'We are shaping the tomorrow of India—nurturing confident, compassionate citizens who will serve society with competence, ethics, and leadership.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-navy-heritage/5 text-xs font-semibold text-forest">
              Global Vision, Responsible Citizens
            </div>
          </div>
        </div>

        {/* Clean Historical Timeline: 2018 to Today */}
        <div className="my-16 rounded-3xl bg-white border border-navy-heritage/10 p-6 sm:p-12 shadow-warm-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-marigold font-fraunces block mb-2">
              Journey of Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-heritage font-fraunces">
              {currentLang === 'hi' ? '२०१८ से आज तक की प्रेरक यात्रा' : 'Timeline: From June 2018 to Today'}
            </h2>
          </div>

          <div className="relative border-l-2 border-marigold/30 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-10">
            {timelineEvents.map((event, idx) => {
              const Icon = event.icon;
              return (
                <div key={idx} className="relative group">
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-white border-2 border-marigold flex items-center justify-center text-marigold shadow-sm group-hover:bg-marigold group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Year Tag */}
                  <span className="sm:absolute sm:-left-36 sm:top-1 sm:w-28 sm:text-right font-fraunces font-bold text-xs text-marigold-dark uppercase block mb-1">
                    {event.year}
                  </span>

                  <div className="p-5 rounded-2xl bg-ivory-paper border border-navy-heritage/10 shadow-xs group-hover:border-marigold/40 transition-all">
                    <h4 className="text-base font-bold text-navy-heritage font-fraunces mb-1">
                      {currentLang === 'hi' ? event.hindiTitle : event.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-slate font-sans leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dedicated Support Staff Callout (Counselor & Special Educator) */}
        <div className="rounded-3xl bg-gradient-to-r from-forest-dark to-forest text-white p-8 sm:p-10 shadow-warm-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold font-sans inline-block">
              CBSE Mandated Student Care
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-fraunces">
              Dedicated Counselor & Trained Special Educator
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl font-sans">
              Every child has a different learning pace. Our trained professional educators ensure weak students receive customized remediation, mental health guidance, and emotional confidence.
            </p>
          </div>

          <button
            onClick={openInquiryModal}
            className="px-6 py-3 rounded-xl bg-marigold hover:bg-marigold-dark text-white font-bold text-xs sm:text-sm shadow-md shrink-0 transition-all active:scale-95"
          >
            Schedule Campus Discussion
          </button>
        </div>
      </div>
    </div>
  );
}
