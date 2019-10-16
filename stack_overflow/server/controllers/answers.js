const AnswerService = require('../services/answer');

const AnswerController = {
    async getAll(req, res){
        //todo validation
        try {
            const json = await AnswerService.getAll(req.query);
            res.json(json);
        } catch (err){
            res.status(err.status || 500).send(err);
        }
       
    },

    async getById(req, res){
        //todo validation
        try {
            const json = await AnswerService.getById(req.params.id);
            res.json(json);
        } catch (err){
            res.status(err.status || 500).send(err);
        }
       
    },
    
}


module.exports = AnswerController;