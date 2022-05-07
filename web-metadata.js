const { title } = require('./package.json');
const { baseSite } = require('./package.json');

const twitterData = {
  type: 'summary_large_image',
  username: '@shantk18',
  pic: 'https://i.ibb.co/v1WvYQG/Home-Banner.png',
};
const keyWords =
  'Sudharshan TK, Portfolio, Shan.tk, https://sudharshan.tk, sudharshan.tk, sudharshan, Blog, Portfolio-blog';

const webSiteDesc =
  'Organized, top performer and goal-driven individual. Skilled at using Various Programming Languages such as Python & Javascript to Leverage Finance Functions to build a competitive advantage.';

module.exports = {
  title,
  baseSite,
  keyWords,
  twitterData,
  webSiteDesc,
};
