
const AnswerReposiory = require('../repositories/answer');

const Answer={
    async findAll(options){
        return (
            await AnswerReposiory.findAll({
                options
            })
        )
    },

    async findById(id){
        return await AnswerReposiory.findById(id)
    },

    async downVote(id){
        return await AnswerReposiory.increment(id, 'downVotes');
    },

    async upVote(id){
        return await AnswerReposiory.increment(id, 'upVotes');
    },

    async update(id, data){
        return await AnswerReposiory.update(id, data);
    },

    async delete(id){
        return await AnswerReposiory.delete(id);
    },

    async create(data){
        return await AnswerReposiory.create(data);
    }

}

module.exports = Answer;