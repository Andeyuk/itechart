const passport = require('passport');
const {Strategy, ExtractJwt} = require('passport-jwt');
const JWT = require('../../config').JWT;
const User = require('../../db/models/user');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT.secret,
    issuer: JWT.issuer,
    audience: JWT.audience,
    session: false
};

passport.use(new Strategy(opts, (jwt_payload, done)=>{
    console.log(jwt_payload)
    User.findByPk(jwt_payload.payload.id, {raw: true})
        .then(user => 
           user ? done(null, user) : done(null, false, {message: 'No such a user'})
        )
        .catch(err => done(err))
}))