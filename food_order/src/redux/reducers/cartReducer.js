import {keys} from '../../config'
import {
    ADD_TO_CART,
    TOGGLE_CART_VISIBILITY,
    REMOVE_FROM_CART,
    SET_ITEM_AMOUNT,
    SAVE_PURCHASES,
    CLEAR_PURCHASES,
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    FETCH_CART_FAILURE,
    HIDE_CART,
} from '../constants'

const SESSION_STORAGE_KEY = keys.SESSION_STORAGE_CART_KEY;

const initialState = {
    purchases: JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY)) || [],
    isVisible: false,
    status: null,
    statusText: null,
}


export function cartReducer(state = initialState, action){
    switch (action.type){
        case ADD_TO_CART:{
            
            if(!action.payload.amount) return state;

            let itemIndex = state.purchases.findIndex(el => el.id === action.payload.id);
            let newPurchases;

            if (itemIndex >= 0){
                newPurchases = [...state.purchases]
                newPurchases[itemIndex] = action.payload;
            } 
            else newPurchases = state.purchases.concat(action.payload);

            return {...state, purchases: newPurchases} 
        }

        case TOGGLE_CART_VISIBILITY:
            return {...state, isVisible: !state.isVisible}

        case HIDE_CART:
            return {...state, isVisible: false}
    

        case REMOVE_FROM_CART:{
            let itemInd = state.purchases.find(item=>item.id === action.payload);

            if (itemInd < 0)
                return state
            
            let newPurchases = [...state.purchases];
            newPurchases.splice(itemInd, 1);

            return {...state, purchases: newPurchases}
        }

        case  SET_ITEM_AMOUNT:{
            const o = {...state};
            o.purchases.find(el=>el.id === action.id).amount = action.payload;
            return o;
        }

        case SAVE_PURCHASES:{
            sessionStorage.setItem(
                SESSION_STORAGE_KEY, 
                JSON.stringify(state.purchases));
            return state;
        }

        case CLEAR_PURCHASES:{
            sessionStorage.removeItem(
                SESSION_STORAGE_KEY);
            return {...state, purchases: {}};
        }

        case FETCH_CART_REQUEST: {
            return {
                ...state, 
                status: 'fetch', 
                statusText: null, 
            }
        }

        case FETCH_CART_SUCCESS: {
            return {
                ...state,
                status: 'success',
                statusText: action.payload.response
            }
        }

        case FETCH_CART_FAILURE: {
            return {
                ...state,
                status: 'error',
                statusText: action.payload.error,
            }
        }

        default: return state;
    }
}