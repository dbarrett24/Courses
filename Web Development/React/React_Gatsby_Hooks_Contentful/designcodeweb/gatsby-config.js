module.exports = {
  siteMetadata: {
    title: `Design+Code`,
    description: `This was a tutorial I followed to learn more about React Hooks and design within React as well as animation and interactions and following a design system.`,
    author: `@dbarrett24`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
