/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#030712',
        ocean: '#160f28',
        cyanGlow: '#c084fc',
        blueGlow: '#8b5cf6',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(139, 92, 246, 0.2)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.9s ease-out both',
        pulseSoft: 'pulseSoft 4s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        shimmer: 'shimmer 3.8s linear infinite',
        orbit: 'orbit 18s linear infinite',
        riseIn: 'riseIn 0.85s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(14px, -18px, 0) scale(1.04)' },
          '66%': { transform: 'translate3d(-10px, 12px, 0) scale(0.98)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(10px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(360deg) translateX(10px) rotate(-360deg)',
          },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(36px) scale(0.96)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(139, 92, 246, 0.18), transparent 35%), radial-gradient(circle at top right, rgba(192, 132, 252, 0.16), transparent 28%), radial-gradient(circle at bottom center, rgba(168, 85, 247, 0.14), transparent 34%)',
      },
    },
  },
  plugins: [],
};
