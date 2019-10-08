const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../db/models/user');

const JWT = require('../config').JWT;


router.post('/signup', (req, res) => {

    let {username, email, password} = req.body;
    if (!username || !email || !passport) return res.status(422).send({error:'EMPTY_FIELD', message:'Missed required field'})

    User.create({username, email, password})
        .then(user=>
            res.send({username, email})
        )
        .catch(err=>{
            console.log(err);
            res.status(500).send(err)
        })
  });


router.post('/login',
    (req, res, next) => {
        passport.authenticate('local', function(err, user) {
            if (err)  return next(err); 
            if (!user) return res.send(404, "Not found"); 

            const life = req.remember ? JWT.longLife : JWT.life;
            
            const token = jwt.sign({
                    payload: {
                        id: user.id,
                    },
                    exp: Math.floor(Date.now() / 1000) + parseInt(life)
                },
                JWT.secret
            );
            
            return res.send({
                user,
                token: 'Bearer ' + token,
            })
        })(req, res, next);
    })



  
  module.exports = router;