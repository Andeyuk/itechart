
import { combineReducers }  from 'redux';
import questionsReducer from './questions';
import answersReducer from './answers'
import replyReducer from './replies';
import authReducer from './auth';

const rootReducer = combineReducers({
    questions: questionsReducer,
    answers: answersReducer,
    replies: replyReducer,
    auth: authReducer
})

export default rootReducer;