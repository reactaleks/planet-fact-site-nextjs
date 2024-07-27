import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'spartan': 'Spartan',
      'antonio': 'Antonio'
    },
    fontSize: {
      heading: '80px',
      headingm: '52px',
      headings: '12px',
      headingxs: '11px',
      body: '14px'
    },

    extend: {
      gridTemplateColumns: {
        '24': 'repeat(24, 1fr)'
      },
      gridTemplateRows: {
        '24': 'repeat(24, 1fr)'
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24'
      },
      gridColStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
      },
      gridRow: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
      
      gridRowStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
      },
      colors: {
        white: '#FFFFFF',
        black: '#070724',
        darkgray: '#38384F',
        gray: '#838391',
        teal: '#419EBB',
        yellow: '#EDA249',
        purple: '#6F2ED6',
        lightred: '#D14C32',
        red: '#D83A34',
        orange: '#CD4120',
        green: '#1EC2A4',
        blue: '#2D68F0',
        planetColors: {
          earth: '#6D2ED5',
          mars: '#D14C32',
          jupiter: '#D83A34',
          saturn: '#CD5120',
          uranus: '#1EC1A2',
          neptune: '#2D68F0',
          venus: '#EDA249',
          mercury: '#419EBB'
        }
      },

    },
  },
  plugins: [],
};
export default config;
