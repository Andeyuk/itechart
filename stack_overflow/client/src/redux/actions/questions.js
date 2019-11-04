import voteActionsGenerator from '../generators/actions/vote';
import loadActionsGenerator from '../generators/actions/load';
import questionTypes from '../constants/questions';

const VoteActions = voteActionsGenerator('questions');
const LoadActions = loadActionsGenerator(questionTypes);

const setQuestions = (byId, allIds = []) => {
    return {
        type: questionTypes.SET_QUESTIONS,
        payload: {
            byId,
            allIds
        }
    }
}

export default  {
    setQuestions,
    ...VoteActions,
    ...LoadActions
}
