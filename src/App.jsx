import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AdmissionInquiryModal from './components/AdmissionInquiryModal';

import Home from './pages/Home';
import OurLegacy from './pages/OurLegacy';
import SmartCampus from './pages/SmartCampus';
import AdmissionBenefits from './pages/AdmissionBenefits';
import CBSEDisclosure from './pages/CBSEDisclosure';
import Contact from './pages/Contact';

export default function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [activePage, setActivePage] = useState('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryInitialData, setInquiryInitialData] = useState(null);

  // Sync title and html lang attribute
  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (currentLang === 'hi') {
      document.title = "विमला ग्लोबल स्कूल (VGS), ब्यौहारी | सीबीएसई संबद्ध संस्थान";
    } else {
      document.title = "Vimla Global School (VGS), Beohari | CBSE Affiliated Heritage Institution";
    }
  }, [currentLang]);

  const handleOpenInquiry = (initialData = null) => {
    setInquiryInitialData(initialData);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory-paper selection:bg-marigold selection:text-white">
      {/* 1. Header (Sticky Top Bar + Trust Strip + [EN | हिंदी] Toggle) */}
      <Header
        currentLang={currentLang}
        setLang={setCurrentLang}
        activePage={activePage}
        setActivePage={setActivePage}
        openInquiryModal={() => handleOpenInquiry(null)}
      />

      {/* 2. Main Active Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <Home
            currentLang={currentLang}
            setActivePage={setActivePage}
            openInquiryModal={handleOpenInquiry}
          />
        )}

        {activePage === 'legacy' && (
          <OurLegacy
            currentLang={currentLang}
            openInquiryModal={() => handleOpenInquiry(null)}
          />
        )}

        {activePage === 'campus' && (
          <SmartCampus
            currentLang={currentLang}
            openInquiryModal={() => handleOpenInquiry(null)}
          />
        )}

        {activePage === 'admission' && (
          <AdmissionBenefits
            currentLang={currentLang}
            openInquiryModal={handleOpenInquiry}
          />
        )}

        {activePage === 'disclosure' && (
          <CBSEDisclosure
            currentLang={currentLang}
            openInquiryModal={() => handleOpenInquiry(null)}
          />
        )}

        {activePage === 'contact' && (
          <Contact
            currentLang={currentLang}
            openInquiryModal={() => handleOpenInquiry(null)}
          />
        )}
      </main>

      {/* 3. Floating WhatsApp Inquiry Button (+91-9977119006) */}
      <FloatingWhatsApp
        currentLang={currentLang}
        onOpenForm={() => handleOpenInquiry(null)}
      />

      {/* 4. Global 2-Minute Admission Inquiry Modal */}
      <AdmissionInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialData={inquiryInitialData}
        currentLang={currentLang}
      />

      {/* 5. Indian Heritage Footer */}
      <Footer
        currentLang={currentLang}
        setActivePage={setActivePage}
        openInquiryModal={() => handleOpenInquiry(null)}
      />
    </div>
  );
}
