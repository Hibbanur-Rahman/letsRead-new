const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      darkPurple:"#2D0138",
      lightPurple: "#8832A0",
      white :"#FFFFFF",
      yellow :"#FFC855",
      pink :"#FE2260",
      black :"#000000",
      gray:"#5E5E5E",
    },
    extend: {},
  },
  plugins: [],
});