const usersRouter = require('express').Router();
module.exports = usersRouter;
const users = require('../data/users.json');

usersRouter.get('/users', (req, res) => {
  res.send(users)
})