const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin([
        {
          from: path.resolve(__dirname, "src",".well-known"),
          to: path.resolve(__dirname,"dist",".well-known"),
        }
      ])
    ]
  },
  assetsDir: "static",
  transpileDependencies: [],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "CV Jaime Ortiz";
      return args;
    });
  }
};
