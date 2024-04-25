/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        subBlue: '#00abf0',
        borderColor:'#4070f4'
      }
    },
    fontFamily:{
      sign:['Great Vibes']
    },
    
  },
  plugins: [],
}

