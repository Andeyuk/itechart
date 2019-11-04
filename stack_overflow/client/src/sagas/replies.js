import { takeEvery, fork , take, put} from 'redux-saga/effects';
import Actions from '../redux/actions/replies';
import ActionTypes from '../redux/constants/replies';
import AnswerActions from '../redux/actions/answers';
import UserActions from '../redux/actions/users';

import answerService from '../services/answerService';

function* testPattern(){
    yield take('VOTE_UP_REQUEST', function* (action) {

        try {
            const response = yield action.promice();
            
        } catch(error) {
            console.log(error.response)
        }
    })
}


function* replyAnswer(){
    yield takeEvery(ActionTypes.CREATE_REPLY_REQUEST, function* (action) {
        try {
            const response = yield action.promice();
            console.log(response);
            const normalized = answerService.normalizeEntity(response.data);
            const {answers, replies, users} = normalized.entities

            yield put(UserActions.setUsers(users));
            yield put(Actions.createReplySuccess(replies, response.data.id));
            answerService.isAnswer(response.data) 
                ?  yield put(AnswerActions.setAnswers(answers))
                :  yield put(Actions.setReplies(answers))

            
            

        } catch(error) {
            console.log(error);
            yield put(Actions.createReplyFail(error.response, action.payload.parentId))
        }
    })
}



export default function* root() {
    yield fork(replyAnswer)
}