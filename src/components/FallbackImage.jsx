import React, { useState } from 'react';
import { School, ImageOff } from 'lucide-react';

export default function FallbackImage({
  src,
  alt = "Vimla Global School",
  className = "",
  fallbackText = "VGS Beohari",
  priority = false,
  ...props
}) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Resolve base path for GitHub Pages subfolder deployment
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const resolvedSrc = (src && src.startsWith('/') && !src.startsWith('//'))
    ? `${cleanBase}${src}`
    : src;

  // If source is missing or marked errored
  if (!src || error) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-navy-heritage/5 via-marigold/10 to-forest/10 border border-navy-heritage/10 text-charcoal-slate p-4 text-center select-none ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-marigold mb-2 border border-marigold/20">
          <School className="w-5 h-5 text-marigold" />
        </div>
        <span className="text-xs font-semibold text-navy-heritage/80 uppercase tracking-wider font-fraunces">
          {fallbackText}
        </span>
        <span className="text-[10px] text-charcoal-muted mt-0.5 font-hindi">
          विमला ग्लोबल स्कूल, ब्यौहारी
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-ivory-cream/50 ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-ivory-cream/80 animate-pulse flex items-center justify-center z-10">
          <School className="w-6 h-6 text-navy-heritage/20 animate-bounce" />
        </div>
      )}
      <img
        src={resolvedSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
        {...props}
      />
    </div>
  );
}
