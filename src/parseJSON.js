// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch
var parseJSON = function(json) {
  let globalJSON = json;

  const parse = function() {
    // Check the "type" of json, Keep going until hitting a comma
    let results;
    stripWhiteSpace();
    // End / Edge case
    if (!globalJSON.length) {
      return results;
    }
    // Number
    if (typeof globalJSON[0] === 'number') {
      results = parseNumber();
    }
    // Letters (t = true, f = false, n = null)
    else if (globalJSON[0] === 't' || globalJSON[0] === 'f' || globalJSON[0] === 'n') {
      results = parseLetter();
    }
    // String "" make sure parse isn't triggered on tokens inside strings
    else if (globalJSON[0] === '"') {
      results = parseString();
    }
    // Array []
    else if (globalJSON[0] === '[') {
      results = parseArray();
    }
    // Object {}
    else if (globalJSON[0] === '{') {
      results = parseObject();
    }

    if (globalJSON[0] === ',') {
      globalJSON = globalJSON.slice(1);
    }
    stripWhiteSpace();
    return results;
    // Include reviver (last step)
  };

  const parseNumber = function() {
    let result;
    for (let i = 0; i < globalJSON.length; i++) {
      if (typeof globalJSON[i] !== 'number') {
        result = parseInt(globalJSON.slice(0, i));
        globalJSON = globalJSON.slice(i);
      }
    }
    return result;
  };

  const parseLetter = function() {
    if (globalJSON[0] === 't') {
      globalJSON = globalJSON.slice(4);
      return true;
    } else if (globalJSON[0] === 'f') {
      globalJSON = globalJSON.slice(5);
      return false;
    } else {
      globalJSON = globalJSON.slice(4);
      return null;
    }
  };

  const parseString = function() {
    let result;
    for (let i = 1; i < globalJSON.length; i++) {
      if (typeof globalJSON[i] === '"') {
        result = globalJSON.slice(0, i + 1);
        globalJSON = globalJSON.slice(i + 1);
      }
    }
    return result;
  };

  const parseArray = function() {
    let result = [];
    globalJSON = globalJSON.slice(1);
    while (globalJSON[0] !== ']') {
      result.push(parse());
    }
    globalJSON = globalJSON.slice(1);
    return result;
  };

  const parseObject = function() {
    let result = {};
    globalJSON = globalJSON.slice(1);
    while (globalJSON[0] !== '}') {
      result[parseKey()] = parse();
    }
    globalJSON = globalJSON.slice(1);
    return result;
  };

  const parseKey = function() {
    let result = parseString();
    // strip semi-colon
    globalJSON = globalJSON.slice(1);
    return result;
  };

  const stripWhiteSpace = function() {
    while (globalJSON[0] === ' ') {
      globalJSON = globalJSON.slice(1);
    }
  };

  return parse();
};
