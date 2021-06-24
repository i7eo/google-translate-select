module.exports = {
  publicPath:"./",
  outputDir:"lib",
  css: { extract: false },
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 40000 }));
  },
};
