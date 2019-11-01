
import {schema, normalize} from 'normalizr';

const AnswerService = {
    normalizeEntity: (entity) => {
        const answerReply = new schema.Entity('replies')
        const answer = new schema.Entity('answers', {
            reply: [answerReply]
        });
        const normalizedData = normalize(entity, answer);
        return normalizedData;
    },
    isAnswer(response){
        return response.parentId ? false : true
    }
}

export default AnswerService;