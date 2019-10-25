
import createVoteReducer from '../generators/enchanters/vote';
import actionTypes from '../constants/questions';
import {withEnchanter} from '../utils';

const initialState = {
    lol: 1
}


const questionReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.test: {
            return {...state, test: 'test triggered'}
        }
        default: return state;
    }
}

const enc = withEnchanter(questionReducer, createVoteReducer('questions'))

export default enc;