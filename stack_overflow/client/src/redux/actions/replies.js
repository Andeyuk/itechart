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

const replyAnswerRequest = (path) => (QuestionId, content, parentId, UserId) => {
    return {
        type: replyTypes.REPLY_ANSWER_REQUEST,
        payload:{
            parentId,
            QuestionId
        },
        promice: () => Services.post(path)({QuestionId, content, parentId, UserId})
    }
}

const replyAnswerSuccess = (response) => {
    return {
        type: replyTypes.REPLY_ANSWER_SUCCESS,
        payload: response
    }
}

const replyAnswerFail = (error) => {
    return {
        type: replyTypes.REPLY_ANSWER_FAIL,
        error
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
