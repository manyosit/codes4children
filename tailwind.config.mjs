/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          light: '#A5B4FC',
          dark: '#4F46E5',
        },
        secondary: {
          DEFAULT: '#34D399',
          light: '#6EE7B7',
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
        },
        danger: '#F87171',
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#1E293B',
          darker: '#0F172A',
        },
        text: {
          primary: '#0F172A',
          secondary: '#64748B',
          light: '#E2E8F0',
        },
        // Per-code accent colors
        code: {
          caesar: '#8B5CF6',
          morse: '#3B82F6',
          zahlen: '#10B981',
          spiegel: '#EC4899',
          pigpen: '#F59E0B',
          skytale: '#14B8A6',
          emoji: '#F97316',
        },
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      maxWidth: {
        'content': '1200px',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0,0,0,0.08)',
        'medium': '0 4px 20px rgba(0,0,0,0.1)',
        'lifted': '0 8px 30px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
