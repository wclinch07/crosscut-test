const express = require('express');
const app = express();

// Intentional crash: calling a function that doesn't exist
// This will throw an unhandled exception and kill the process on startup
const config = undefined;
const port = config.port; // TypeError: Cannot read properties of undefined

app.get('/', (req, res) => {
  res.send('This will never be reached');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
