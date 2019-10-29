
import { combineReducers } from 'redux';

import createVoteReducer from '../generators/enchanters/vote';
import createLoadEnchanter from '../generators/enchanters/load';

import actionTypes from '../constants/questions';
import {withEnchanter} from '../utils';

const initialState = {
    byId:{
        
    }
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

export default withEnchanter(enc, createLoadEnchanter('questions'));
