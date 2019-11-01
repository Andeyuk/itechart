import voteActionsGenerator from '../generators/actions/vote';
import loadActionsGenerator from '../generators/actions/load';
import questionTypes from '../constants/questions';

const VoteActions = voteActionsGenerator('questions');
const LoadActions = loadActionsGenerator('questions');

const setQuestions = (questions) => {
    return {
        type: questionTypes.SET_QUESTIONS,
        payload: questions
    }
}

export default  {
    setQuestions,
    ...VoteActions,
    ...LoadActions
}
