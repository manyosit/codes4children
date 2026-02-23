/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        fun: ['"Comic Neue"', 'cursive'],
        body: ['"Nunito"', 'sans-serif'],
      },
      colors: {
        candy: {
          pink: '#FF6B9D',
          purple: '#C44DFF',
          blue: '#4DA6FF',
          green: '#4DFF88',
          yellow: '#FFD93D',
          orange: '#FF8C42',
          red: '#FF4D4D',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
