import { takeEvery, fork , take, put} from 'redux-saga/effects';
import Actions from '../redux/actions/questions';
import AnswerActions from '../redux/actions/answers';
import ReplyActions from '../redux/actions/replies';
import Services from '../services/question';
import { batch } from 'react-redux';

function* testPattern(){
    yield take('VOTE_UP_REQUEST', function* (action) {

        try {
            const response = yield action.promice();
            
        } catch(error) {
            console.log(error.response)
        }
    })
}


function* loadQuestions(){
    yield takeEvery(Actions.load().type, function* (action) {
        try {
            const response = yield action.promice();
            console.log(response);
            const normalized = Services.normalizeArray(response.data);
            yield put(Actions.loadSuccess(normalized));
        } catch(error) {
            console.log(error);
            yield put(Actions.loadFail(error))
        }
    })
}


function* loadOneQuestion(){
    yield takeEvery(Actions.loadOne().type, function* (action) {

        try {
            const response = yield action.promice();
            console.log(response);
            const normalized = Services.normalizeEntity(response.data);
            console.log(normalized);
            const {entities: {question, answers, replies}} = normalized;

            yield put(ReplyActions.setReplies(replies))
            yield put(AnswerActions.setAnswers(answers))
            yield put(Actions.loadOneSuccess(question));
            
           
        } catch(error) {
            console.log(error);
            yield put(Actions.loadOneFail(error))
        }
    })
}

export default function* root() {
    yield fork(loadQuestions)
    yield fork(loadOneQuestion)
}