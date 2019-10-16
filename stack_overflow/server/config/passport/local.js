
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserService = require('../../services/user');
const Op = require('sequelize').Op;

passport.use(new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password',
        session: false
    }, 
    (login, password, done) => {
        UserService.getByLogin(login)
        .then(user=>{

            //to do check passport func
            if (!user || user.password !== password) {
                return done(null, false, {message: 'No such a user'});
            }

            Object.defineProperty(user, 'password', {
                enumerable: false,
            });

            return done(null, user);
        })
        .catch(err=>done(err))
    }
));
