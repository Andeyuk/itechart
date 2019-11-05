import { takeEvery, fork , take, put, all} from 'redux-saga/effects';
import AnswerActions from '../redux/actions/answers';
import ActionTypes from '../redux/constants/answers';
import ReplyActions from '../redux/actions/replies';
import QuestionActions from '../redux/actions/questions';
import UserActions from '../redux/actions/users';

import answerService from '../services/answerService';
import questionService from '../services/questionService';

function* voteUp(){
    yield take(ActionTypes.VOTE_UP_REQUEST, function* (action) {
        try {
            console.log('fired')
            const response = yield answerService.voteUp(action.payload.id);
            yield put(AnswerActions.voteUpSuccess(response.data));
        } catch(error) {
            console.log(error.response)
        }
    })
}


function* answerQuestion(){
    yield takeEvery(ActionTypes.CREATE_ANSWER_REQUEST, function* (action) {
        try {
            const response = yield action.promice();
            console.log(response);
            const normalized = questionService.normalizeEntity(response.data);
            const {entities: {question, answers, replies, users}} = normalized;

            yield put(UserActions.setUsers(users));
            yield put(ReplyActions.setReplies(replies));
            yield put(AnswerActions.setAnswers(answers));
            yield put(QuestionActions.setQuestions(question));

            yield put(AnswerActions.createAnswerSuccess(replies, response.data.id));     

        } catch(error) {
            console.log(error);
            yield put(AnswerActions.createAnswerFail(error.response, action.payload.questionId))
        }
    })
}



export default function* root() {
    yield fork(answerQuestion)
    yield fork(voteUp)
}