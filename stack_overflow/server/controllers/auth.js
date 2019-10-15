const passport = require('passport');
const User = require('../db/models/user');
const jwt = require('jsonwebtoken');
const JWT = require('../config/index').JWT;

async function register(req, res){
    //todo validation
    console.log(req.body)
    try {
        const user = await User.createUser(req.body);
        res.send('OK');
    } catch(err){
        console.log(err);
        res.status(err.status || 500).send(err)
    }
        
}


function login(req, res, next){
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
}

module.exports = {
    register,
    login
}