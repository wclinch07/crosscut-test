// Missing require that doesn't exist
const express = require('express');
const brokenModule = require('this-package-does-not-exist-at-all-12345xyz');
const anotherBrokenModule = require('another-fake-broken-dep-99999');

const app = express();

undefinedVariable.crash();

// TypeError: cannot read properties of undefined
const config = undefined;
const port = config.port;

// ReferenceError: notDefined is not defined
console.log(notDefined);

// Calling null as a function
const result = null();

// Accessing deeply nested undefined
const val = config.nested.deeply.missing.value;

app.get('/', (req, res) => {
  res.send('This will never be reached');
  throw new Error('FATAL: intentional crash');
});

// Bad async that will throw unhandled rejection
async function crashAsync() {
  const bad = null;
  return bad.explode();
}
crashAsync();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
