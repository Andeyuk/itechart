const passport = require('passport');
const createError = require('http-errors');
const AuthUtils = require('../utils/auth');
const UserService = require('./user');

//todo auth validator and err handler

function checkUserFound(user){
    if (!user) {
        throw new createError.NotFound('No such a user');
    }
}

const Auth = {
    authenticate: (strategy) => (req, res, next) => {
        passport.authenticate(strategy, {session: false})(req, res, next);
    },
    
    checkHasRole: (userRole, queryRole)  => {
        if (userRole !== queryRole){
            throw new createError.Forbidden()
        }
    },

    checkHasSameId(userId, reqId){
        if (userId != reqId){
            throw new createError.Forbidden(`${userId}/${reqId}`)
        }
        return true;
    },

    async checkIsOwner(userId, objId, service){
        const object = await service.findById(objId);
        if (userId != object.userId){
            throw new createError.Forbidden();
        }
        return true;
    },

    login(user){
        checkUserFound(user);

        const token = AuthUtils.generateToken(user.id);
            
         return({
            user,
            token: 'Bearer ' + token,
        })
    },

    async register(data){
        const user = await UserService.create(data);
        const plainUser = user.get({
            plain: true
        })

        AuthUtils.hideSensativeProps(plainUser, 'password');

        return plainUser;
    },

    
}

module.exports = Auth;