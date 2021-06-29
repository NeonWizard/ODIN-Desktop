process.env.VUE_APP_VERSION = process.env.npm_package_version || 0

module.exports = {
  pluginOptions: {
      electronBuilder: {
          builderOptions: {
              productName: "ODIN Desktop",
          },
      },
  },
  css: {
      loaderOptions: {
          sass: {
              additionalData: '@import "@/assets/css/variables.scss"; @import "@/assets/css/globalStyle.scss";'
          }
      }
  }
};
