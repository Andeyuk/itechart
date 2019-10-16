
const AuthService = require('../services/auth');

const AuthController = {
    register(req, res){
        //todo validation
        try {
            const json = AuthService.register(req.body);
            res.json(json);
        } catch (err){
            res.status(err.status || 500).send(err);
        }
       
    },
    
    authenticate(strategy){
        return AuthService.authenticate(strategy)
    },
    
    login(req, res){
        try {
           const json = AuthService.login(req.user || req.body);
           res.json(json);
        } catch (err){
            res.status(err.status || 500).send(err)
        }
       
    }
}


module.exports = AuthController;