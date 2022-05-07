const WebpackBar = require('webpackbar');
const { optimizations, plugins, resolvers } = require('./webpack');

module.exports = {
  devtool: 'source-map',
  optimization: optimizations,
  plugins: [...plugins, new WebpackBar()],
  resolve: resolvers(__dirname),
  resolveLoader: {
    modules: ['node_modules'],
  },
};
