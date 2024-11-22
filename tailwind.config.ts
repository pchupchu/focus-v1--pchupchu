import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        accent: '#591ddd',
        accent_secondary: '#8728e1',
      },
      backgroundImage: {
        body: "url('/body-bg.png')",
        hero: "url('/hero/img.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
