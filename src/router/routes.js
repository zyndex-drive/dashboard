/* eslint-disable */

const _import = require('@/libs/util.import.' + process.env.NODE_ENV);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: _import('HomeView'),
  },
  {
    path: '/about',
    name: 'About',
    component: _import('AboutView'),
  },
];

export default routes;
