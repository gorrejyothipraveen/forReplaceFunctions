const count = function (value, color) {
  return color === 'blue' ? value + 1 : value;
}

const RibbonCount = function(array) {
  return array.reduce(count, 0);
}

const constellations = function (array) {
  return array.flat();
}

const isArray = function (array) {
  return typeof array === 'object';
}

function areEqual(array1, array2) {
  if(array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if(!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
}

function areDeepEqual(array1, array2) {
  if(typeof array1 !== typeof array2) {
    return false;
  }

  if(isArray(array1) && isArray(array2)) {
    return areEqual(array1, array2);
  }

  return array1 === array2;
}

function testFunctionality(description, input, taskToPerform, expected) {
  const actual = taskToPerform(input);
  const resultSymbol = areDeepEqual(actual, expected) ? '✅' : '❌';
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

function testConstellations() {
  console.log(testFunctionality('blue ribbon count is 2', [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]], constellations,[ "Orion", "Leo", "Taurus", "Orion", "Gemini" ]));
}

function testAll() {
  // testRibbonCount();
  testConstellations();
}

testAll();