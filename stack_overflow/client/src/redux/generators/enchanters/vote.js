import VoteTypes from '../constants/vote';
import {typeGenerator} from '../../utils';


const createVoteEnchanter = (name) => (state, action) => {
    switch (action.type){
        case typeGenerator(VoteTypes.VOTE_DOWN, name): {
            return {
                ...state,
                downVotes: (state.downVotes || 0) + 1
            }
        }
        case typeGenerator(VoteTypes.VOTE_UP, name): {
            return {
                ...state,
                upVotes: (state.upVotes || 0) + 1
            }
        }
    }
    //no default because it won't be used on it own
}

export default createVoteEnchanter;