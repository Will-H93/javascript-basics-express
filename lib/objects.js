const { arrayToCSVString } = require("./arrays");

const createPerson = (name, age) => {
  return {
    name,
    age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  let isTrue = '';
  if (object[property]) {
    isTrue = true;
  } else {
    isTrue = false;
  }
  return isTrue;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  const manfacCheck = cars.filter(manfac => {
    return manfac.manufacturer === 'Honda';
  });
  return manfacCheck;
};

const averageAge = people => {
  const average = people.reduce((acc, person) => person.age + acc, 0) / people.length;
  // I don't really understand the whole line. I believe it's the accumularion of each person in the array, adding each age to the accumulation starting from 0 and then dividing by the number of people in the array.
  return average;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce: newPerson => {
      return `Hi ${newPerson}, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
