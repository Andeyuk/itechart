const initialState = {
    purchases: []
}

const ADD_TO_CART = 'ADD_TO_CART';

export function cartReducer(state = initialState, action){
    switch (action.type){
        case ADD_TO_CART:
            return {...state, purchases: state.purchases.concat(action.payload)} 
        default: return state;
    }
}