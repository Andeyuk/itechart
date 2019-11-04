
import createVoteReducer from '../generators/enchanters/vote';

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
        case actionTypes.CREATE_ANSWER_SUCCESS: {
            return {...state, ...action.payload}
        }
        case actionTypes.LOAD_SUCCESS:
        case actionTypes.LOAD_ONE_SUCCESS: {
            return {...state, ...action.payload.byId}
        }

        default: return state;
    }
}


const asyncReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.CREATE_ANSWER_REQUEST: {
            return {
                ...state,
                [action.payload.questionId]: {
                    status: 'loading',

                }
            }
        }
        case actionTypes.CREATE_ANSWER_SUCCESS: {
            return {
                ...state,
                [action.id]: {
                    status: 'loaded'
                }
            }
        }
        case actionTypes.CREATE_ANSWER_FAIL: {
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
    byId: answersReducer,
    status: asyncReducer,
})