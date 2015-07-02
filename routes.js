var handlers = require('./handlers.js');

var routes = [

  {
    method: 'GET',
    path: '/kyu/{kyuLevel}',
    handler: handlers.newkata
  },

  {
    method: 'POST',
    path: '/user',
    handler: handlers.user
  }

];

module.exports = routes;