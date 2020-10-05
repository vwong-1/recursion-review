// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'function' || typeof obj === 'symbol' || typeof obj === 'undefined' || obj === NaN || obj === Infinity || obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return `${obj}`;
  }
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  if (Array.isArray(obj)) {
    return '[' + obj.map(element => {
      return stringifyJSON(element);
    }).join(',') + ']';
  }
  let results = [];
  for (const key in obj) {
    if (typeof obj[key] === 'function' || typeof obj[key] === 'symbol' || typeof obj[key] === 'undefined') {
      continue;
    }
    results.push(`"${key}":` + stringifyJSON(obj[key]));
  }
  return '{' + results.join(',') + '}';
};

