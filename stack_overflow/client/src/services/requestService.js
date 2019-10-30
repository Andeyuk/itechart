import axios from 'axios';
import config from '../config';
import authService from './authService';


const RequestService = {
    load: (name) => (id) => authService.axios('get', `${config.server.host}/${name}/${id ? id : ''}`),
    upVote:  (name, id) => authService.axios('put', `${config.server.host}/${name}/${id}/upvote`),
    downVote: (name, id) => authService.axios('put', `${config.server.host}/${name}/${id}/downvote`),
}

export default RequestService;