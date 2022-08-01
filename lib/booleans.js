function negate(a) {
  let falsy = '';

  if (a === true) {
    falsy = !true;
  } else if (a === false) {
    falsy = !false;
  }
  return falsy;
}

function both(a, b) {
  return a === true && b === true;
}

function either(a, b) {
  let eitherTrue = '';
  if (a || b === true) {
    eitherTrue = true;
  } else {
    eitherTrue = false;
  }
  return eitherTrue;
}

function none(a, b) {
  let bothFalse = '';
  if (a === false && b === false) {
    bothFalse = true;
  } else {
    bothFalse = false;
  }
  return bothFalse;
}

function one(a, b) {
  let atLeastOne = '';
  if (a === true && b === false) {
    atLeastOne = true;
  } else if (a === false && b === true) {
    atLeastOne = true;
  } else {
    atLeastOne = false;
  }
  return atLeastOne;
}

function truthiness(a) {
  let truthy = '';
  if (a) {
    truthy = true;
  } else {
    truthy = false;
  }
  return truthy;
}

function isEqual(a, b) {
  let equal = '';
  if (a === b) {
    equal = true;
  } else {
    equal = false;
  }
  return equal;
}

function isGreaterThan(a, b) {
  let greater = '';
  if (a > b) {
    greater = true;
  } else {
    greater = false;
  }
  return greater;
}

function isLessThanOrEqualTo(a, b) {
  let lessOrEqual = '';
  if (a <= b) {
    lessOrEqual = true;
  } else {
    lessOrEqual = false;
  }
  return lessOrEqual;
}

function isOdd(a) {
  let odd = '';
  if (a % 2) {
    odd = true;
  } else {
    odd = false;
  }
  return odd;
}

function isEven(a) {
  let even = '';
  if (a % 2) {
    even = false;
  } else {
    even = true;
  }
  return even;
}

function isSquare(a) {
  let square = Math.sqrt(a) % 1 === 0;
  if (square === true) {
    square = true;
  } else {
    square = false;
  }
  return square;
}

function startsWith(char, string) {
  let firstLetter = '';
  if (string.charAt(0) === char) {
    firstLetter = true;
  } else {
    firstLetter = false;
  }
  return firstLetter;
}

function containsVowels(string) {
  let hasVowels = '';
  const vowels = /[aeiou]/gi;
  if (vowels.test(string) === true) {
    hasVowels = true;
  } else {
    hasVowels = false;
  }
  return hasVowels;
}

function isLowerCase(string) {
  let lower = '';
  if (string === string.toLowerCase()) {
    lower = true;
  } else {
    lower = false;
  }
  return lower;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
