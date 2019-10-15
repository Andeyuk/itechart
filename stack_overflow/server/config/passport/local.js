
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../db/models/user');
const Op = require('sequelize').Op;

passport.use(new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password',
        session: false
    }, 
    (login, password, done) => {
        User.getUserByLogin(login, password)
        .then(user=>{

            //to do check passport func
            if (!user || user.password !== password) {
                return done(null, false, {message: 'No such a user'});
            }
            let {id, userName, email, firstName, lastName} = user;
            return done(null, {id, userName, email, firstName, lastName, seniority});
        })
        .catch(err=>done(err))
    }
));
