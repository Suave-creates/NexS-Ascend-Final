/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',            // enable manual dark mode via a “dark” class
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          light: '#4f9eeb',      // for hover, etc.
          DEFAULT: '#2563eb',    // brand blue
          dark: '#1e40af',       // for dark mode accents
        },
        secondary: {
          light: '#fbbf24',
          DEFAULT: '#f59e0b',    // amber
          dark: '#b45309',
        },
        // Neutrals
        background: {
          light: '#f3f4f6',
          DEFAULT: '#ffffff',
          dark: '#1f2937',
        },
        surface: {
          light: '#ffffff',
          DEFAULT: '#f9fafb',
          dark: '#111827',
        },
        // Text / on-surface
        text: {
          light: '#1f2937',
          DEFAULT: '#111827',
          dark: '#f9fafb',
        },
        // Feedback
        success: '#16a34a',
        warning: '#d97706',
        error:   '#dc2626',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
