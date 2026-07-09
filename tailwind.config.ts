import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: '#D4AF37',
          darkGold: '#AA8C2E',
          darkBg: '#0F0F0F',
          lightBg: '#FAFAFA',
          navy: '#001F3F',
          cream: '#F5F1E8',
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(0, 0, 0, 0.3)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
