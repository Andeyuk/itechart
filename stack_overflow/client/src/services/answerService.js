import authService from './authService';

import {schema, normalize} from 'normalizr';

const AnswerService = {
    normalizeEntity: (entity) => {
        const user = new schema.Entity('user')
        const answerReply = new schema.Entity('replies', {
            user
        })
        const answer = new schema.Entity('answers', {
            reply: [answerReply],
            user,
        });

        const normalizedData = normalize(entity, [answer]);
        return normalizedData;
    },
    normalizeSimpleEntity: (entity) => {
        const user = new schema.Entity('user')
        const answer = new schema.Entity('answer', {
            user
        });
        const normalizedData = normalize(entity, answer);
        return normalizedData;
    },
    isAnswer(response){
        return response.parentId ? false : true
    },
    load: (id) => authService.axios('get', `answers/${id ? id : ''}`),
    loadByQuestionId: (id) => authService.axios('get', `questions/${id}/answers`),
    loadOne:  (id) => authService.axios('get', `answers/${id ? id : ''}`),
    post: (data) => authService.axios('post', 'answers', data),
    voteUp:  (id) => authService.axios('put', `answers/${id}/upvote`),
    voteDown: (id) => authService.axios('put', `answers/${id}/downvote`),
}

export default AnswerService;