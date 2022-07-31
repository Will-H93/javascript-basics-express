const express = require('express');
const {
  sayHello,
  upperCase,
  lowerCase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

const app = express();

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

module.exports = app;
