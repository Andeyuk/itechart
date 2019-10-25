import voteActionsGenerator from '../generators/actions/vote';

const VoteActions = voteActionsGenerator('answers');

const ownAction = () => {
    return {
        type: 'TEST_QUESTIONS'
    }
}

export default  {
    ownAction,
    ...VoteActions
}