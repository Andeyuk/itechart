import axios from 'axios';
import config from '../config';

const RequestService = {
    load: (name) => axios.get(`${config.server.host}/${name}`),
    upVote: (name, id) => axios.put(`${config.server.host}/${name}/${id}/upvote`),
    downVote: (name, id) => axios.put(`${config.server.host}/${name}/${id}/downvote`),
}

export default RequestService;