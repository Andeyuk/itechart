import axios from 'axios';
import config from '../config';
import authService from './authService';


const RequestService = {
    load: (path) => (id) => authService.axios('get', `${path}/${id ? id : ''}`),
    post: (path) => (data) => authService.axios('post', path, data),
    upVote:  (path, id) => authService.axios('put', `/${path}/${id}/upvote`),
    downVote: (path, id) => authService.axios('put', `/${path}/${id}/downvote`),
}

export default RequestService;