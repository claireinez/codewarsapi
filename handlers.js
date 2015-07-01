var request = require('request');
var server = require('./server.js');
var tokens = require('./tokens.json');
// var fs = require('fs');

var handlers = {

  newkata: function (err, res, body) {
    var options = {
      // method: 'GET',
      // uri: 'https://www.codewars.com/api/v1/users/nofootnotes',
      method: 'POST',
      uri: 'https://www.codewars.com/api/v1/code-challenges/javascript/train',
      headers: {
        // Authorization: tokens.codewars.claire
        Authorization: tokens.codewars.anni.token
      }
    };
    request(options, function (err, res, body) {
      if (err) return err;
      console.log(JSON.parse(body));
    });
  },

  user: function (err, res, body) {
    var options = {
      method: 'GET',
      uri: 'https://www.codewars.com/api/v1/users/' + tokens.codewars.anni.username,
      headers: {
        Authorization: tokens.codewars.anni.token
      }
    };
    request(options, function (err, res, body) {
      if (err) return err;
      console.log(JSON.parse(body));
    });
  }

};

module.exports = handlers;