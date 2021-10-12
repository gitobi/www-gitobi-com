module.exports = {
  siteMetadata: {
    description: `根域制限栽培とITを活用した果樹のスマート農業、フルーツ工場事業をGitobi合同会社は行っています。`,
    siteUrl: `https://www.gitobi.com`,
    title: `根域制限栽培とスマート農業のGitobi`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-0JH6CPRPBY`,
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gitobi`,
        short_name: `Gitobi`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(
            `./src/components/templates/base-layout.js`
          ),
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `
          @import "${__dirname}/src/styles/colors";
          @import "${__dirname}/src/styles/variables";
        `,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `topics`,
        path: `${__dirname}/content/topics`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
        ]
      }
    },
    `gatsby-transformer-sharp`,
  ],
};
