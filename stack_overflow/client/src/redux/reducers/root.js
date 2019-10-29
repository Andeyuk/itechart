
import { combineReducers }  from 'redux';
import questionsReducer from './questions';
import answersReducer from './answers'
import replyReducer from './replies';

const rootReducer = combineReducers({
    questions: questionsReducer,
    answers: answersReducer,
    replies: replyReducer
})

export default rootReducer;