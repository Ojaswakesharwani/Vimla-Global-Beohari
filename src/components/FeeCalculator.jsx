import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, HeartHandshake, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

const gradeFees = [
  { grade: "Pre-Primary (Nursery, LKG, UKG)", code: "pre", fee: 14400, desc: "Foundational stage with play-way kit & activity labs" },
  { grade: "Primary (Class 1st to 5th)", code: "prim", fee: 18000, desc: "CBSE English Medium foundational literacy & numeracy" },
  { grade: "Middle (Class 6th to 8th)", code: "mid", fee: 21600, desc: "Tata Class Edge digital labs & subject specialization" },
  { grade: "Secondary (Class 9th & 10th)", code: "sec", fee: 26400, desc: "CBSE Board exam preparation, science labs & coaching" }
];

export default function FeeCalculator({ currentLang = 'en', onInquireWithDetails }) {
  const [firstGrade, setFirstGrade] = useState("prim");
  const [hasSibling, setHasSibling] = useState(true);
  const [secondGrade, setSecondGrade] = useState("pre");

  const child1Data = gradeFees.find(g => g.code === firstGrade) || gradeFees[1];
  const child2Data = gradeFees.find(g => g.code === secondGrade) || gradeFees[0];

  const child1Fee = child1Data.fee;
  const child2OriginalFee = child2Data.fee;
  const child2Discount = hasSibling ? child2OriginalFee * 0.5 : 0;
  const child2FinalFee = child2OriginalFee - child2Discount;

  const totalAnnual = child1Fee + (hasSibling ? child2FinalFee : 0);
  const totalSavings = child2Discount;

  // 3 Installments: April (Admission/Term 1), November (Term 2), February (Term 3)
  const installment1 = Math.round(totalAnnual * 0.35);
  const installment2 = Math.round(totalAnnual * 0.35);
  const installment3 = totalAnnual - (installment1 + installment2);

  const handleCelebrate = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="rounded-3xl bg-white border border-navy-heritage/10 shadow-warm-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-navy-heritage/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-marigold/10 text-marigold-dark text-xs font-bold font-sans mb-2">
            <Calculator className="w-3.5 h-3.5 text-marigold" />
            <span>{currentLang === 'hi' ? 'पारदर्शी फीस गणक' : '100% Transparent Fee Calculator'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-navy-heritage font-fraunces">
            {currentLang === 'hi'
              ? 'सहोदर छूट (Sibling Waiver) एवं ३-किस्त गणक'
              : 'Sibling Concession & 3-Term Installment Calculator'}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-slate mt-1 font-sans">
            {currentLang === 'hi'
              ? 'दूसरे बच्चे पर ५०% की छूट और सत्र २०२६-२७ की ३ आसान किस्तों का तुरंत हिसाब लगाएं।'
              : 'Instantly calculate fee schedule for Session 2026-27 with transparent 3-term installments.'}
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-forest-mist border border-forest/20 text-forest-dark text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-forest" />
          <span>No Hidden Charges</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs (Grade Selection) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Child 1 */}
          <div className="p-4 rounded-2xl bg-ivory-paper border border-navy-heritage/10">
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-heritage mb-2 font-fraunces">
              {currentLang === 'hi' ? 'प्रथम बच्चे की कक्षा:' : 'First Child Grade:'}
            </label>
            <select
              value={firstGrade}
              onChange={(e) => setFirstGrade(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-navy-heritage/20 bg-white text-navy-heritage font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-marigold"
            >
              {gradeFees.map((g) => (
                <option key={g.code} value={g.code}>
                  {g.grade} — ₹{g.fee.toLocaleString('en-IN')}/year
                </option>
              ))}
            </select>
            <p className="text-[11px] text-charcoal-muted mt-2 font-sans">
              {child1Data.desc}
            </p>
          </div>

          {/* Sibling Waiver Toggle Checkbox */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-marigold/10 via-white to-ivory-cream border border-marigold/30">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={hasSibling}
                onChange={(e) => {
                  setHasSibling(e.target.checked);
                  if (e.target.checked) handleCelebrate();
                }}
                className="w-5 h-5 rounded text-marigold focus:ring-marigold cursor-pointer accent-marigold"
              />
              <div>
                <span className="font-bold text-navy-heritage text-sm block">
                  {currentLang === 'hi'
                    ? 'दूसरा बच्चा (सहोदर भाई/बहन) प्रवेशित है'
                    : 'Enrolling a Second Sibling (Apply 50% Fee Concession)'}
                </span>
                <span className="text-xs text-marigold-dark font-medium">
                  {currentLang === 'hi'
                    ? 'दूसरे बच्चे की ट्यूशन फीस में ५०% की छूट स्वतः लागू होगी!'
                    : '50% discount will be slashed automatically on the second child!'}
                </span>
              </div>
            </label>

            {hasSibling && (
              <div className="mt-4 pt-3 border-t border-marigold/20 animate-fadeIn">
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-heritage mb-2 font-fraunces">
                  {currentLang === 'hi' ? 'दूसरे बच्चे की कक्षा:' : 'Second Child Grade:'}
                </label>
                <select
                  value={secondGrade}
                  onChange={(e) => setSecondGrade(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-navy-heritage/20 bg-white text-navy-heritage font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-marigold"
                >
                  {gradeFees.map((g) => (
                    <option key={g.code} value={g.code}>
                      {g.grade} — ₹{g.fee.toLocaleString('en-IN')}/year
                    </option>
                  ))}
                </select>
                <div className="mt-2 flex items-center justify-between text-xs text-forest-dark font-semibold">
                  <span>Regular Fee: ₹{child2OriginalFee.toLocaleString('en-IN')}</span>
                  <span className="px-2 py-0.5 rounded bg-marigold text-white text-[11px] font-bold">
                    You Pay: ₹{child2FinalFee.toLocaleString('en-IN')} (50% Off)
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Book Kit Handover Note */}
          <div className="p-3.5 rounded-xl bg-forest-mist border border-forest/20 text-xs text-forest-dark flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
            <span>
              {currentLang === 'hi'
                ? 'विशेष सौगात: नवीन प्रवेश पर विद्यार्थी को पूरी पुस्तक किट निःशुल्क प्रदान की जाती है।'
                : 'Special Welcome: Full academic books bundle is issued 100% free upon new admission.'}
            </span>
          </div>
        </div>

        {/* Right Output (Visual Cost & Installments breakdown) */}
        <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl bg-ivory-paper border border-navy-heritage/10 p-5 sm:p-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted block mb-3 font-fraunces">
              {currentLang === 'hi' ? 'फीस एवं बचत सारांश' : 'Fee & Savings Summary'}
            </span>

            {/* Total Annual Payable */}
            <div className="flex items-baseline justify-between border-b border-navy-heritage/10 pb-4 mb-4">
              <div>
                <span className="text-xs text-charcoal-slate font-medium block">
                  {currentLang === 'hi' ? 'कुल वार्षिक फीस (सभी बच्चे):' : 'Total Net Annual Fee:'}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-navy-heritage font-fraunces">
                  ₹{totalAnnual.toLocaleString('en-IN')}
                </span>
              </div>

              {hasSibling && (
                <div className="text-right">
                  <span className="text-[11px] text-forest-dark font-semibold block">
                    {currentLang === 'hi' ? 'सहोदर बचत:' : 'Total Sibling Savings:'}
                  </span>
                  <span className="text-lg font-bold text-forest font-fraunces">
                    -₹{totalSavings.toLocaleString('en-IN')} Saved
                  </span>
                </div>
              )}
            </div>

            {/* 3-Term Installment Schedule */}
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-heritage mb-3 font-fraunces flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-marigold" />
              <span>{currentLang === 'hi' ? '३ आसान किस्तों में भुगतान' : '3 Easy Installments Schedule'}</span>
            </h4>

            <div className="space-y-2.5">
              {/* Installment 1 */}
              <div className="p-3 rounded-xl bg-white border border-navy-heritage/10 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-xs font-bold text-navy-heritage block">
                    1st Term (April / Admission)
                  </span>
                  <span className="text-[10px] text-charcoal-muted">
                    Registration + Free Book Kit Handover
                  </span>
                </div>
                <span className="text-sm font-bold text-navy-heritage font-fraunces">
                  ₹{installment1.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Installment 2 */}
              <div className="p-3 rounded-xl bg-white border border-navy-heritage/10 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-xs font-bold text-navy-heritage block">
                    2nd Term (November / Mid-Term)
                  </span>
                  <span className="text-[10px] text-charcoal-muted">
                    Half-Yearly Evaluation & Activities
                  </span>
                </div>
                <span className="text-sm font-bold text-navy-heritage font-fraunces">
                  ₹{installment2.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Installment 3 */}
              <div className="p-3 rounded-xl bg-white border border-navy-heritage/10 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-xs font-bold text-navy-heritage block">
                    3rd Term (February / Final Exams)
                  </span>
                  <span className="text-[10px] text-charcoal-muted">
                    Annual Clearance & Progress Report
                  </span>
                </div>
                <span className="text-sm font-bold text-navy-heritage font-fraunces">
                  ₹{installment3.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-6 pt-4 border-t border-navy-heritage/10">
            <button
              onClick={() => {
                if (onInquireWithDetails) {
                  onInquireWithDetails({
                    child1: child1Data.grade,
                    child2: hasSibling ? child2Data.grade : "None",
                    annualEst: totalAnnual,
                    savings: totalSavings
                  });
                }
              }}
              className="w-full py-3 rounded-xl bg-marigold hover:bg-marigold-dark text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-gold-glow flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {currentLang === 'hi'
                  ? 'इस गणना के साथ प्रवेश पूछताछ भेजें'
                  : 'Proceed to Admission Inquiry with this Estimate'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
