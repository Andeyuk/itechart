import voteActionsGenerator from '../generators/actions/vote';
import loadActionsGenerator from '../generators/actions/load';
import answerTypes from '../constants/answers';

import Services from '../../services/requestService';

const VoteActions = voteActionsGenerator('answers');
const LoadActions = loadActionsGenerator('answers');


const setAnswers = (answers) => {
    return {
        type: answerTypes.SET_ANSWERS,
        payload: answers
    }
}

const answerQuestionRequest = (path) => (questionId, content, userId) => {
    return {
        type: answerTypes.ANSWER_QUESTION_REQUEST,
        payload:{
            questionId
        },
        promice: () => Services.post(path)({questionId, content, userId})
    }
}


const answerQuestionSuccess = (response, id) => {
    return {
        type: answerTypes.ANSWER_QUESTION_SUCCESS,
        payload: response,
        id
    }
}

const answerQuestionFail = (error, id) => {
    return {
        type: answerTypes.ANSWER_QUESTION_FAIL,
        error,
        id
    }
}

export default  {
    answerQuestionRequest: answerQuestionRequest('answers'),
    answerQuestionSuccess,
    answerQuestionFail,
    setAnswers,
    ...VoteActions,
    ...LoadActions,
}


