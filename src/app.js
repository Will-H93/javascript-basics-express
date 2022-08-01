const express = require('express');

const app = express();

app.use(express.json());

const {
  sayHello,
  upperCase,
  lowerCase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: upperCase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowerCase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.json({ result: firstCharacter(req.params.string) });
  }
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

app.get('/numbers/subtract/:b/from/:a', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(a, b) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(req.body.a, 10)) || Number.isNaN(parseInt(req.body.b, 10))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(req.body.a, 10)) || Number.isNaN(parseInt(req.body.b, 10))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(req.body.a, req.body.b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(req.body.a, 10)) || Number.isNaN(parseInt(req.body.b, 10))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
  }
});

app.post('/booleans/negate', (req, res) => {
  res.json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  if (Number.isNaN(parseInt(req.params.number, 10))) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.json({ result: isOdd(req.params.number) });
  }
});

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  if (req.params.character.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.json({ result: startsWith(req.params.character, req.params.string) });
  }
});

module.exports = app;
