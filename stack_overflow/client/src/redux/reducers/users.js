
import actionTypes from '../constants/user';

const initialState = {

}


const userReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOGIN_REQUEST: {
            return {...state, status: 'loading'}
        }
        case actionTypes.LOGIN_SUCCESS: {
            return {...state, status: 'success'}
        }
        case actionTypes.LOGIN_FAIL: {

            return {
                ...state,
                status: 'error',
                message: action.error.statusText
            }
        }   
        default: return state;
    }
}