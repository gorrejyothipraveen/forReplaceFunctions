
// 2. Stargazing Log
// A stargazing club logs visible constellations from each night:
// ["Orion", "Leo"]
// ["Taurus"]
// ["Orion", "Gemini"]
// Combine everyone’s observations into one list of all constellations spotted.


const constellations = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]];
console.log(constellations.flat());

const count = function (value, color) {
  return color === 'blue' ? value + 1 : value;
}

const ribbonCount = ["red", "blue", "red", "green", "red", "blue"];
// console.log(ribbonCount.reduce(count, 0));
