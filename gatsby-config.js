module.exports = {
  siteMetadata: {
    title: `Kristjan Vingel`,
    description: `Come check out how Kristjan Vingel can help you level up your life as a software engineer.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kristjan Vingel Website`,
        short_name: `kristjan`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "images/estonia.png",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: false,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // maxWidth: 200,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    // You can have multiple instances of this plugin
    // to read source nodes from different locations on your
    // filesystem.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
  ],
}

/* 

{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#fffafa`,
        theme_color: `#008080`,
        display: `minimal-ui`,
        // icon: `content/assets/gatsby-icon.png`,
        icon: `content/assets/android-chrome-512x512.png`,
      },
    },

*/
