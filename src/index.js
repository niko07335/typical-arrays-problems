
exports.min = function min (array) {
  if (!array || array.length == 0) return 0;
  else return array.sort(function(a, b) { return a - b })[0];
}

exports.max = function max (array) {
  if (!array || array.length == 0) return 0;
  else return array.sort(function(a, b) { return b - a })[0];
}

exports.avg = function avg (array) {
  let res = 0;
  if (!array || array.length == 0) return 0;
  else {array.forEach(element => { res += element});
  return res / array.length;}
}
