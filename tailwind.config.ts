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
          darkerBlue: '#212832',
        },
      },
      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
      },
      fontFamily: {
        Poppins: ['var(--font-Poppins)'],
        Volkhov: ['var(--font-Volkhov)'],
      },
      fontSize: {},
      boxShadow: {
        main: ' rgba(0, 0, 0, 0.1) 0px 4px 12px',
        booking: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
      fontWeight: {
        links: '600',
      },
    },
  },
  plugins: [],
};

export default config;
