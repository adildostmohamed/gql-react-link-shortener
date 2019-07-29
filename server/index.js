const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const appConfig = require('./config');

// set up morgan middleware for logging incoming requests
app.use(morgan('tiny'));

// set up bodyParser middleware to parse through request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({ hello: 'world' });
});

// start up the app
const { port } = appConfig;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
