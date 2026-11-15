import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Bus, CheckCircle2, Send, MessageSquare, Compass, School } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import confetti from 'canvas-confetti';

export default function Contact({ currentLang = 'en', openInquiryModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 50, spread: 60 });
  };

  return (
    <div className="min-h-screen bg-ivory-paper py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-heritage/5 border border-navy-heritage/10 text-navy-heritage text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-marigold" />
            <span>{currentLang === 'hi' ? 'रीवा रोड, ब्यौहारी' : 'Rewa Road, Beohari (Shahdol)'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-navy-heritage font-fraunces tracking-tight">
            {currentLang === 'hi' ? 'संपर्क करें एवं कैंपस पधारें' : 'Contact & Campus Visit'}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-charcoal-slate font-sans leading-relaxed">
            {currentLang === 'hi'
              ? 'तहसील कार्यालय के ठीक सामने, रीवा रोड, ब्यौहारी। हमारे द्वार अभिभावकों व विद्यार्थियों के लिए सदैव खुले हैं।'
              : 'Conveniently located directly in front of the Tehsil Office on Rewa Road, Beohari. Our administrative team is ready to welcome you.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Col: Contact Cards & Phone Numbers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Campus Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-navy-heritage/10 shadow-warm">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-marigold/15 text-marigold flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-heritage text-base font-fraunces">
                    School Campus Location
                  </h3>
                  <p className="text-xs text-charcoal-slate mt-1 font-sans leading-relaxed">
                    Near Tehsil Office, Rewa Road, Beohari, Post-Beohari, Distt- Shahdol, Madhya Pradesh, Pin: 484774
                  </p>
                  <p className="text-[11px] text-marigold-dark font-hindi mt-1">
                    तहसील कार्यालय के सामने, रीवा रोड, ब्यौहारी (म.प्र.)
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-navy-heritage/5 flex items-center gap-2 text-xs text-forest font-semibold">
                <Compass className="w-4 h-4 text-forest" />
                <span>3 km from Beohari Central Market on Main Highway</span>
              </div>
            </div>

            {/* Direct Phone Lines Card */}
            <div className="p-6 rounded-3xl bg-white border border-navy-heritage/10 shadow-warm space-y-4">
              <h4 className="font-bold text-navy-heritage text-base font-fraunces flex items-center gap-2">
                <Phone className="w-4 h-4 text-marigold" />
                <span>Click to Call Directly</span>
              </h4>

              <div className="space-y-3">
                <a
                  href="tel:+919977119006"
                  className="p-3 rounded-2xl bg-ivory-paper border border-navy-heritage/10 flex items-center justify-between hover:border-marigold transition-all group"
                >
                  <div>
                    <span className="text-xs font-bold text-navy-heritage block group-hover:text-marigold transition-colors">
                      +91-9977119006
                    </span>
                    <span className="text-[10px] text-charcoal-muted">School Reception / Admissions</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-navy-heritage text-white text-[10px] font-bold">
                    Call
                  </span>
                </a>

                <a
                  href="tel:+916262501601"
                  className="p-3 rounded-2xl bg-ivory-paper border border-navy-heritage/10 flex items-center justify-between hover:border-marigold transition-all group"
                >
                  <div>
                    <span className="text-xs font-bold text-navy-heritage block group-hover:text-marigold transition-colors">
                      +91-6262501601
                    </span>
                    <span className="text-[10px] text-charcoal-muted">Academic & Examination Office</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-navy-heritage text-white text-[10px] font-bold">
                    Call
                  </span>
                </a>

                <a
                  href="tel:+919424331444"
                  className="p-3 rounded-2xl bg-forest-mist border border-forest/20 flex items-center justify-between hover:border-forest transition-all group"
                >
                  <div>
                    <span className="text-xs font-bold text-forest-dark block">
                      +91-9424331444
                    </span>
                    <span className="text-[10px] text-forest-dark/80">Manager: Alok Srivastava (L.R.M.C.C.)</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-forest text-white text-[10px] font-bold">
                    Call Manager
                  </span>
                </a>
              </div>
            </div>

            {/* Email & Working Hours */}
            <div className="p-6 rounded-3xl bg-white border border-navy-heritage/10 shadow-warm space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-marigold" />
                <div>
                  <span className="text-xs text-charcoal-muted block font-sans">Official Email:</span>
                  <a href="mailto:vgsbeohari@gmail.com" className="text-xs font-bold text-navy-heritage hover:underline">
                    vgsbeohari@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-navy-heritage/5">
                <Clock className="w-5 h-5 text-forest" />
                <div>
                  <span className="text-xs text-charcoal-muted block font-sans">Administrative Hours:</span>
                  <span className="text-xs font-bold text-navy-heritage">
                    Mon – Sat: 8:00 AM – 3:30 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col: Interactive Message & Feedback Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-navy-heritage/10 p-6 sm:p-10 shadow-warm-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-navy-heritage/10 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-marigold uppercase tracking-wider font-fraunces block mb-1">
                    Send a Message
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-heritage font-fraunces">
                    {currentLang === 'hi' ? 'सीधा संदेश अथवा सुझाव भेजें' : 'Get in Touch with Administration'}
                  </h3>
                </div>
                <button
                  onClick={openInquiryModal}
                  className="px-3 py-1.5 rounded-xl bg-marigold/10 text-marigold-dark text-xs font-bold hover:bg-marigold/20 transition-colors"
                >
                  Admission Inquiry Form
                </button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-heritage mb-1 uppercase tracking-wider font-sans">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramakant Shukla"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-navy-heritage/20 text-xs text-navy-heritage focus:outline-none focus:ring-2 focus:ring-marigold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-heritage mb-1 uppercase tracking-wider font-sans">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9977119006"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-navy-heritage/20 text-xs text-navy-heritage focus:outline-none focus:ring-2 focus:ring-marigold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-heritage mb-1 uppercase tracking-wider font-sans">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. parent@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-navy-heritage/20 text-xs text-navy-heritage focus:outline-none focus:ring-2 focus:ring-marigold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-heritage mb-1 uppercase tracking-wider font-sans">
                      Your Message or Query *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ask about school bus routes, admission age criteria, fee installment details, or campus visit..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-navy-heritage/20 text-xs text-navy-heritage focus:outline-none focus:ring-2 focus:ring-marigold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-navy-heritage hover:bg-navy-light text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-marigold" />
                    <span>Send Message to School Office</span>
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-forest-mist text-forest flex items-center justify-center mx-auto border-2 border-forest/30">
                    <CheckCircle2 className="w-7 h-7 text-forest" />
                  </div>
                  <h4 className="text-xl font-bold text-navy-heritage font-fraunces">
                    Thank You! Your Message Has Been Sent.
                  </h4>
                  <p className="text-xs text-charcoal-slate max-w-md mx-auto">
                    The administration office at Vimla Global School, Beohari has received your inquiry. We will contact you at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-marigold hover:underline text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Direct WhatsApp Quick Contact */}
            <div className="mt-8 pt-4 border-t border-navy-heritage/10 flex items-center justify-between text-xs text-charcoal-slate">
              <span>Need immediate assistance?</span>
              <a
                href="https://wa.me/919977119006"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-forest hover:underline flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp (+91-9977119006)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Campus Map & Directions Card */}
        <div className="rounded-3xl bg-white border border-navy-heritage/10 p-6 sm:p-8 shadow-warm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-navy-heritage/10 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-marigold uppercase tracking-wider font-fraunces block mb-1">
                Directions Guide
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-navy-heritage font-fraunces">
                How to Reach Vimla Global School Campus
              </h3>
            </div>
            <span className="text-xs text-charcoal-muted">
              GPS Coordinates: 24.0322° N, 81.3811° E (Beohari, Shahdol)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-charcoal-slate font-sans">
            <div className="p-4 rounded-2xl bg-ivory-paper border border-navy-heritage/10">
              <span className="font-bold text-navy-heritage block text-sm mb-1">From Beohari Market / Railway:</span>
              <p>Follow Rewa Road northbound towards Tehsil Office. Campus gate is situated 3 kms from market, directly facing the Tehsil Office compound.</p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-paper border border-navy-heritage/10">
              <span className="font-bold text-navy-heritage block text-sm mb-1">From Bansagar & Budwa:</span>
              <p>Take the state highway toward Beohari. Our school buses operate daily along this route covering Bansagar, Budwa, Khadda, and Akhetpur.</p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-paper border border-navy-heritage/10">
              <span className="font-bold text-navy-heritage block text-sm mb-1">Campus Parking & Gates:</span>
              <p>Safe 13-acre campus with dedicated parent visitor parking, CCTV monitored security cabin, and separate bus bays.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
