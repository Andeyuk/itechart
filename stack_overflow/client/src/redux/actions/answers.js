import voteActionsGenerator from '../generators/actions/vote';

const VoteActions = voteActionsGenerator('answers');

const ownAction = () => {
    return {
        type: 'TEST_ANSWERS'
    }
}

export default  {
    ownAction,
    ...VoteActions
}