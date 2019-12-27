module.exports = {
  devServer: {
    disableHostCheck: true
  },
  publicPath: "./",
  productionSourceMap: false,

  // configureWebpack: {
  //   devtool: "inline-source-map"
  // }
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                require("postcss-px-to-viewport")({
                    unitToConvert: "px",
                    viewportWidth: 375,
                    viewportHeight: 812,
                    unitPrecision: 3,
                    propList: [
                        "*"
                    ],
                    viewportUnit: "vw",
                    fontViewportUnit: "vw",
                    selectorBlackList: [],
                    minPixelValue: 1,
                    mediaQuery: false,
                    replace: true,
                    exclude: /(\/|\\)(node_modules)(\/|\\)/,
                })
            ]
        }
    }
}

};
