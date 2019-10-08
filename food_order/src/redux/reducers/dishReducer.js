
const initialState = {
    dishes:[],
    dishesAmount: {},
    dishesSelected: {},
}

const CHOOSE_DISH = 'CHOOSE_DISH';
const SET_DISH_AMOUNT = 'SET_DISH_AMOUNT';
const SET_DISHES = 'SET_DISHES';

export function dishReducer(state = initialState, action){
    switch (action.type){
        case SET_DISHES:
            return {...state, dishes: action.payload.entities.dishes, IDs: action.payload.result}
        case  CHOOSE_DISH:{
            const {id} = action.payload;
            const selected = state.dishesSelected[id];
            const newSelected = {...{}, [id]: !selected}
            return {...state, dishesSelected: newSelected}
        }
        case  SET_DISH_AMOUNT: {
            const o = {...state};
            o.dishesAmount[action.payload.id] = {
                amount: action.payload.amount,
            }
            return o;
        }
        default: return state;
    }
}