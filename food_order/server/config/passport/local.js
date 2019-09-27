
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../db/models/user');
const Op = require('sequelize').Op;

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        session: false
    }, 
    (username, password, done) => {
        User.findOne({
            where: {
                [Op.or]: [{username: username},  {email: username}]
            }
        })
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
