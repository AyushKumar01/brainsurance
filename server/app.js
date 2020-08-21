const express = require('express');
const app = express();
const port = 5000;
const carsRoute = require('./route/carsRoutes');

// add middleware to help work with req.body
app.use(express.json());

// root url of server
app.get('/', (_req, res) => {
  res.send('<h1>Hello Express</h1>');
});

// cars endpoint, setup using express.Router()
app.use('/cars', carsRoute);

// listen, start the application
app.listen(port, () => console.log(`listening at: http://localhost:${port}`));
