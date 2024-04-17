import("tailwindcss").Config;
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Natural: "#fafafa",
        Bg: "#1e293b",
        Text: "#64748b",
        Hover: "#9069f1",
        "Hover-bg": "#1e293b",
        //Cursole
        Hovers: "#ffffff",
        color: "#8c8c8c",
      },
      cur: {
        Hov: "shadow-gray-400",
        col: "#02264b",
      },
      padding: {
        padding: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  
};
