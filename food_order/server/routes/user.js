const express = require('express');
const router = express.Router();
const User = require('../db/models/user');

/* GET users listing. */
router.get('/', (req, res) => {
  User.findAll().then(projects => {
    res.send(projects);
  })
  
});

router.get('/test', (req, res) => {
  console.log(req.query.login, req.query.password)
  User.create({login: req.query.login, password: req.query.password}).then(el=>console.log(el));
  res.send('respond with a resource');
});

module.exports = router;
