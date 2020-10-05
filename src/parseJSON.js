// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch
var parseJSON = function(json) {
  let globalJSON = json;
  let result;

  const parse = function() {
    // Check the "type" of json, Keep going until hitting a comma
    // Number
    if (typeof globalJSON[0] === 'number') {
      parseNumber();
    }
    // Letters (t = true, f = false, n = null)
    if (globalJSON[0] === 't' || globalJSON[0] === 'f' || globalJSON[0] === 'n') {
      parseLetter();
    }
    // String "" make sure parse isn't triggered on tokens inside strings
    if (globalJSON[0] === '"') {
      parseString();
    }
    // Array []
    if (globalJSON[0] === '[') {
      parseArray();
    }
    // Object {}
    if (globalJSON[0] === '{') {
      parseObject();
    }
    // Include reviver (last step)
  };

  const parseNumber = function() {

  };

  const parseLetter = function() {

  };

  const parseString = function() {

  };

  const parseArray = function() {

  };

  const parseObject = function() {

  };

  parse();
  return result;
};

