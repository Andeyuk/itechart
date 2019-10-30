import axios from 'axios';
import config from '../config';
import {schema, normalize} from 'normalizr';

const QuestionService = {
    load:  () => axios.get(`${config.server.host}/questions`),
    upVote:  (id) => axios.put(`${config.server.host}/questions/${id}/upvote`),
    downVote: (id) => axios.put(`${config.server.host}/questions/${id}/downvote`),
    normalizeArray: (array) => {
        const questionSchema = new schema.Entity('byId');
        const questionListSchema = [questionSchema];
        const normalizedData = normalize(array, questionListSchema);
        const formattedData = {
            byId: normalizedData.entities.byId,
            Ids: normalizedData.result,
        }
        return formattedData;
    },
    normalizeEntity: (array) => {
        const answerReply = new schema.Entity('replies')
        const answer = new schema.Entity('answers', {
            reply: [answerReply]
        });
        const question = new schema.Entity('question', {
            answers: [answer]
        });
        const normalizedData = normalize(array, question);
        return normalizedData;
    }
}

export default QuestionService;