import React from 'react';
import { Compass, Trophy, Monitor, Trees, Building2, ShieldCheck, CheckCircle2, Sparkles, MapPin, Bus } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import CampusTourGallery from '../components/CampusTourGallery';
import FallbackImage from '../components/FallbackImage';

export default function SmartCampus({ currentLang = 'en', openInquiryModal }) {
  return (
    <div className="min-h-screen bg-ivory-paper py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-mist border border-forest/20 text-forest-dark text-xs font-bold uppercase tracking-wider mb-3">
            <Trees className="w-3.5 h-3.5 text-forest" />
            <span>{currentLang === 'hi' ? '१३ एकड़ हरा-भरा परिसर' : '13-Acre Eco-Friendly Sanctuary'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-navy-heritage font-fraunces tracking-tight">
            {currentLang === 'hi' ? 'स्मार्ट कैंपस, खेलकूद एवं गतिविधियां' : 'Smart Campus, Sports & Achievements'}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-charcoal-slate font-sans leading-relaxed">
            {currentLang === 'hi'
              ? 'टाटा क्लास एज स्मार्ट रूम्स, संभाग स्तरीय खेल मैदान, अत्याधुनिक विज्ञान प्रयोगशालाएं और सुरक्षित बस सुविधा।'
              : 'Experience our world-class educational infrastructure designed to nurture minds, foster athletic excellence, and ensure student well-being.'}
          </p>
        </div>

        {/* 4 Feature Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-white border border-navy-heritage/10 shadow-warm">
            <div className="w-12 h-12 rounded-2xl bg-marigold/15 text-marigold flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-navy-heritage text-base font-fraunces mb-1">
              Tata Class Edge
            </h3>
            <p className="text-xs text-charcoal-slate leading-relaxed">
              Interactive smart projectors and audio-visual pedagogical modules make learning engaging.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-navy-heritage/10 shadow-warm">
            <div className="w-12 h-12 rounded-2xl bg-forest-mist text-forest flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-navy-heritage text-base font-fraunces mb-1">
              Division Kho-Kho
            </h3>
            <p className="text-xs text-charcoal-slate leading-relaxed">
              Extensive cricket ground, athletic track, and champion division-level Kho-Kho team.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-navy-heritage/10 shadow-warm">
            <div className="w-12 h-12 rounded-2xl bg-navy-heritage/10 text-navy-heritage flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-navy-heritage text-base font-fraunces mb-1">
              Labs & 2,500+ Library
            </h3>
            <p className="text-xs text-charcoal-slate leading-relaxed">
              Fully equipped Physics, Chemistry, Biology, and Computer Labs with 30+ workstations.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-navy-heritage/10 shadow-warm">
            <div className="w-12 h-12 rounded-2xl bg-forest-mist text-forest flex items-center justify-center mb-4">
              <Bus className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-navy-heritage text-base font-fraunces mb-1">
              25 km Safe Transit
            </h3>
            <p className="text-xs text-charcoal-slate leading-relaxed">
              Speed governor & conductor monitored buses to Bansagar, Budwa, Khadda, and Akhetpur.
            </p>
          </div>
        </div>

        {/* Interactive Filterable Showcase Component */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-marigold uppercase tracking-wider font-fraunces block mb-1">
                Visual Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-heritage font-fraunces">
                {currentLang === 'hi' ? 'कैंपस एवं सह-पाठ्यक्रम गतिविधियां' : 'Filter Campus Spaces & Activities'}
              </h2>
            </div>
          </div>

          <CampusTourGallery currentLang={currentLang} />
        </div>

        {/* Detailed Infrastructure Specifications Table */}
        <div className="rounded-3xl bg-white border border-navy-heritage/10 shadow-warm-xl p-6 sm:p-10 mb-16">
          <div className="flex items-center gap-3 mb-6 border-b border-navy-heritage/10 pb-4">
            <Building2 className="w-6 h-6 text-marigold" />
            <div>
              <h3 className="text-xl font-bold text-navy-heritage font-fraunces">
                Campus Infrastructure & Safety Specs
              </h3>
              <p className="text-xs text-charcoal-muted">
                Official CBSE Affiliation Infrastructure Disclosures (No: 1031305)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {schoolData.cbseDisclosure.infrastructure.map((inf, i) => (
              <div key={i} className="p-4 rounded-2xl bg-ivory-paper border border-navy-heritage/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-navy-heritage text-sm block font-fraunces">
                    {inf.item}
                  </span>
                  <span className="text-xs text-charcoal-slate mt-0.5 block leading-relaxed font-sans">
                    {inf.spec}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Visit Invitation */}
        <div className="rounded-3xl bg-gradient-to-r from-navy-heritage via-navy-light to-navy-heritage text-white p-8 sm:p-12 text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold font-fraunces">
            {currentLang === 'hi' ? 'स्वयं आकर कैंपस का अवलोकन करें' : 'Experience the 13-Acre Green Campus in Person'}
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto font-sans leading-relaxed">
            Our campus is located in front of Tehsil Office on Rewa Road, Beohari. Parents and guardians are warmly invited for guided walk-throughs of the smart classrooms and laboratories.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openInquiryModal}
              className="px-6 py-3 rounded-xl bg-marigold hover:bg-marigold-dark text-white font-bold text-xs sm:text-sm shadow-md"
            >
              Book a Campus Guided Visit
            </button>
            <a
              href="tel:+919977119006"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20"
            >
              Call Campus Help Desk (+91-9977119006)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
