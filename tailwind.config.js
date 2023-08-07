module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          main: ["xray"],
      },
      colors: {
        xred: "#da182d",
      },
      boxShadow: {
        nav: "rgb(19 47 76) 0px -1px 1px inset",
      },
      backgroundImage: {
        'header': "url(../public/images/headerbg.png)"
      },
      backfaceVisibility:{
        xface:"visible"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({
      addComponents
    }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '680px',
          },
          '@screen md': {
            maxWidth: '992px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
          '@screen 2xl': {
            maxWidth: '1400px',
          },
        }
      })
    },
  ],
}