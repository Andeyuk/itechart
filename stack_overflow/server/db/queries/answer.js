

function bindQueriesToModel(Model){
    Model.upVoteAnswer = async function(id){
        const answer = await this.findByPk(id);
        return (
            await answer.increment('upVotes', { 
                where: {
                    id
                }
            })
        )
    }

    Model.downVoteAnswer = async function(id){
        const answer = await this.findByPk(id);
        return (
            await answer.increment('downVotes', { 
                where: {
                    id
                }
            })
        )
    }
}

module.exports = bindQueriesToModel;