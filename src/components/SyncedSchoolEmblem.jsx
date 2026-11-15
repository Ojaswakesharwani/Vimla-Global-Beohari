import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Monitor, Trophy, GraduationCap, Flame, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import FallbackImage from './FallbackImage';

export default function SyncedSchoolEmblem({ activePillar, setActivePillar, currentLang = 'en' }) {
  const [isPaused, setIsPaused] = useState(false);
  const pillars = schoolData.syncedEmblemPillars;

  // Auto-advance active pillar every 4.5s unless paused by user hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, pillars.length, setActivePillar]);

  // Mouse Parallax 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsPaused(false);
  };

  const currentPillar = pillars[activePillar];

  return (
    <div
      className="relative w-full max-w-lg mx-auto flex flex-col items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Interactive Emblem Frame */}
      <motion.div
        onMouseMove={handleMouseMove}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center cursor-pointer select-none"
      >
        {/* Ambient Back Glow synced to current pillar color */}
        <div
          className="absolute -inset-4 rounded-full blur-2xl transition-all duration-700 opacity-60"
          style={{
            background: `radial-gradient(circle, ${currentPillar.accent}33 0%, transparent 70%)`
          }}
        />

        {/* Outer Circular Track with Dashed Golden Lines */}
        <svg className="absolute inset-0 w-full h-full animate-spin-very-slow pointer-events-none" viewBox="0 0 400 400">
          <circle
            cx="200"
            cy="200"
            r="185"
            fill="none"
            stroke="#D9822B"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            strokeOpacity="0.4"
          />
          <circle
            cx="200"
            cy="200"
            r="165"
            fill="none"
            stroke="#0B2545"
            strokeWidth="1"
            strokeOpacity="0.2"
          />
        </svg>

        {/* Dynamic Orbital Marker that circles to active pillar */}
        <motion.div
          animate={{ rotate: currentPillar.orbitDeg }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* Orbital indicator dot */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <span className="w-5 h-5 rounded-full bg-marigold flex items-center justify-center shadow-gold-glow animate-pulse">
              <span className="w-2 h-2 rounded-full bg-white" />
            </span>
          </div>
        </motion.div>

        {/* 4 Pillar Orbital Touch Nodes */}
        {pillars.map((pillar, idx) => {
          const isActive = idx === activePillar;
          // Position each node at 0, 90, 180, 270 degrees
          const positions = [
            "top-0 left-1/2 -translate-x-1/2 -translate-y-2", // 0 deg (top) - Digital Smart Classroom
            "right-0 top-1/2 translate-x-2 -translate-y-1/2",  // 90 deg (right) - Sports & 13-Acre Playground
            "bottom-0 left-1/2 -translate-x-1/2 translate-y-2", // 180 deg (bottom) - Academic Excellence
            "left-0 top-1/2 -translate-x-2 -translate-y-1/2"   // 270 deg (left) - Sanskar & Moral Heritage
          ];

          return (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(idx)}
              className={`absolute ${positions[idx]} z-30 group flex items-center justify-center transition-all duration-300 focus:outline-none`}
              title={pillar.title}
            >
              <div
                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-md ${
                  isActive
                    ? "bg-navy-heritage border-marigold text-marigold scale-110 shadow-gold-glow"
                    : "bg-white border-navy-heritage/20 text-navy-heritage/70 hover:border-marigold/60 hover:scale-105"
                }`}
              >
                {pillar.id === 'digital' && <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />}
                {pillar.id === 'sports' && <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />}
                {pillar.id === 'academics' && <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />}
                {pillar.id === 'heritage' && <Flame className="w-5 h-5 sm:w-6 sm:h-6" />}

                {isActive && (
                  <span className="absolute -inset-1 rounded-full border border-marigold/50 animate-ping opacity-40 pointer-events-none" />
                )}
              </div>
            </button>
          );
        })}

        {/* Central Core Emblem Disk */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-b from-white via-ivory-paper to-ivory-cream border-4 border-navy-heritage/15 shadow-warm-xl flex flex-col items-center justify-center p-3 text-center transition-all duration-500"
        >
          {/* Inner Golden Rim */}
          <div className="absolute inset-1.5 rounded-full border border-marigold/40 pointer-events-none" />

          {/* Official VGS Logo & Crest */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            <FallbackImage
              src="/images/logo.png"
              alt="VGS Official Logo"
              fallbackText="VGS"
              className="w-full h-full object-contain filter drop-shadow-sm"
              priority={true}
            />
          </div>

          {/* Core Title */}
          <div className="mt-1 flex flex-col items-center">
            <span className="text-[11px] sm:text-xs font-bold text-navy-heritage tracking-wider font-fraunces uppercase">
              Vimla Global
            </span>
            <span className="text-[9px] sm:text-[10px] text-marigold font-semibold tracking-widest font-fraunces uppercase">
              School • Beohari
            </span>
            <span className="text-[8px] text-charcoal-muted font-sans font-medium">
              CBSE : 1031305
            </span>
          </div>

          {/* Interactive micro badge showing active pillar */}
          <div
            className="mt-1 px-2.5 py-0.5 rounded-full text-[9px] font-semibold text-white tracking-wide shadow-sm flex items-center gap-1 transition-colors duration-500"
            style={{ backgroundColor: currentPillar.accent }}
          >
            <Sparkles className="w-2.5 h-2.5" />
            <span className="font-hindi text-[8px] truncate max-w-[90px]">
              {currentLang === 'hi' ? currentPillar.hindiTitle : currentPillar.title}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Synchronized Live Pillar Banner (Interactive details below emblem) */}
      <div className="mt-5 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-2xl bg-white border border-navy-heritage/10 shadow-warm relative overflow-hidden"
          >
            {/* Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: currentPillar.accent }}
            />

            <div className="flex items-start gap-3.5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
                style={{ backgroundColor: currentPillar.accent }}
              >
                {currentPillar.id === 'digital' && <Monitor className="w-5 h-5" />}
                {currentPillar.id === 'sports' && <Trophy className="w-5 h-5" />}
                {currentPillar.id === 'academics' && <GraduationCap className="w-5 h-5" />}
                {currentPillar.id === 'heritage' && <Flame className="w-5 h-5" />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-navy-heritage font-fraunces">
                    {currentLang === 'hi' ? currentPillar.hindiTitle : currentPillar.title}
                  </h4>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-ivory-cream text-charcoal-slate font-sans">
                    Pillar {activePillar + 1}/4
                  </span>
                </div>
                <p className="text-xs text-charcoal-slate mt-1 line-clamp-2 leading-relaxed font-sans">
                  {currentPillar.desc}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-forest-dark font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                  <span>{currentPillar.visualHighlight}</span>
                </div>
              </div>
            </div>

            {/* Quick 4-Step Nav Bar at Bottom */}
            <div className="mt-3 pt-3 border-t border-navy-heritage/5 flex items-center justify-between">
              <span className="text-[10px] text-charcoal-muted">
                {isPaused ? "Hovering (Rotation Paused)" : "Auto-syncing with School Crest"}
              </span>
              <div className="flex items-center gap-1.5">
                {pillars.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePillar(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activePillar ? "w-6 bg-marigold" : "w-2 bg-navy-heritage/20 hover:bg-navy-heritage/40"
                    }`}
                    aria-label={`Switch to pillar ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
