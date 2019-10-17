
const QuestionRepository = require('../repositories/question');

const Question={

    async addViewIfNessesary(){
        //todo
    },

    async findAll(options){
        return (
            await QuestionRepository.findAll(options)
        )
    },

    async findById(id){
        return await QuestionRepository.findById(id)
    },


    async upVote(id){
        return await QuestionRepository.increment(id, 'upVotes');
    },

    async downVote(id){
        return await QuestionRepository.increment(id, 'downVotes');
    },


    async create({header, content}){
        return await QuestionRepository.create({
            header,
            content
        })

    },

    async delete(id){
        return await QuestionRepository.delete(id);
    },

    async update(id, data){
        return await QuestionRepository.update(id, data);
    }
}

module.exports = Question;