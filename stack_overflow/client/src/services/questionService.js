import authService from './authService';
import {schema, normalize} from 'normalizr';

const QuestionService = {
    normalizeArray: (array) => {
        const user = new schema.Entity('users');
        const questionSchema = new schema.Entity('questions',{
            user,
        });
        const questionListSchema = [questionSchema];
        return normalize(array, questionListSchema)
    },
    normalizeEntity: (array) => {
        const user = new schema.Entity('users');
        const answerReply = new schema.Entity('replies',{
            user,
        });
        const answer = new schema.Entity('answers', {
            reply: [answerReply],
            user,
        });
        const question = new schema.Entity('question', {
            answers: [answer],
            user
        });
        const normalizedData = normalize(array, question);
        return normalizedData;
    },
    load: (id) => authService.axios('get', `questions/${id ? id : ''}`),
    loadOne:  (id) => authService.axios('get', `questions/${id ? id : ''}`),
    post: (data) => authService.axios('post', 'questions', data),
    upVote:  (id) => authService.axios('put', `/questions/${id}/upvote`),
    downVote: (id) => authService.axios('put', `/questions/${id}/downvote`),

}

export default QuestionService;