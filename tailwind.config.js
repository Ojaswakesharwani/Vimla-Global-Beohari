/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          paper: '#FAF8F5',
          cream: '#F4EFEA',
          muted: '#EAE4DC'
        },
        navy: {
          900: '#061629',
          heritage: '#0B2545',
          light: '#133B6B',
          soft: '#1D4F88'
        },
        marigold: {
          light: '#F8B84E',
          DEFAULT: '#D9822B',
          dark: '#B86518',
          deep: '#944C09'
        },
        forest: {
          light: '#2E8B65',
          DEFAULT: '#1E6F50',
          dark: '#144B36',
          mist: '#E8F5EE'
        },
        charcoal: {
          ink: '#1A202C',
          slate: '#4A5568',
          muted: '#718096'
        }
      },
      fontFamily: {
        fraunces: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(11, 37, 69, 0.08), 0 2px 6px -1px rgba(11, 37, 69, 0.04)',
        'warm-lg': '0 12px 30px -4px rgba(11, 37, 69, 0.12), 0 4px 10px -2px rgba(11, 37, 69, 0.06)',
        'warm-xl': '0 20px 40px -6px rgba(11, 37, 69, 0.16), 0 8px 16px -4px rgba(11, 37, 69, 0.08)',
        'gold-glow': '0 0 25px rgba(217, 130, 43, 0.35)',
        'forest-glow': '0 0 25px rgba(30, 111, 80, 0.3)',
      }
    },
  },
  plugins: [],
}
