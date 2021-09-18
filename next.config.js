const path = require("path");

module.exports = {
  images: {
    domains: ["datocms-assets.com"]
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true
      }
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  }
};
