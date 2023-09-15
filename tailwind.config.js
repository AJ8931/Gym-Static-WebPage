module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        'blue': '#2c2d43',
        'sky': '#8e9aae',
        'red': '#da1f2c',
        'pink': '#ee253d',
        'white': '#eef2f4',
        'lightWhite': '#cdd0d1',
        'darkblue': '#1f2130',
        'lightblue': '#313651',
        'middleblue': '#242535',

      },
      spacing: {
        '60s': '59.5%',
        '50s': '61.6%',
        '40s': '65%'
      },
      backgroundImage: {
        'heroSection': "url('./Assets/Hero_Images/image1.jpg')",
        'hori_gym': "url('./Assets/Hero_Images/gymming.jpg')",
        'hori_swim': "url('./Assets/Hero_Images/swim.jpg')",
        'video': "url('./Assets/Hero_Images/boxing.mp4')",
        'ccd': 'repeating-radial-gradient(circle closest-corner at 100px 100px, #2c2d43, #555d8b 10%, #2c2d43 30%)',
        'ddc': 'repeating-radial-gradient(circle closest-corner at 100px 100px, #2c2d43, #555d8b 10%, #2c2d43 35%)'
      },
      boxShadow: {
        'bottom': '0px 15px 10px -20px #111',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
