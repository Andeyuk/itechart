import axios from 'axios';
import config from '../config';

const RequestService = {
    load: (name) => (id) => axios.get(`${config.server.host}/${name}/${id ? id : ''}`),
    upVote:  (name, id) => axios.put(`${config.server.host}/${name}/${id}/upvote`),
    downVote: (name, id) => axios.put(`${config.server.host}/${name}/${id}/downvote`),
}

export default RequestService;