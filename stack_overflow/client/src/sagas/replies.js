import { takeEvery, fork , take, put} from 'redux-saga/effects';
import Actions from '../redux/actions/replies';
import AnswerActions from '../redux/actions/replies';


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
            const reply = response.data;
            yield put(Actions.replyAnswerSuccess(reply));

        } catch(error) {
            console.log(error);
            yield put(Actions.replyAnswerFail(error.response))
        }
    })
}



export default function* root() {
    yield fork(replyAnswer)
}