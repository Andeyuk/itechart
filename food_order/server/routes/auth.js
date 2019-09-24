const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../db/models/user');

const JWT = require('../config').JWT;


router.get('/signup', (req, res) => {
    let {login, password} = req.query;
    console.log(login, password);
    User.create({login, password})
        .then(user=>
            res.send(200, "OK")
        )
        .catch(err=>
            res.send(400, err)
        )
  });

router.get('/login',
    (req, res, next) => {
        passport.authenticate('local', function(err, user) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            
        const token = jwt.sign({
              id: user.id,
              exp: Math.floor(Date.now() / 1000) + parseInt(JWT.live)
            },
            JWT.secret);
        req.send({
            user,
            token: "bearer " + token,
        })
        
  })(req, res, next);
})

  
  module.exports = router;