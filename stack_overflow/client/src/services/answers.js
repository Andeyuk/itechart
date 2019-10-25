import axios from 'axios';
import config from '../config';

const AnswersService = {
    load: () => axios.get(`${config.server.host}/answers`),
    upVote: (id) => axios.put(`${config.server.host}/answers/${id}/upvote`),
    downVote: (id) => axios.put(`${config.server.host}/answers/${id}/downvote`),
}

export default AnswersService;