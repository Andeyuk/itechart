
import createVoteReducer from '../generators/enchanters/vote';
import createLoadEnchanter from '../generators/enchanters/load';
import {combineReducers } from 'redux';
import actionTypes from '../constants/answers';

import {withEnchanter} from '../utils';

const initialState = {

}


const answersReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_ANSWERS: {
            return {...state, ...action.payload}
        }
        case actionTypes.ANSWER_QUESTION_SUCCESS: {
            return {...state, ...action.payload}
        }

        default: return state;
    }
}


const asyncReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.ANSWER_QUESTION_REQUEST: {
            return {
                ...state,
                [action.payload.parentId]: {
                    status: 'loading',

                }
            }
        }
        case actionTypes.ANSWER_QUESTION_SUCCESS: {
            return {
                ...state,
                [action.id]: {
                    status: 'loaded'
                }
            }
        }
        case actionTypes.ANSWER_QUESTION_FAIL: {
            return {
                ...state,
                [action.id]: {
                    status: 'error',
                    message: action.error.statusText,
                }
            }
        }
        default: return state;
    }
}



const enc = withEnchanter(answersReducer, createVoteReducer('answers'))

export default combineReducers({
    byId: withEnchanter(enc, createLoadEnchanter('answers')),
    status: asyncReducer,
})