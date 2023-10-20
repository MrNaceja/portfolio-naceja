import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import configDefault from 'tailwindcss/defaultConfig'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    keyframes: {
      ...configDefault.theme?.keyframes,
      bounce: {
        '0%, 100%': {
            transform: 'translateY(-10%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
        }
      }
    },
    fontFamily: {
      sans: ['var(--font-sora)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero_bg.png')"
      },
      boxShadow: {
        button: `0px 0px 25px 8px ${colors.sky[400]}40` ,
      },
    },
  },
  plugins: [],
}
export default config
