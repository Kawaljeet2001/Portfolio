module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      darkBlack: "#161a1d",
      lightblue: "#8da9c4",
      grey: "#edf2f4",
      slateGrey: "#2D2E32",
      lightGreen: "#6EF3A5",
      darkGrey: "#25262A",
    }),

    textColor: (theme) => ({
      ...theme("colors"),
      darkBlack: "#161a1d",
      lightblue: "#8da9c4",
      grey: "#edf2f4",
      slateGrey: "#2D2E32",
      lightGreen: "#6EF3A5",
      darkGrey: "#25262A",
    }),
    // borderColor: (theme) => ({
    //   ...theme("colors"),
    //   darkBlack: "#161a1d",
    //   lightblue: "#8da9c4",
    //   grey: "#edf2f4",
    //   slateGrey: "#2D2E32",
    //   lightGreen: "#6EF3A5",
    //   darkGrey: "#25262A",
    // }),
    boxShadow: (theme) => ({
      ...theme("colors"),
      'navbar': '0 2px 10px #000',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
