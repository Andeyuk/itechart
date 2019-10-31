
import createVoteReducer from '../generators/enchanters/vote';
import createLoadEnchanter from '../generators/enchanters/load';

import actionTypes from '../constants/answers';

import {withEnchanter} from '../utils';

const initialState = {
    byId:{

    }
}


const answersReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.test: {
            return {...state, test: 'test triggered'}
        }

        case actionTypes.SET_ANSWERS: {
            return {...state, ...action.payload}
        }



        default: return state;
    }
}



const enc = withEnchanter(answersReducer, createVoteReducer('answers'))

export default withEnchanter(enc, createLoadEnchanter('answers'))