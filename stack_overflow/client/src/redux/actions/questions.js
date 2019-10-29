import voteActionsGenerator from '../generators/actions/vote';
import loadActionsGenerator from '../generators/actions/load';

const VoteActions = voteActionsGenerator('questions');
const LoadActions = loadActionsGenerator('questions');

const ownAction = () => {
    return {
        type: 'TEST_QUESTIONS'
    }
}

export default  {
    ownAction,
    ...VoteActions,
    ...LoadActions
}
