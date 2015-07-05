
var random = require('unique-random-array');

var list = require('./list').map(function(character) {
  character.fullname = character.first + ' ' + character.last;
  return character;
});

module.exports.all = list;
module.exports.random = random(list);

