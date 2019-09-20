const SESSION_STORAGE_KEY = 'food_order';

const initialState = {
    purchases: JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY)) || [],
    isVisible: false,
}

const ADD_TO_CART = 'ADD_TO_CART';
const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SET_ITEM_AMOUNT = 'SET_ITEM_AMOUNT';
const SAVE_PURCHASES = 'SAVE_PURCHASES';
const CLEAR_PURCHASES = 'CLEAR_PURCHASES';


export function cartReducer(state = initialState, action){
    switch (action.type){
        case ADD_TO_CART:{
            let itemIndex = state.purchases.findIndex(el => el.id === action.payload.id);
            let newPurchases;

            if (itemIndex >= 0){
                newPurchases = [...state.purchases]
                newPurchases[itemIndex] = action.payload;
            } 
            else newPurchases = state.purchases.concat(action.payload);

            return {...state, purchases: newPurchases} 
        }

        case TOGGLE_VISIBILITY:
            return {...state, isVisible: !state.isVisible}


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
            return state;
        }

        default: return state;
    }
}