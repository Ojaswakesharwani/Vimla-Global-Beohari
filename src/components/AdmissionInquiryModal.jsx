import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, MessageSquare, CheckCircle2, Sparkles, Copy, Bus, HeartHandshake, School } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AdmissionInquiryModal({ isOpen, onClose, initialData = null, currentLang = 'en' }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    studentName: '',
    targetClass: initialData?.child1 ? initialData.child1.split(' ')[0] : 'Class 1st',
    villageLocation: 'Beohari',
    needBus: 'yes',
    hasSibling: initialData?.child2 && initialData.child2 !== 'None' ? 'yes' : 'no',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formattedSummary = `*NEW ADMISSION INQUIRY - VGS BEOHARI (2026-27)*
------------------------------------
*Parent Name:* ${formData.parentName || 'Parent'}
*Phone:* ${formData.phone || 'Not provided'}
*Student Name:* ${formData.studentName || 'Student'}
*Class Sought:* ${formData.targetClass}
*Residence / Area:* ${formData.villageLocation}
*School Bus Service Needed:* ${formData.needBus === 'yes' ? 'Yes (25km coverage)' : 'No (Self Conveyance)'}
*Sibling Concession (50%):* ${formData.hasSibling === 'yes' ? 'Yes, Enrolling Second Child' : 'Single Child'}
${formData.notes ? `*Additional Notes:* ${formData.notes}` : ''}
------------------------------------
Sent via Vimla Global School Website Portal
CBSE Affiliation No: 1031305 | School Code: 51322`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleWhatsAppSend = () => {
    const encoded = encodeURIComponent(formattedSummary);
    window.open(`https://wa.me/919977119006?text=${encoded}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-heritage/70 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-warm-xl border border-navy-heritage/10 overflow-hidden my-8"
      >
        {/* Header Strip */}
        <div className="bg-navy-heritage text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-marigold text-xs font-bold uppercase tracking-wider mb-2 font-fraunces">
            <Sparkles className="w-4 h-4" />
            <span>Session 2026-27 Admissions Open</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-fraunces">
            {currentLang === 'hi' ? 'त्वरित प्रवेश पूछताछ फॉर्म' : '2-Minute Direct Admission Inquiry'}
          </h3>

          <p className="text-xs text-white/80 mt-1 max-w-md font-sans">
            {currentLang === 'hi'
              ? 'यह फॉर्म भरें — हमारा कार्यालय आपसे संपर्क कर प्रवेश एवं प्रॉस्पेक्टस की जानकारी देगा।'
              : 'Our administration office will follow up immediately to assist with prospectus and fee concessions.'}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-bold text-navy-heritage mb-1 uppercase tracking-wider font-sans">
                    {currentLang === 'hi' ? 'अभिभावक का नाम *' : 'Parent / Guardian Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar Patel"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-navy-heritage/20 text-sm focus:outline-none focus:ring-2 focus:ring-marigold"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-navy-heritage mb-1 uppercase tracking-wider font-sans">
                    {currentLang === 'hi' ? 'मोबाइल नंबर *' : 'WhatsApp / Mobile Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-navy-heritage/20 text-sm focus:outline-none focus:ring-2 focus:ring-marigold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Student Name */}
                <div>
                  <label className="block text-xs font-bold text-navy-heritage mb-1 uppercase tracking-wider font-sans">
                    {currentLang === 'hi' ? 'विद्यार्थी का नाम *' : 'Student Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="e.g. Aarav Patel"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-navy-heritage/20 text-sm focus:outline-none focus:ring-2 focus:ring-marigold"
                  />
                </div>

                {/* Target Class */}
                <div>
                  <label className="block text-xs font-bold text-navy-heritage mb-1 uppercase tracking-wider font-sans">
                    {currentLang === 'hi' ? 'प्रवेश हेतु कक्षा *' : 'Class Seeking Admission *'}
                  </label>
                  <select
                    name="targetClass"
                    value={formData.targetClass}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-navy-heritage/20 text-sm focus:outline-none focus:ring-2 focus:ring-marigold bg-white"
                  >
                    <option value="Nursery">Nursery / Pre-KG (Age 3+)</option>
                    <option value="LKG">LKG (Age 3.5 - 4)</option>
                    <option value="UKG">UKG (Age 4+)</option>
                    <option value="Class 1st">Class 1st</option>
                    <option value="Class 2nd">Class 2nd</option>
                    <option value="Class 3rd">Class 3rd</option>
                    <option value="Class 4th">Class 4th</option>
                    <option value="Class 5th">Class 5th</option>
                    <option value="Class 6th">Class 6th</option>
                    <option value="Class 7th">Class 7th</option>
                    <option value="Class 8th">Class 8th</option>
                    <option value="Class 9th">Class 9th</option>
                    <option value="Class 10th">Class 10th (CBSE Board)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location / Village */}
                <div>
                  <label className="block text-xs font-bold text-navy-heritage mb-1 uppercase tracking-wider font-sans">
                    {currentLang === 'hi' ? 'निवास स्थान / गाँव / कस्बा *' : 'Village / Location / Colony *'}
                  </label>
                  <input
                    type="text"
                    name="villageLocation"
                    value={formData.villageLocation}
                    onChange={handleChange}
                    placeholder="e.g. Beohari Town / Bansagar / Budwa"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-navy-heritage/20 text-sm focus:outline-none focus:ring-2 focus:ring-marigold"
                  />
                </div>

                {/* Safe Bus Service Needed */}
                <div>
                  <label className="block text-xs font-bold text-navy-heritage mb-1 uppercase tracking-wider font-sans">
                    {currentLang === 'hi' ? 'स्कूल बस सुविधा चाहिए?' : 'School Bus Required?'}
                  </label>
                  <select
                    name="needBus"
                    value={formData.needBus}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-navy-heritage/20 text-sm focus:outline-none focus:ring-2 focus:ring-marigold bg-white"
                  >
                    <option value="yes">Yes (Safe 25km radius bus)</option>
                    <option value="no">No (Self conveyance / Walk)</option>
                  </select>
                </div>
              </div>

              {/* Sibling Concession check */}
              <div className="p-3 rounded-xl bg-ivory-paper border border-navy-heritage/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <HeartHandshake className="w-5 h-5 text-marigold shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-navy-heritage block">
                      {currentLang === 'hi' ? 'सहोदर भाई/बहन छूट (५०% डिस्काउंट)' : 'Sibling Concession (50% Off 2nd Child)'}
                    </span>
                    <span className="text-[11px] text-charcoal-muted">
                      {currentLang === 'hi' ? 'क्या परिवार का दूसरा बच्चा भी पढ़ रहा है?' : 'Are two children from same family enrolling?'}
                    </span>
                  </div>
                </div>

                <select
                  name="hasSibling"
                  value={formData.hasSibling}
                  onChange={handleChange}
                  className="px-3 py-1.5 rounded-lg border border-navy-heritage/20 text-xs font-bold bg-white text-navy-heritage"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes (Apply 50%)</option>
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-marigold hover:bg-marigold-dark text-white font-bold text-sm shadow-md hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {currentLang === 'hi' ? 'प्रवेश सारांश तैयार करें (आगे बढ़ें)' : 'Generate Inquiry & Proceed'}
                  </span>
                </button>
              </div>
            </form>
          ) : (
            /* Submission Success & Direct WhatsApp Send */
            <div className="text-center py-4 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-forest-mist text-forest flex items-center justify-center mx-auto border-2 border-forest/30 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-forest" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-navy-heritage font-fraunces">
                  {currentLang === 'hi' ? 'प्रवेश सारांश सफलतापूर्वक तैयार हुआ!' : 'Inquiry Summary Ready!'}
                </h4>
                <p className="text-xs text-charcoal-slate mt-1 max-w-md mx-auto font-sans">
                  {currentLang === 'hi'
                    ? 'कृपया नीचे दिए गए हरे बटन से स्कूल के आधिकारिक व्हाट्सएप (+91-9977119006) पर सीधे भेजें।'
                    : 'Click below to send directly to the VGS School Admission Desk on WhatsApp, or copy the details.'}
                </p>
              </div>

              {/* Formatted Text Box */}
              <div className="p-4 rounded-2xl bg-ivory-paper border border-navy-heritage/10 text-left text-xs font-mono text-charcoal-ink max-h-48 overflow-y-auto whitespace-pre-line leading-relaxed shadow-inner">
                {formattedSummary}
              </div>

              {/* Two Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-forest-glow flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp (+91-9977119006)</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-ivory-cream border border-navy-heritage/20 text-navy-heritage font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Copy className="w-4 h-4 text-marigold" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                </button>
              </div>

              <div className="pt-3 border-t border-navy-heritage/10 flex items-center justify-center gap-4 text-xs text-charcoal-muted">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-marigold hover:underline font-semibold"
                >
                  Edit Information
                </button>
                <span>•</span>
                <button
                  onClick={onClose}
                  className="text-navy-heritage hover:underline font-semibold"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
