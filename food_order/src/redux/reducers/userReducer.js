import {AuthAPI} from '../../API/AuthAPI'

const user = AuthAPI.getUser();


const initialState = {
    isVisible: false,
    username: user ? user.username : null,
}

const TOGGLE_VISIBILITY = 'TOGGLE_USER_VISIBILITY';
const SET_USERNAME = 'SET_USERNAME';


export function userReducer(state = initialState, action){
    switch (action.type){
        case TOGGLE_VISIBILITY:
                return {...state, isVisible: !state.isVisible}
        case SET_USERNAME:{
            return {...state, username: action.payload}
        }
        default: return state;
    }
}