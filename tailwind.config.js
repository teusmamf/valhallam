/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#06062d',
        'gold': {
          500: '#FFD700',
        },
        
      },
      boxShadow: {
        'gold': '0 0 15px rgba(255, 215, 0, 0.3)',
      },
      backgroundImage: {
        'viking-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M30 0l30 30-30 30L0 30 30 0z\" fill=\"%23FFD700\" fill-opacity=\"0.05\"/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};