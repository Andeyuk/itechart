import authService from './authService';

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
    },
    load: (id) => authService.axios('get', `answers/${id ? id : ''}`),
    loadOne:  (id) => authService.axios('get', `answers/${id ? id : ''}`),
    post: (data) => authService.axios('post', 'answers', data),
    voteUp:  (id) => authService.axios('put', `/answers/${id}/upvote`),
    voteDown: (id) => authService.axios('put', `/answers/${id}/downvote`),
}

export default AnswerService;