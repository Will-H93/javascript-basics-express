const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.join().split(',');
};

const uppercaseWordsInArray = strings => {
  const upper = strings.map(item => {
    return item.toUpperCase();
  });
  return upper;
};

const reverseWordsInArray = strings => {
  const reverse = strings.map(item =>
    item
      .split('')
      .reverse()
      .join('')
  );
  return reverse;
};

const onlyEven = numbers => {
  return numbers.filter(even => even % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((remove, i) => i !== index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(vowel => /^[aeiou]/i.test(vowel));
  // ^ refers to start of string & i refers to a case-insensitive modifier
};

const removeSpaces = string => {
  return string.replace(/\s+/g, '');
  // \s is regex for whitespace and g is a global flag (so match all whitespace and remove it)
};

const sumNumbers = numbers => {
  return numbers.reduce((acc, num) => acc + num);
};

const sortByLastLetter = strings => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
  // I have no idea why this works, found the solution on google and it passes.
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
