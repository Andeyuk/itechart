import voteActionsGenerator from '../generators/actions/vote';
import loadActionsGenerator from '../generators/actions/load';
import replyTypes from '../constants/replies';

const VoteActions = voteActionsGenerator('answers');
//const LoadActions = loadActionsGenerator('answers');



const setReplies = (replies) => {
    return{
        type: replyTypes.SET_REPLIES,
        payload: replies
    }
}

export default  {
    setReplies,
    ...VoteActions,
//    ...LoadActions,
}
