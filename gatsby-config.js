module.exports = {
  siteMetadata: {
    title: `Phan Cuong's Blog`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
          `Roboto\:300,400,500,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://data.safedata.vn`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`articles`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: "reader",
        //   password: "5GRgSpUARvz7KhP",
        // },
      },
    },

  ]
}