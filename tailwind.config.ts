import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: '#181E4B',
          titleColor: '#14183E',
          textColor: '#5E6282',
          orange: '#DF6951',
          yellow: '#F1A501',
        },
      },
      fontFamily: {
        Poppins: ['var(--font-Poppins)'],
        Volkhov: ['var(--font-Volkhov)'],
      },
      fontSize: {},
      boxShadow: {
        'light-100':
          '0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)',
        'light-200': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'light-300': '-10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'dark-100': '0px 2px 10px 0px rgba(46, 52, 56, 0.10)',
        'dark-200': '2px 0px 20px 0px rgba(39, 36, 36, 0.04)',
      },
      fontWeight: {
        links: '600',
      },
    },
  },
  plugins: [],
};

export default config;
