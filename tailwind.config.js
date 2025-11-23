module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        'bg-main': '#f0f0f0',
        'bg-card': '#ffffff',
        'accent-yellow': '#ffde00',
        'accent-pink': '#ff90e8',
        'accent-blue': '#2dd4bf',
        'border-black': '#000000',
      },
      boxShadow: {
        'hard': '5px 5px 0px 0px #000000',
        'hard-hover': '8px 8px 0px 0px #000000',
        'hard-sm': '3px 3px 0px 0px #000000',
      },
      animation: {
        'marquee': 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
