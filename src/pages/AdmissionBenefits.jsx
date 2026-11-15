import React, { useState } from 'react';
import { Sparkles, CheckCircle2, HeartHandshake, ShieldCheck, BookOpenCheck, Calendar, FileText, ArrowRight, UserCheck, HelpCircle } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import FeeCalculator from '../components/FeeCalculator';
import ParentTrustGrid from '../components/ParentTrustGrid';

export default function AdmissionBenefits({ currentLang = 'en', openInquiryModal }) {
  const { criteria, documentsChecklist } = schoolData.admissionDetails;

  const admissionSteps = [
    {
      step: "01",
      titleEn: "Online Inquiry / Campus Visit",
      titleHi: "ऑनलाइन फॉर्म अथवा कैंपस भेंट",
      descEn: "Submit the simple 2-minute online form or visit our school desk near Tehsil Office, Rewa Road, Beohari to collect prospectus.",
      descHi: "२ मिनट का ऑनलाइन पूछताछ फॉर्म भरें या रीवा रोड स्थित स्कूल कार्यालय से निःशुल्क परामर्श प्राप्त करें।"
    },
    {
      step: "02",
      titleEn: "Friendly Interaction & Assessment",
      titleHi: "आत्मीय संवाद एवं सरल मूल्यांकन",
      descEn: "A gentle, stress-free interaction with teachers to understand your child's interests and identify areas needing special focus.",
      descHi: "बच्चे की रुचियों और बुनियादी समझ को जानने के लिए शिक्षकों द्वारा सहज व भयमुक्त बातचीत।"
    },
    {
      step: "03",
      titleEn: "Admission, Free Kit & 50% Waiver",
      titleHi: "प्रवेश, निःशुल्क पुस्तकें व ५०% छूट",
      descEn: "Submit basic documents, receive the complimentary full book-kit, and enjoy 50% concession on second sibling tuition fees.",
      descHi: "दस्तावेज़ जमा कर प्रवेश सुनिश्चित करें, पूरी पुस्तक किट निःशुल्क पाएं और दूसरे बच्चे की फीस में ५०% छूट का लाभ लें।"
    }
  ];

  return (
    <div className="min-h-screen bg-ivory-paper py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marigold/10 border border-marigold/20 text-marigold-dark text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-marigold" />
            <span>{currentLang === 'hi' ? 'सत्र २०२६-२७ प्रवेश विवरण' : 'Session 2026-27 Admissions Open'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-navy-heritage font-fraunces tracking-tight">
            {currentLang === 'hi' ? 'अभिभावक लाभ एवं सरल प्रवेश प्रक्रिया' : 'Parent Benefits & Simple Admissions'}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-charcoal-slate font-sans leading-relaxed">
            {currentLang === 'hi'
              ? 'बिना किसी जटिलता के सरल ३-चरणीय प्रवेश, ५०% सहोदर छूट, निःशुल्क किताबें एवं ₹२ लाख सुरक्षा बीमा।'
              : 'Clear, compassionate admission guidelines designed to ensure every family in Beohari can access world-class CBSE education effortlessly.'}
          </p>
        </div>

        {/* 3-Step Visual Admission Guide */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-marigold font-fraunces block mb-1">
              Step-by-Step
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-heritage font-fraunces">
              {currentLang === 'hi' ? 'सरल ३-चरणीय प्रवेश प्रक्रिया' : '3-Step Easy Admission Process'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {admissionSteps.map((step, idx) => (
              <div
                key={step.step}
                className="relative rounded-3xl bg-white border border-navy-heritage/10 p-6 sm:p-8 shadow-warm flex flex-col justify-between hover:border-marigold/40 transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-navy-heritage text-marigold font-black text-lg flex items-center justify-center mb-5 font-fraunces shadow-sm">
                    {step.step}
                  </div>

                  <h3 className="text-lg font-bold text-navy-heritage font-fraunces mb-2">
                    {currentLang === 'hi' ? step.titleHi : step.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-slate font-sans leading-relaxed">
                    {currentLang === 'hi' ? step.descHi : step.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-heritage/5 flex items-center gap-1.5 text-xs text-forest font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                  <span>Verified Step</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Sibling Concession & Installment Calculator */}
        <div className="mb-16">
          <FeeCalculator
            currentLang={currentLang}
            onInquireWithDetails={(d) => openInquiryModal(d)}
          />
        </div>

        {/* Age Criteria & Seats Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Age Guidelines (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-navy-heritage/10 p-6 sm:p-8 shadow-warm">
            <div className="flex items-center gap-2 mb-6 border-b border-navy-heritage/10 pb-4">
              <Calendar className="w-5 h-5 text-marigold" />
              <h3 className="text-lg sm:text-xl font-bold text-navy-heritage font-fraunces">
                Age Eligibility & Available Seats (2026-27)
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-ivory-cream text-navy-heritage font-bold font-fraunces uppercase tracking-wider">
                    <th className="py-2.5 px-3 rounded-l-lg">Class / Grade</th>
                    <th className="py-2.5 px-3">Age as of March 31</th>
                    <th className="py-2.5 px-3 rounded-r-lg text-right">Vacancies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-heritage/5">
                  {criteria.map((c, i) => (
                    <tr key={i} className="hover:bg-ivory-paper/60">
                      <td className="py-3 px-3 font-bold text-navy-heritage">{c.grade}</td>
                      <td className="py-3 px-3 text-charcoal-slate">{c.age}</td>
                      <td className="py-3 px-3 text-right font-semibold text-forest-dark">{c.seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-charcoal-muted mt-4 font-sans">
              * Note: Age criteria follow the revised National Education Policy (NEP) and CBSE foundational stage norms.
            </p>
          </div>

          {/* Right: Documents Checklist (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-navy-heritage/10 p-6 sm:p-8 shadow-warm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-navy-heritage/10 pb-4">
                <FileText className="w-5 h-5 text-marigold" />
                <h3 className="text-lg sm:text-xl font-bold text-navy-heritage font-fraunces">
                  Documents Checklist
                </h3>
              </div>

              <ul className="space-y-3">
                {documentsChecklist.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-charcoal-slate font-sans">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${d.mandatory ? 'text-forest' : 'text-charcoal-muted'}`} />
                    <div>
                      <span className="font-semibold text-charcoal-ink block">
                        {currentLang === 'hi' ? d.hindiDoc : d.doc}
                      </span>
                      <span className="text-[10px] text-charcoal-muted">
                        {d.mandatory ? '(Mandatory at Admission)' : '(For Class 1 & above transfers)'}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-navy-heritage/10">
              <button
                onClick={openInquiryModal}
                className="w-full py-3 rounded-xl bg-marigold hover:bg-marigold-dark text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Fill 2-Minute Inquiry Form</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
