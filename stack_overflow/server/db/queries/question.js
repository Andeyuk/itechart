

function bindQueriesToModel(Model){
    Model.getAll = function({status='active', orderBy='id', offset, limit}){
        let options = {};
        if (offset && limit) {
            options = {
                offset,
                limit
            }
        }

        return (
            this.findAll({
                where: {
                    status
                },
                order: orderBy,
                options

            })
        )
    }

    Model.getQuestionById = function(id){
        return this.findByPk(id)
    }


    Model.upVoteQuetion = async function(id){
        const question = await this.findByPk(id);
        return (
            await question.increment('upVotes', { 
                where: {
                    id
                }
            })
        )
    }

    Model.downVoteQuetion = async function(id){
        const question = await this.findByPk(id);
        return (
            await question.increment('downVotes', { 
                where: {
                    id
                }
            })
        )
    }

    Model.createQuestion = function(header, content){
        this.create({
            header,
            content
        })
    }

    Model.destroyQuestion = async function(id){
        const question = await this.findByPk(id);
        return await question.destroy();
    }

    Model.updateStatus = async function(id, status){
        const question = await this.findByPk(id);
        return (
            await question.update({ 
                status
            })
        )
    }
}

module.exports = bindQueriesToModel;