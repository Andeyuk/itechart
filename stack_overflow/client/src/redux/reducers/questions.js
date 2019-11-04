
import { combineReducers } from 'redux';

import createVoteReducer from '../generators/enchanters/vote';
import createLoadReducer from '../generators/enchanters/load';

import actionTypes from '../constants/questions';
import {withEnchanter} from '../utils';

const initialState = {

}



const questionReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_QUESTIONS: 
        case actionTypes.LOAD_SUCCESS:
        case actionTypes.LOAD_ONE_SUCCESS: {
            return {...state, ...action.payload.byId}
        }
        default: return state;
    }
}

const allQuestionReducer = (state = [], action) => {
    switch(action.type){
        case actionTypes.LOAD_SUCCESS:
        case actionTypes.SET_QUESTIONS: {
            console.log(action.payload);
            return state.filter(id => !action.payload.allIds.includes(id)).concat(action.payload.allIds)
        }
        default: return state;
    }
}


const enc = withEnchanter(questionReducer, createVoteReducer('questions'))

export default combineReducers({
    byId: questionReducer,
    allIds: allQuestionReducer,
    status: createLoadReducer(actionTypes)
})