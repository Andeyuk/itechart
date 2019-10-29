import { typeGenerator, makeActionCreators} from "../../utils";
import actionTypes from '../constants/vote';
import RequestService from '../../../services/requestService';

const voteUp = (name) => (id) => {
    return {
        type: typeGenerator(actionTypes.VOTE_UP, name),
        promice: RequestService.upVote(name, id),
        payload: {
            id
        }
    }
}

const voteDown = (name) => (id) => {
    return {
        type: typeGenerator(actionTypes.VOTE_DOWN, name),
        promice: RequestService.downVote(name, id),
        payload: {
            id
        }
    }
}

const voteActionsGenerator = (name) => makeActionCreators(
    name,
    {
        voteUp,
        voteDown
    }
)

export default voteActionsGenerator;