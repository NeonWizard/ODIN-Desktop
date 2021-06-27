process.env.VUE_APP_VERSION = process.env.npm_package_version || 0

module.exports = {
  pluginOptions: {
      electronBuilder: {
          builderOptions: {
              productName: "ODIN Desktop",
          },
      },
  },
};