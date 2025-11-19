module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0a0a0a',
        },
        accent: {
          DEFAULT: '#00ff88',
          alt: '#7b3ff2',
        },
        text: {
          light: '#e0e0e0',
          muted: '#888',
        },
        code: {
          bg: '#1a1a1a',
          border: 'rgba(0, 255, 136, 0.2)',
        },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-radial': 'radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
      },
      animation: {
        'slide-in': 'slideIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse 15s ease-in-out infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.3' },
        },
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
