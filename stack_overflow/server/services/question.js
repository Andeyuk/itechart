
const Model = require('../db/models/question');

const Question = {

    async getAll({status='active', orderBy = ['id'], offset, limit}){
        let options = {};
        if (offset && limit) {
            options = {
                offset,
                limit
            }
        }

        return (
            await Model.findAll({
                where: {
                    status
                },
                order: orderBy,
                options
            })
        )
    },

    async getById(id){
        return await Model.findByPk(id)
    },


    async upVote(id){
        const question = await Model.findByPk(id);
        return (
            await question.increment('upVotes', { 
                where: {
                    id
                }
            })
        )
    },

    async downVote(id){
        const question = await Model.findByPk(id);
        return (
            await question.increment('downVotes', { 
                where: {
                    id
                }
            })
        )
    },

    async create(header, content){
        return (
            await Model.create({
                header,
                content
            })
        )
    },

    async destroy(id){
        const question = await Model.findByPk(id);
        return await question.destroy();
    },

    async updateStatus(id, status){
        const question = await Model.findByPk(id);
        return (
            await question.update({ 
                status
            })
        )
    }
}

module.exports = Question;