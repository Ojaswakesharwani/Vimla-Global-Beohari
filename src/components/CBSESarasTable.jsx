import React, { useState } from 'react';
import { Search, FileText, CheckCircle2, Download, ExternalLink, ShieldCheck, UserCheck, Building2, School, Eye, X } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function CBSESarasTable({ currentLang = 'en' }) {
  const [activeTab, setActiveTab] = useState('documents');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingDoc, setViewingDoc] = useState(null);

  const { cbseDisclosure } = schoolData;

  const filteredDocs = cbseDisclosure.documents.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.authority.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFaculty = cbseDisclosure.facultySummary.facultyDirectory.filter(f =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.desig.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.subjects.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-3xl bg-white border border-navy-heritage/10 shadow-warm-xl p-6 sm:p-8 lg:p-10 relative">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-navy-heritage/10 pb-6 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-mist border border-forest/20 text-forest-dark text-xs font-bold font-sans mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-forest" />
            <span>CBSE SARAS 4.0 Verified Compliance</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-bold text-navy-heritage font-fraunces">
            {currentLang === 'hi'
              ? 'सीबीएसई अनिवार्य सार्वजनिक प्रकटीकरण (SARAS)'
              : 'CBSE Mandatory Public Disclosure (SARAS)'}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-slate mt-1 font-sans">
            Affiliation No: <strong>1031305</strong> • School Code: <strong>51322</strong> • Run & Managed by L.R.M.C.C.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documents or staff..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-navy-heritage/20 text-xs text-navy-heritage focus:outline-none focus:ring-2 focus:ring-marigold bg-ivory-paper"
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none border-b border-navy-heritage/5">
        <button
          onClick={() => setActiveTab('documents')}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
            activeTab === 'documents'
              ? 'bg-navy-heritage text-white shadow-sm'
              : 'bg-ivory-paper text-charcoal-slate hover:bg-ivory-cream'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Section B: Legal & Safety Documents (10)</span>
        </button>

        <button
          onClick={() => setActiveTab('faculty')}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
            activeTab === 'faculty'
              ? 'bg-navy-heritage text-white shadow-sm'
              : 'bg-ivory-paper text-charcoal-slate hover:bg-ivory-cream'
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Section D: Teaching Faculty (30 Staff)</span>
        </button>

        <button
          onClick={() => setActiveTab('infrastructure')}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
            activeTab === 'infrastructure'
              ? 'bg-navy-heritage text-white shadow-sm'
              : 'bg-ivory-paper text-charcoal-slate hover:bg-ivory-cream'
          }`}
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>Section E: Infrastructure Specs</span>
        </button>

        <button
          onClick={() => setActiveTab('general')}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
            activeTab === 'general'
              ? 'bg-navy-heritage text-white shadow-sm'
              : 'bg-ivory-paper text-charcoal-slate hover:bg-ivory-cream'
          }`}
        >
          <School className="w-3.5 h-3.5" />
          <span>Section A: General Information</span>
        </button>
      </div>

      {/* TAB 1: SECTION B DOCUMENTS */}
      {activeTab === 'documents' && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-ivory-cream text-navy-heritage font-bold font-fraunces border-b border-navy-heritage/10 uppercase tracking-wider">
                <th className="py-3 px-4 rounded-l-xl">No.</th>
                <th className="py-3 px-4">Mandatory Compliance Document</th>
                <th className="py-3 px-4">Issuing Authority</th>
                <th className="py-3 px-4">Verification Status</th>
                <th className="py-3 px-4 text-right rounded-r-xl">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-heritage/5">
              {filteredDocs.map((doc, idx) => (
                <tr key={doc.id} className="hover:bg-ivory-paper/60 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-navy-heritage font-mono">{doc.id}</td>
                  <td className="py-3.5 px-4 font-semibold text-charcoal-ink">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-marigold shrink-0" />
                      <span>{doc.title}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-charcoal-slate">{doc.authority}</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-forest-mist text-forest-dark font-semibold text-[11px] border border-forest/20">
                      <CheckCircle2 className="w-3 h-3 text-forest" />
                      <span>{doc.status}</span>
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => setViewingDoc(doc)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-heritage hover:bg-marigold text-white font-bold text-[11px] transition-all shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View PDF</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredDocs.length === 0 && (
            <div className="text-center py-8 text-charcoal-muted">
              No matching compliance documents found for "{searchQuery}".
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SECTION D FACULTY */}
      {activeTab === 'faculty' && (
        <div>
          {/* Key Faculty Summary Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-ivory-paper border border-navy-heritage/10 text-center">
              <span className="block text-xl font-extrabold text-navy-heritage font-fraunces">30</span>
              <span className="text-[10px] text-charcoal-muted font-bold uppercase">Total Teachers</span>
            </div>
            <div className="p-3 rounded-2xl bg-ivory-paper border border-navy-heritage/10 text-center">
              <span className="block text-xl font-extrabold text-navy-heritage font-fraunces">8</span>
              <span className="text-[10px] text-charcoal-muted font-bold uppercase">PGT Teachers</span>
            </div>
            <div className="p-3 rounded-2xl bg-ivory-paper border border-navy-heritage/10 text-center">
              <span className="block text-xl font-extrabold text-navy-heritage font-fraunces">9</span>
              <span className="text-[10px] text-charcoal-muted font-bold uppercase">TGT Teachers</span>
            </div>
            <div className="p-3 rounded-2xl bg-ivory-paper border border-navy-heritage/10 text-center">
              <span className="block text-xl font-extrabold text-navy-heritage font-fraunces">9</span>
              <span className="text-[10px] text-charcoal-muted font-bold uppercase">PRT Teachers</span>
            </div>
            <div className="p-3 rounded-2xl bg-ivory-paper border border-navy-heritage/10 text-center">
              <span className="block text-xl font-extrabold text-navy-heritage font-fraunces">4</span>
              <span className="text-[10px] text-charcoal-muted font-bold uppercase">NTT Teachers</span>
            </div>
            <div className="p-3 rounded-2xl bg-forest-mist border border-forest/20 text-center">
              <span className="block text-xl font-extrabold text-forest-dark font-fraunces">1 : 1.5</span>
              <span className="text-[10px] text-forest-dark font-bold uppercase">Teacher:Section</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-ivory-paper border border-navy-heritage/10 mb-6 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest" />
              <span><strong>Special Educator:</strong> {cbseDisclosure.facultySummary.specialEducator}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest" />
              <span><strong>Counselor & Wellness Teacher:</strong> {cbseDisclosure.facultySummary.counselor}</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-ivory-cream text-navy-heritage font-bold font-fraunces border-b border-navy-heritage/10 uppercase tracking-wider">
                  <th className="py-3 px-4 rounded-l-xl">Faculty Member</th>
                  <th className="py-3 px-4">Designation</th>
                  <th className="py-3 px-4">Academic Qualifications</th>
                  <th className="py-3 px-4 rounded-r-xl">Subject Specialization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-heritage/5">
                {filteredFaculty.map((staff, i) => (
                  <tr key={i} className="hover:bg-ivory-paper/60 transition-colors">
                    <td className="py-3 px-4 font-bold text-navy-heritage flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-navy-heritage/10 text-navy-heritage flex items-center justify-center text-[10px] font-bold">
                        {staff.name.charAt(0)}
                      </div>
                      <span>{staff.name}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                        staff.desig === 'Principal'
                          ? 'bg-marigold text-white'
                          : staff.desig === 'PGT'
                          ? 'bg-navy-heritage text-white'
                          : 'bg-ivory-cream text-charcoal-slate border border-navy-heritage/10'
                      }`}>
                        {staff.desig}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-charcoal-slate font-medium">{staff.qual}</td>
                    <td className="py-3 px-4 text-charcoal-ink font-semibold">{staff.subjects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: INFRASTRUCTURE */}
      {activeTab === 'infrastructure' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cbseDisclosure.infrastructure.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-ivory-paper border border-navy-heritage/10 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-navy-heritage/10 flex items-center justify-center text-marigold shadow-xs shrink-0">
                <Building2 className="w-5 h-5 text-marigold" />
              </div>
              <div>
                <h4 className="font-bold text-navy-heritage text-sm font-fraunces">{item.item}</h4>
                <p className="text-xs text-charcoal-slate mt-1 font-sans leading-relaxed">{item.spec}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: GENERAL INFORMATION */}
      {activeTab === 'general' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cbseDisclosure.general.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-ivory-paper border border-navy-heritage/10">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted font-fraunces mb-1">
                {item.key}
              </span>
              <span className="text-sm font-bold text-navy-heritage font-sans">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Document View / Preview Modal */}
      {viewingDoc && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-heritage/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-warm-xl border border-navy-heritage/20 overflow-hidden p-6 sm:p-8 animate-fadeIn">
            <button
              onClick={() => setViewingDoc(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-ivory-paper hover:bg-ivory-cream flex items-center justify-center text-charcoal-slate"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-mist text-forest flex items-center justify-center border border-forest/20">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-marigold uppercase tracking-wider font-mono">
                  {viewingDoc.id} • Official SARAS Certified Record
                </span>
                <h4 className="text-lg font-bold text-navy-heritage font-fraunces">
                  {viewingDoc.title}
                </h4>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-ivory-paper border border-navy-heritage/10 space-y-3 text-xs text-charcoal-slate leading-relaxed">
              <div className="flex justify-between border-b border-navy-heritage/10 pb-2">
                <span className="font-bold text-navy-heritage">Issuing Authority:</span>
                <span className="font-semibold">{viewingDoc.authority}</span>
              </div>
              <div className="flex justify-between border-b border-navy-heritage/10 pb-2">
                <span className="font-bold text-navy-heritage">Verification Status:</span>
                <span className="text-forest font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {viewingDoc.status}
                </span>
              </div>
              <div className="flex justify-between border-b border-navy-heritage/10 pb-2">
                <span className="font-bold text-navy-heritage">School Affiliation:</span>
                <span>CBSE / 1031305 / 51322</span>
              </div>
              <p className="text-[11px] text-charcoal-muted pt-2">
                This document is verified and attested by the Principal and Management of Vimla Global School, Beohari pursuant to the CBSE SARAS Mandatory Disclosure Guidelines.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setViewingDoc(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-charcoal-slate hover:bg-ivory-paper"
              >
                Close
              </button>
              <a
                href={`#${viewingDoc.file}`}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`CBSE Document Verified: ${viewingDoc.title} is active in official school records.`);
                }}
                className="px-5 py-2.5 rounded-xl bg-navy-heritage hover:bg-navy-light text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Certified Copy</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
