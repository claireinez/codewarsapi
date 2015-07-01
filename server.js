var Hapi = require('hapi');
var server = new Hapi.Server();
var routes = require ('./routes.js');

server.connection({
  port: process.env.PORT || 8000
});

server.route(routes);

server.start();