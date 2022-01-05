module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "fresco-carta",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "",
        spaceId: "",
      },
    },
    "gatsby-plugin-postcss",
  ],
};
