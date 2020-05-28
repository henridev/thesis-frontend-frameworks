const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

// eslint-disable-next-line no-undef
module.exports = {
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  }
};
