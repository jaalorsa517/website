module.exports = {
  transpileDependencies: [],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "CV Jaime Ortiz";
      return args;
    });
  },
};
