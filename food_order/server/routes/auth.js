const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../db/models/user');

const JWT = require('../config').JWT;


router.post('/signup', (req, res) => {
    console.log(req.body);
    let {username, email, password} = req.body;
    console.log(username, email, password);
    User.create({username, email, password})
        .then(user=>
            res.send({username, email})
        )
        .catch(err=>{
            console.log(err);
            res.send(400, err)
        })
  });

router.post('/login',
    (req, res, next) => {
        passport.authenticate('local', function(err, user) {
            console.log(user);
            if (err)  return next(err); 
            if (!user) return res.send(404, "Not found"); 

            const life = req.remember ? JWT.longLife : JWT.life;
            
        const token = jwt.sign({
              id: user.id,
              exp: Math.floor(Date.now() / 1000) + parseInt(life)
            },
            JWT.secret);
        
        return res.send({
            user,
            token: "bearer " + token,
        })
  })(req, res, next);
})



  
  module.exports = router;