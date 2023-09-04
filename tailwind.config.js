/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primario': '#037AEB',
      'secundario': '#ffffff',
      'accent': '#02E7F5',
      'fondo': '#1A1D29',
      'gray-700': '#101116',
      'gray-600': '#1a1d29',
      'gray-500': '#30333e',
      'gray-400': '#5F6169',
      'gray-300': '#74757D',
      'gray-200': '#c8c9cb',
      'gray-100': '#f9f9f9',
      'error': '#fc7c7c',
      'success': '#abfab3',
      'warning': '#ffcc6c',
      'info': '#b5affe',
    },
  },
  plugins: [],
}