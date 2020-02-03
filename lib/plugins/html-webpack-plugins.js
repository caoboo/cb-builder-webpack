const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (config, projectRoot) => {
  const htmlWebpackPlugins = [];

  Object.keys(config.entry)
    .forEach((name) => {
      htmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
          inlineSource: '.css$',
          template: path.join(projectRoot, `./src/${name}/index.html`),
          filename: `${name}.html`,
          chunks: ['vendors', name],
          inject: true,
          minify: {
            html5: true,
            collapseWhitespace: true,
            preserveLineBreaks: false,
            minifyCSS: true,
            minifyJS: true,
            removeComments: false,
          },
        }),
      );
    });

  return htmlWebpackPlugins;
};
