
import createVoteReducer from '../generators/enchanters/vote';
import actionTypes from '../constants/replies';

import {withEnchanter} from '../utils';

const initialState = {
    byId:{
        
    }
}


const repliesReducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.SET_REPLIES: {
            return {...state, ...action.payload}
        }

        default: return state;
    }
}


export default withEnchanter(repliesReducer, createVoteReducer('answers'))