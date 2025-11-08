
// 2. Stargazing Log
// A stargazing club logs visible constellations from each night:
// ["Orion", "Leo"]
// ["Taurus"]
// ["Orion", "Gemini"]
// Combine everyone’s observations into one list of all constellations spotted.

const count = function (value, color) {
  return color === 'blue' ? value + 1 : value;
}

const RibbonCount = function(array) {
  return array.reduce(count, 0);
}

// const constellations = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]];
// console.log(constellations.flat());

// console.log(ribbonCount.reduce(count, 0));

function areEqual(list1, list2) {
  if (list1.length !== list2.length) {
    return false;
  }
  for (let index = 0; index < list1.length; index++) {
    if(list1[index] !== list2[index]) {
      return false;
    }
  }
  return true;
}

function testFunctionality(description, input, taskToPerform, expected) {
  const actual = taskToPerform(input);
  const resultSymbol = areEqual(actual, expected) ? '✅' : '❌';
  if (resultSymbol === '✅') {
    const workingCase = resultSymbol + description;
    return workingCase;
  } 
  const inputSegment = `input : [${input}]\n`;
  const expectedSegment = `expected : [${expected}]\n`;
  const actualSegment = `actual : [${actual}]`;
  const finalMessage = inputSegment + expectedSegment + actualSegment;
  return finalMessage;
}

function testRibbonCount() {
  console.log(testFunctionality('blue ribbon count is 2', ["red", "blue", "red", "green", "red", "blue"], RibbonCount,2));
}

function testAll() {
  testRibbonCount();
}

testAll();