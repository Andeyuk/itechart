const jwt = require('jsonwebtoken');
const JWT = require('../config/index').JWT;

const Auth = {
    generateToken(id){
        return jwt.sign({
                payload: {
                    id
                },
                exp: Math.floor(Date.now() / 1000) + parseInt(JWT.life)
            },
            JWT.secret
        )
    },
    hideSensativeProps(obj, prop){
        Object.defineProperty(obj, prop, {
            enumerable: false,
        });
    }

}

module.exports = Auth;