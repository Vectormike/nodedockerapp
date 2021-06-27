const express = require('express');
const logger = require('morgan');

const usersRouter = require('./routes/users');

const port = 5000;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

module.exports = app;
