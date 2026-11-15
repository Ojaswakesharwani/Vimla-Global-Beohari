import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Award, Download, ExternalLink } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import CBSESarasTable from '../components/CBSESarasTable';

export default function CBSEDisclosure({ currentLang = 'en', openInquiryModal }) {
  return (
    <div className="min-h-screen bg-ivory-paper py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-mist border border-forest/20 text-forest-dark text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-forest" />
            <span>{currentLang === 'hi' ? 'सीबीएसई संबद्धता क्रमांक १०३१३०५' : 'Official CBSE Affiliation No: 1031305'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-navy-heritage font-fraunces tracking-tight">
            {currentLang === 'hi'
              ? 'सीबीएसई अनिवार्य सार्वजनिक प्रकटीकरण एवं शिक्षक सूची'
              : 'CBSE Mandatory Disclosure & Staff Directory'}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-charcoal-slate font-sans leading-relaxed">
            {currentLang === 'hi'
              ? 'केंद्रीय माध्यमिक शिक्षा बोर्ड (CBSE SARAS 4.0) के नियमानुसार सभी विधिक दस्तावेज, सुरक्षा प्रमाण पत्र एवं शैक्षणिक स्टाफ विवरण।'
              : 'Published in strict accordance with Central Board of Secondary Education (CBSE) Appendix IX mandatory transparency norms.'}
          </p>
        </div>

        {/* The Searchable Verified CBSE SARAS Table Component */}
        <CBSESarasTable currentLang={currentLang} />

        {/* Board Examination Results Highlight */}
        <div className="mt-16 rounded-3xl bg-white border border-navy-heritage/10 p-6 sm:p-10 shadow-warm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-navy-heritage/10 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-marigold uppercase tracking-wider font-fraunces block mb-1">
                Academic Track Record
              </span>
              <h3 className="text-xl font-bold text-navy-heritage font-fraunces">
                CBSE Class 10th Board Examination Performance
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-forest text-white text-xs font-bold font-sans">
              100% Pass Result
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-ivory-paper border border-navy-heritage/10 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-navy-heritage font-fraunces">100%</span>
              <span className="text-xs text-charcoal-slate font-semibold block mt-1">First Division & Pass Rate</span>
              <span className="text-[10px] text-charcoal-muted">Session 2023-24 & 2024-25</span>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-paper border border-navy-heritage/10 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-forest font-fraunces">94.8%</span>
              <span className="text-xs text-charcoal-slate font-semibold block mt-1">School Highest Score</span>
              <span className="text-[10px] text-charcoal-muted">Science & Mathematics Distinction</span>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-paper border border-navy-heritage/10 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-marigold font-fraunces">30 : 1</span>
              <span className="text-xs text-charcoal-slate font-semibold block mt-1">Focused Class Batches</span>
              <span className="text-[10px] text-charcoal-muted">Individual Mentorship for All</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
