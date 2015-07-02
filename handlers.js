var request = require('request');
var tokens = require('./tokens.json');
// var fs = require('fs');

var handlers = {

  newkata: function (req, res) {
    var path = req.params;
    var kyuLevel = path.kyuLevel;
    console.log(kyuLevel);
    var options = {
      uri: 'https://www.codewars.com/api/v1/code-challenges/javascript/train',
      headers: {
        Authorization: tokens.codewars.anni.token, // get token from db

      },
      form: {
        strategy: 'kyu_' + kyuLevel + '_workout'
      }
    };
    request.post(options, function (err, res, body) {
      if (err) return err;
      var data = JSON.parse(body);

       var cwData = {
        name: data.name,
        level: data.rank,
        description: data.description,
        id: data.session.projectId,
        setup: data.session.setup,
        link: data.href
      };
      console.log("All data: ",cwData); // Data to return to the page // 
      console.log("href: ",cwData.link); // The  kata ID  need to be sent to DB plus solved : false 
       //return reply(cwData.level);

    });
  },

  user: function (req, res) {
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