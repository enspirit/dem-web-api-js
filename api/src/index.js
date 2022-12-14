const express = require('express');
const app = express();
const healthCheck = require('./routes/health-check.js');
const postCompile = require('./routes/post-compile.js');

// Routes
app.get('/', healthCheck);
app.post('/compile/', postCompile);

// Error handling
app.use((err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).send({ description: err.message });
  } else {
    res.status(500).send({ description: err.message });
  }
});

module.exports = () => {
  app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });
};
