
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
            attributes: ['id' ,'username', 'email', 'password'],
            where: {
                [Op.or]: [{username: username},  {email: username}]
            },
            raw: true,
        })
        .then(user=>{

            //to do check passport func
            if (!user || user.password !== password) {
                return done(null, false, {message: 'No such a user'});
            }
            let {id, username, email} = user;
            return done(null, {id, username, email});
        })
        .catch(err=>done(err))
    }
));
