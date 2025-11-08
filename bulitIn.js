// 1. Festival Ribbon Count
// A craft booth cuts ribbons of different colors throughout the day:
// ["red", "blue", "red", "green", "red", "blue"]
// They want to know how many blue ribbons were cut.

const count = function (value, color) {
  return color === 'blue' ? value + 1 : value;
}

const ribbonCount = ["red", "blue", "red", "green", "red", "blue"];
console.log(ribbonCount.reduce(count, 0));
