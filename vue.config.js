const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
});

module.exports = {
  outputDir: "./build",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://111.230.245.205:8880",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        views: "@/views",
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: true })],
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: true })],
      }),
    ],
  },
};
