/** @type {import('tailwindcss').Config} */
// Kleinpeter theme: uses Tailwind blue (bg-blue-600 / text-blue-600) as main color
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './tailwind.config.js',
  ],
  safelist: [
    'bg-kleinpeter-50', 'bg-kleinpeter-100', 'bg-kleinpeter-200', 'bg-kleinpeter-300', 'bg-kleinpeter-400', 'bg-kleinpeter-500', 'bg-kleinpeter-600', 'bg-kleinpeter-700', 'bg-kleinpeter-800', 'bg-kleinpeter-900',
    'text-kleinpeter-50', 'text-kleinpeter-100', 'text-kleinpeter-200', 'text-kleinpeter-300', 'text-kleinpeter-400', 'text-kleinpeter-500', 'text-kleinpeter-600', 'text-kleinpeter-700', 'text-kleinpeter-800', 'text-kleinpeter-900',
    'border-kleinpeter-50', 'border-kleinpeter-100', 'border-kleinpeter-200', 'border-kleinpeter-300', 'border-kleinpeter-400', 'border-kleinpeter-500', 'border-kleinpeter-600', 'border-kleinpeter-700', 'border-kleinpeter-800', 'border-kleinpeter-900',
    'hover:bg-kleinpeter-50', 'hover:bg-kleinpeter-100', 'hover:bg-kleinpeter-200', 'hover:bg-kleinpeter-300', 'hover:bg-kleinpeter-400', 'hover:bg-kleinpeter-500', 'hover:bg-kleinpeter-600', 'hover:bg-kleinpeter-700', 'hover:bg-kleinpeter-800', 'hover:bg-kleinpeter-900',
    'hover:text-kleinpeter-50', 'hover:text-kleinpeter-100', 'hover:text-kleinpeter-200', 'hover:text-kleinpeter-300', 'hover:text-kleinpeter-400', 'hover:text-kleinpeter-500', 'hover:text-kleinpeter-600', 'hover:text-kleinpeter-700', 'hover:text-kleinpeter-800', 'hover:text-kleinpeter-900',
    'hover:border-kleinpeter-200', 'group-hover:bg-kleinpeter-200', 'group-hover:bg-kleinpeter-700', 'focus:ring-kleinpeter-500',
  ],
  theme: {
    extend: {
      colors: {
        // Kleinpeter = Tailwind blue (blue-600 as main: bg-blue-600, text-blue-600)
        kleinpeter: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
};
