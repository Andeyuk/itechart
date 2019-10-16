
const Model = require('../db/models/answer');

const Answer = {
    async getAll(options){
        return (
            await Model.findAll({
                options
            })
        )
    },

    async upVote(id){
        const answer = await Model.findByPk(id);
        return (
            await answer.increment('upVotes', { 
                where: {
                    id
                }
            })
        )
    },

    async getById(id){
        return await Model.findByPk(id)
    },

    async downVote(id){
        const answer = await Model.findByPk(id);
        return (
            await answer.increment('downVotes', { 
                where: {
                    id
                }
            })
        )
    },

    async upVote(id){
        const answer = await Model.findByPk(id);
        return (
            await answer.increment('upVotes', { 
                where: {
                    id
                }
            })
        )
    },

    async downVote(id){
        const answer = await Model.findByPk(id);
        return (
            await answer.increment('downVotes', { 
                where: {
                    id
                }
            })
        )
    }
}

module.exports = Answer;