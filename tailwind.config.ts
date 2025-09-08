import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'ao-gray-50': 'rgb(247, 247, 247)',
        'ao-gray-100': 'rgb(242, 242, 242)',
        'ao-gray-200': 'rgb(240, 240, 240)',
        'ao-gray-400': 'rgb(119, 119, 119)',
        'ao-gray-500': 'rgb(107, 107, 107)',
        'ao-gray-600': 'rgb(82, 82, 82)',
        'ao-gray-900': 'rgb(21, 21, 21)',
        'ao-success': 'rgb(35, 190, 48)',
        white: 'rgb(255, 255, 255)',
      },
      fontSize: {
        'ao-xs': 'clamp(13px, 1.35vw, 14px)',
        'ao-sm': 'clamp(16px, 1.65vw, 18px)',
        'ao-base': 'clamp(18px, 1.75vw, 24px)',
        'ao-lg': '29px',
      },
      spacing: {
        'ao-section-padding': '24.5px 20px 20px',
        'ao-gap': '20px',
        'ao-metric-gap': '7.5px',
      },
    },
  },
  plugins: [],
};

export default config;
