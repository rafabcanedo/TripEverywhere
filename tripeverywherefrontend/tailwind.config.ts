import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        mont: 'var(--font-montserrat)',
        pop: 'var(--font-poppins)',
      },

      colors: {
        background: '#e3e3e3',
        primary: '#42b883',
        hover: '#3dac7a',
        subtitle: '#A1A1AA',
        vouusar: '#f95959',
      },
    },
  },
  plugins: [],
}
export default config
