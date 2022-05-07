/* eslint-disable */

const routes = require('./routes-seo');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const metadata = require('../web-metadata');

const plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    title: metadata.title,
    twitterData: metadata.twitterData,
    BASE_URL: '',
    desc: metadata.webSiteDesc,
    url: metadata.baseSite,
    filename: 'offline.html',
    minify: {
      caseSensitive: true,
      collapseWhitespace: false,
      conservativeCollapse: true,
      keepClosingSlash: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      removeAttributeQuotes: false,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
    },
    template: 'public/index.html',
  }),
  new SitemapPlugin({
    base: metadata.baseSite,
    paths: routes,
    options: {
      filename: 'sitemap.xml',
      lastmod: true,
    },
  }),
];

module.exports = plugins;
