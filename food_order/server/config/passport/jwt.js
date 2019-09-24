const passport = require('passport');
const {Strategy, ExtractJwt} = require('passport-jwt');
const JWT = require('../../config').JWT;
const User = require('../../db/models/user');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT.secret,
    issuer: JWT.issuer,
    audience: JWT.audience
  };

passport.use(new Strategy(opts,(jwt_payload, done)=>{
    User.findByPk(jwt_payload.id)
        .then(user => 
            user ? done(user) : done(null, false, {message: 'No such a user'})
        )
        .catch(err => done(err))
}))