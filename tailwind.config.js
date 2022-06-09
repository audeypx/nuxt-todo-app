module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '95': '95%',
      },

      colors: {
        light: {
          circleborder: '#e4e5f1',
          // hsl(236, 33%, 92%)
          newtodocolor: '#777a92',
          // hsl(234, 11%, 52%)
          taskscolor: '#484b6a',
          // hsl(235, 19%, 35%)
          footercolor: '#9394a5',
          // hsl(236, 9%, 61%)
          crossinglinecolor: '#d2d3db',
          // hsl(233, 11%, 84%)
          buttonhovercolor: '#484b6a',
          // hsl(235, 19%, 35%)
          activebuttonanchor: '#3a7bfd',
          // hsl(220, 98%, 61%)
        },
        dark: {
          outer: '#161722',
          // hsl(235, 21%, 11%)
          inner: '#25273c',
          // hsl(235, 24%, 19%)
          circleborder:'#393a4c',
          // hsl(237, 14%, 26%)
          newtodocolor: '#777a92',
          // hsl(234, 11%, 52%)
          taskscolor: '#cacde8',
          // hsl(234, 39%, 85%)
          footercolor: '#5c5f7f',
          // hsl(235, 16%, 43%)
          crossinglinecolor: '#5c5f7f',
          // hsl(235, 16%, 43%)
          buttonhovercolor: '#e4e5f1',
          // hsl(236, 33%, 92%)
          activebuttonanchor: '#3a7bfd',
         // hsl(220, 98%, 61%)
        },
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
