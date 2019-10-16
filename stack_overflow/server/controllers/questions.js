const QuestionService = require('../services/question');

const QuestionController = {
    async getAll(req, res){
        //todo validation
        try {
            const json = await QuestionService.getAll(req.body);
            res.json(json);
        } catch (err){
            res.status(err.status || 500).send(err);
        }
       
    },

    async getById(req, res){
        //todo validation
        try {
            const json = await QuestionService.getById(req.params.id);
            res.json(json);
        } catch (err){
            res.status(err.status || 500).send(err);
        }
       
    },
}


module.exports = QuestionController;