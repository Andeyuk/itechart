
import {
    SET_CAROUSEL_SIZE,
    SET_CURRENT
} from '../constants';


const initialState = {
    size: 0,
    current: 0,
}




export function carouselReducer(state = initialState, action){
    switch (action.type){
        case SET_CAROUSEL_SIZE :{
            return {...state, size: action.payload};
        }

        case SET_CURRENT:{
            return {...state, current: action.payload};
        }

        default: return state;
    }
}