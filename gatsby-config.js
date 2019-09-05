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
    }
  ]
}