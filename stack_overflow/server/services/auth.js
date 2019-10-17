const passport = require('passport');
const createError = require('http-errors');
const AuthUtils = require('../utils/auth');
const UserService = require('./user');


function checkUserFound(user){
    if (!user) {
        throw new createError.NotFound('No such a user');
    }
}


const Auth = {
    authenticate: (strategy) => (req, res, next) => {
        passport.authenticate(strategy, {session: false})(req, res, next);
    },
        
    hasRole: (role) => (req, res, next) => {
        if (req.user.role !== role){
            throw new createError.Forbidden()
        }
    },

    hasSameId(userId, reqId){
        if (userId != reqId){
            throw new createError.Forbidden()
        }
    },

    login(user){
        checkUserFound(user);

        const token = AuthUtils.generateToken(user.id);
            
         return({
            user,
            token: 'Bearer ' + token,
        })
    },

    async register(user){
        return await UserService.create(user);
    },

    
}

module.exports = Auth;