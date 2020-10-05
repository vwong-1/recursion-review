// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'function' || typeof obj === 'symbol' || typeof obj === 'undefined' || obj === NaN || obj === Infinity) {
    return 'null';
  }
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return `${obj}`;
  }
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
};
