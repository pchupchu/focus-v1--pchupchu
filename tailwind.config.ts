import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#591ddd',
        accent_secondary: '#8728e1',
      },
      backgroundImage: {
        body: "url('/body-bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
