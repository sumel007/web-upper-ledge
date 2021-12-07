module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary-color':'#ff3f0b',
        'secondary-color':'#ffa800'
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
   // require('@tailwindcss/forms'),
  ],
}
