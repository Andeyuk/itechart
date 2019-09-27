const express = require('express');
const router = express.Router();
const User = require('../db/models/user');

/* GET users listing. */
router.get('/', (req, res) => {
  console.log(req.isAuthenticated());
  User.findAll().then(projects => {
    res.send(projects);
  })
  
});



module.exports = router;
