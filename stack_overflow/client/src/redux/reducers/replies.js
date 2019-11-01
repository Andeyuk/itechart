import {combineReducers} from 'redux';

import createVoteReducer from '../generators/enchanters/vote';
import actionTypes from '../constants/replies';

import {withEnchanter} from '../utils';



const repliesReducer = (state = {}, action) => {
    switch(action.type){

        case actionTypes.SET_REPLIES: {
            return {...state, ...action.payload}
        }
        case actionTypes.REPLY_ANSWER_SUCCESS: {
            return {...state, ...action.payload}
        }

        default: return state;
    }
}


const asyncReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.REPLY_ANSWER_REQUEST: {
            return {
                ...state,
                [action.payload.parentId]: {
                    status: 'loading',

                }
            }
        }
        case actionTypes.REPLY_ANSWER_SUCCESS: {
            return {
                ...state,
                [action.id]: {
                    status: 'loaded'
                }
            }
        }
        case actionTypes.REPLY_ANSWER_FAIL: {
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



export default combineReducers({
    byId: withEnchanter(repliesReducer, createVoteReducer('answers')),
    status: asyncReducer,
})