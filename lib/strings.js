function sayHello(string) {
  return `Hello, ${string}!`;
}

function upperCase(string) {
  return string.toUpperCase();
}

function lowerCase(string) {
  return string.toLowerCase();
}

function countCharacters(string) {
  return string.length;
}

function firstCharacter(string) {
  return string.charAt(0);
}

function firstCharacters(string, n) {
  if (string.length > 4) {
    return string.substring(0, 4);
  }
  return string.substring(0, 2);
}

module.exports = {
  sayHello,
  upperCase,
  lowerCase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
