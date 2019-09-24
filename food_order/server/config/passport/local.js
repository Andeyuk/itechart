
const passport = require('passport');
const LocalStrategy = require('passport-local').LocalStrategy();
const User = require('../../db/models/user');

passport.use(new LocalStrategy({
        session: false
    }, 
    (login, password, done) => {
        User.findOne({where: {login: login}})
        .then(user=>{
            //to do check passport func
            if (!user || !user.password === password) {
                return done(null, false, {message: 'No such a user'});
            }
            return done(null, user);
        })
        .catch(err=>done(err))
    }
  )
);
