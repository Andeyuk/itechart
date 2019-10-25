
import createVoteReducer from '../generators/enchanters/vote';
import actionTypes from '../constants/answers';
import {withEnchanter} from '../utils';

const initialState = {
    lol: 2
}


const answersReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.test: {
            return {...state, test: 'test triggered'}
        }
        default: return state;
    }
}

const enc = withEnchanter(answersReducer, createVoteReducer('answers'))

export default enc;