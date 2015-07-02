var handlers = require('./handlers.js');

var routes = [
  {
    method: 'GET',
    path: '/newkata',
    handler: handlers.newkata
  },

  {
    method: 'POST',
    path: '/user',
    handler: handlers.user
  }
];

module.exports = routes;