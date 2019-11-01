import { takeEvery, fork , take, put} from 'redux-saga/effects';
import Actions from '../redux/actions/answers';
import AnswerActions from '../redux/actions/answers';
import ReplyActions from '../redux/actions/replies';
import QuestionActions from '../redux/actions/questions';

import answerService from '../services/answerService';
import questionService from '../services/question';

function* testPattern(){
    yield take('VOTE_UP_REQUEST', function* (action) {

        try {
            const response = yield action.promice();
            
        } catch(error) {
            console.log(error.response)
        }
    })
}


function* answerQuestion(){
    yield takeEvery(Actions.answerQuestionRequest().type, function* (action) {
        try {
            const response = yield action.promice();
            console.log(response);
            const normalized = questionService.normalizeEntity(response.data);
            const {entities: {question, answers, replies}} = normalized;

            yield put(ReplyActions.setReplies(replies))
            yield put(AnswerActions.setAnswers(answers))
            yield put(QuestionActions.setQuestions(question));

            yield put(Actions.answerQuestionSuccess(replies, response.data.id));     

        } catch(error) {
            console.log(error);
            yield put(Actions.answerQuestioFail(error.response, action.payload.questionId))
        }
    })
}



export default function* root() {
    yield fork(answerQuestion)
}