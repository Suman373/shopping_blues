/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize:{
        'xxl':'9rem',
        'xl':'5rem',
        'lg':'2.5rem',
        'md':'1.5rem',
        's':'1rem'
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'black':'#000',
      'brand': '#fff2e0',
      'white': '#ffffff',
      'red':'#D22B2B',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'transparent': 'rgba(0,0,0,0)',
      'dark-brown':'#381f1f',
      'light-brown': '#694444'
    },
    plugins: [],
  }
}