
import { combineReducers }  from 'redux';
import questionsReducer from './questions';
import answersReducer from './answers'

const rootReducer = combineReducers({
    questions: questionsReducer,
    answers: answersReducer
})

export default rootReducer;