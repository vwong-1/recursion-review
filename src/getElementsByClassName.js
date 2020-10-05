// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  let results = [];
  element = element || document.body;

  if (element.classList !== undefined && element.classList.contains(className)) {
    results.push(element);
  }

  if (element.childNodes.length === 0) {
    return results;
  }

  for (let i = 0; i < element.childNodes.length; i++) {
    let childResults = getElementsByClassName(className, element.childNodes[i]);
    results = results.concat(childResults);
  }

  return results;
};
