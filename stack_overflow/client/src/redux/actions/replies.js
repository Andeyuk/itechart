import voteActionsGenerator from '../generators/actions/vote';
import loadActionsGenerator from '../generators/actions/load';
import replyTypes from '../constants/replies';

import Services from '../../services/requestService';

const VoteActions = voteActionsGenerator('answers');
//const LoadActions = loadActionsGenerator('answers');



const setReplies = (replies) => {
    return{
        type: replyTypes.SET_REPLIES,
        payload: replies
    }
}

const replyAnswerRequest = (path) => (questionId, content, parentId, UserId) => {
    return {
        type: replyTypes.REPLY_ANSWER_REQUEST,
        payload:{
            parentId,
            questionId
        },
        promice: () => Services.post(path)({questionId, content, parentId, UserId})
    }
}

const replyAnswerSuccess = (response, id) => {
    return {
        type: replyTypes.REPLY_ANSWER_SUCCESS,
        payload: response,
        id
    }
}

const replyAnswerFail = (error, id) => {
    return {
        type: replyTypes.REPLY_ANSWER_FAIL,
        error,
        id
    }
}


export default  {
    replyAnswerRequest: replyAnswerRequest('answers'),
    replyAnswerSuccess,
    replyAnswerFail,
    setReplies,
    ...VoteActions,
//    ...LoadActions,
}
