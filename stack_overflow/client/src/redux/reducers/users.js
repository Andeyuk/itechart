import {combineReducers} from 'redux';


import actionTypes from '../constants/users';



const usersReducer = (state = {}, action) => {
    switch(action.type){

        case actionTypes.SET_USERS: {
            return {...state, ...action.payload}
        }
        case actionTypes.REPLY_ANSWER_SUCCESS: {
            return {...state, [action.payload.id]: action.payload}
        }

        default: return state;
    }
}


const asyncReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.REPLY_ANSWER_REQUEST: {
            return {
                ...state,
                [`${action.payload.parentId}-${action.payload.questionId}`]: {
                    status: 'loading'
                }
            }
        }
        case actionTypes.REPLY_ANSWER_SUCCESS: {
            return {
                ...state,
                [`${action.payload.parentId}-${action.payload.questionId}`]: {
                    status: 'loaded'
                }
            }
        }
        case actionTypes.REPLY_ANSWER_FAIL: {
            return {
                ...state,
                [`${action.payload.parentId}-${action.payload.questionId}`]: {
                    status:'error',
                    message: action.error.statusText,
                }
            }
        }
        default: return state;
    }
}


export default combineReducers({
    byId: usersReducer,
    status: asyncReducer,
})