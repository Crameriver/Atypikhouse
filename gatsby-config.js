module.exports = {
  
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-postcss`,
    `less-loader`,
    `less`,
    `gatsby-plugin-less`
    ,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
        sassRuleTest: /\.global\.s(a|c)ss$/,
        sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
        useResolveUrlLoader: false,
        useResolveUrlLoader: {
          options: {
            debug: true,
            sourceMap: true, //default is false
          },
        }
      },
    },
    {
      resolve: "less-loader",
      options: {
        sourceMap: true,
        lessOptions: {
          javascriptEnabled: true,
        }
    }
  },
      {
            resolve: `gatsby-plugin-less`,
            options: {
              javascriptEnabled: true,
              lessOptions: {
                strictMath: true,
                modifyVars: {
                  '@primary-color': '#389e0d'
                }
              }
          }
      },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }
    ,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
        fit: 'contain'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
