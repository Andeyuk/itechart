import { takeEvery, fork , take, put} from 'redux-saga/effects';
import Actions from '../redux/actions/replies';
import AnswerActions from '../redux/actions/answers';

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
    yield takeEvery(Actions.replyAnswerRequest().type, function* (action) {
        try {
            const response = yield action.promice();
            console.log(response);
            const normalized = answerService.normalizeEntity(response.data);
            const {answers, replies} = normalized.entities

            yield put(Actions.replyAnswerSuccess(replies, response.data.id));
            answerService.isAnswer(response.data) 
                ?  yield put(AnswerActions.setAnswers(answers))
                :  yield put(Actions.setReplies(answers))

            
            

        } catch(error) {
            console.log(error);
            yield put(Actions.replyAnswerFail(error.response, action.payload.parentId))
        }
    })
}



export default function* root() {
    yield fork(replyAnswer)
}