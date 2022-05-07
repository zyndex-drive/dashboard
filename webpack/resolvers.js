const path = require('path');

// Paths
const src = './src';
const assets = './src/assets';
const component = './src/components';
const libs = './src/libs';
const plugins = './src/plugins';
const router = './src/router';
const styles = './src/styles';
const templates = './src/templates';
const views = './src/views';

// Files
const state = './src/plugins/store/index.js';

module.exports = (dir) => ({
  alias: {
    '@': path.resolve(dir, src),
    '@assets': path.resolve(dir, assets),
    '@components': path.resolve(dir, component),
    '@libs': path.resolve(dir, libs),
    '@plugins': path.resolve(dir, plugins),
    '@router': path.resolve(dir, router),
    '@styles': path.resolve(dir, styles),
    '@templates': path.resolve(dir, templates),
    '@views': path.resolve(dir, views),
    '@state': path.resolve(dir, state),
  },
  extensions: ['.js', '.vue', '.json', '.css', '.scss'],
  modules: ['node_modules'],
});
