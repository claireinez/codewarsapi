var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var handlers = require('./handlers.js');
var Shot = require('shot');

// some niceties
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

function decorate (reqDecorations, repDecorations, callback){
  return function(request, reply){
    for (var reqDec in reqDecorations){
      request[reqDec] = reqDecorations[reqDec];
    }

    for (var repDec in repDecorations){
      reply[repDec] = repDecorations[repDec];
    }

    callback(request, reply);
  };
}

/*var newKataDispatch = decorate({params:{kyuLevel: 8}}, {}, handlers.newKata);

Shot.inject(newKataDispatch, function(response),{expect(reply).to.equal(8)};

})*/

//shot.inject (function, configuration (method etc), callback)

var newKataDispatch = decorate({params:{kyuLevel: 8}}, {}, handlers.newKata);

Shot.inject(newKataDispatch, {method: 'GET'}, function(response){expect(reply).to.equal(8);});


Shot.inject(handlers.user, )