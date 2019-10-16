const passport = require('passport');
const createError = require('http-errors');
const AuthUtils = require('../utils/auth');
const UserService = require('../services/user');



function checkUserFound(user){
    if (!user) {
        throw new createError.NotFound('No such a user');
    }
}

const Auth = {
    authenticate(strategy){
        return function(req, res, next){
            return passport.authenticate(strategy, {session: false})(req, res, next);
        }
    },

    login(user){
        console.log(user);
        checkUserFound(user);

        const token = AuthUtils.generateToken(user.id);
            
         return({
            user,
            token: 'Bearer ' + token,
        })
    },

    async register(user){
        console.log(user)
        return await UserService.create(user);
    }
}

module.exports = Auth;