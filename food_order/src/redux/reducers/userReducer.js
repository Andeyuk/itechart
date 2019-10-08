import {AuthAPI} from '../../API/AuthAPI'

const {email, username} = AuthAPI.getUser() || {};

const initialState = {
    isVisible: false,
    userName: username,
    userEmail: email,
    orderHistory: {},
}

const TOGGLE_VISIBILITY = 'TOGGLE_USER_VISIBILITY';
const SET_USER_NAME = 'SET_USER_NAME';
const SET_USER_EMAIL = 'SET_USER_EMAIL';
const SET_ORDER_HISTORY = 'SET_ORDER_HISTORY';


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
        default: return state;
    }
}