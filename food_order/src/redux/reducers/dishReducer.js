
const initialState = {
    dishes:[],
}

const CHOOSE_DISH = 'CHOOSE_DISH';
const SET_DISH_AMOUNT = 'SET_DISH_AMOUNT';
const SET_DISHES = 'SET_DISHES';

export function dishReducer(state = initialState, action){
    switch (action.type){
        case SET_DISHES:
            return {...state, dishes: action.payload}
        case  CHOOSE_DISH:
            return {...state, dishID: action.payload}
        case  SET_DISH_AMOUNT:
            const o = {...state};
            o.dishes.find(el=>el.id === state.dishID).amount = action.payload;
            return o;
        default: return state;
    }
}