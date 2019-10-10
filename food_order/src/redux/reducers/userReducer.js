import {AuthAPI} from '../../API/AuthAPI'
import {
    TOGGLE_VISIBILITY,
    HIDE_USER,
    SET_USER_NAME,
    SET_USER_EMAIL,
    SET_ORDER_HISTORY,
    LOGOUT,
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
} from '../constants'

const {email, username} = AuthAPI.getUser() || {};

const initialState = {
    isVisible: false,
    userName: username,
    userEmail: email,
    orderHistory: {},
}


export function userReducer(state = initialState, action){
    switch (action.type){
        case TOGGLE_VISIBILITY: {
                return {...state, isVisible: !state.isVisible}
        }
        case SET_USER_NAME: {
            if (state.userName !== action.payload)
                return {...state, userName: action.payload}
            return state;
        }
        case SET_USER_EMAIL: {
            if (state.userEmail !== action.payload)
                return {...state, userEmail: action.payload}
            return state;
        }
        
        case SET_ORDER_HISTORY: {
            return {...state, orderHistory: action.payload}
        }

        case FETCH_LOGIN_REQUEST: {
            return {
                ...state, 
                status: 'fetch', 
                statusText: null, 
            }
        }

        case FETCH_LOGIN_SUCCESS: {
            return {
                ...state, 
                status: 'success', 
                statusText: action.payload.response, 
            }
        }
        
        case FETCH_LOGIN_FAILURE: {
            return {
                ...state, 
                status: 'error', 
                statusText: action.payload.error, 
            }
        }

        case LOGOUT: {
            AuthAPI.logout();
            return {...state, userName: null, userEmail: null}
        }

        case HIDE_USER: {
            return {...state, isVisible: false}
        }
        default: return state;
    }
}