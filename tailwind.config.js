import('tailwindcss').Config
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'Natural':'#fafafa',
        'Bg':'#1e293b',
        'Text':'#64748b',
        "Hover":'#  ',
        "Hover-bg":'#1e293b'
      },
      padding:{
       'padding':'1rem'
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1536px",
      },
    },
  },
  plugins: [],
};
