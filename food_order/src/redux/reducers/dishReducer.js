import {
    CHOOSE_DISH,
    SET_DISH_AMOUNT,
    SET_DISHES,
    SET_CURRENT_PAGE,
    SET_VISIBLE_AMOUNT,
    FETCH_DISH_REQUEST ,
    FETCH_DISH_SUCCESS,
    FETCH_DISH_FAILURE,
} from '../constants';

const initialState = {
    dishes:[],
    dishesAmount: {},
    dishesSelected: {},
    pagination: {
        currPage: 1,
        visibleAmount: 20,
    },
    status: 'fetch',
    statusText: null,
}


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

        case SET_VISIBLE_AMOUNT: {
            const newPagination = {...state.pagination, visibleAmount: action.payload.amount};
            return {...state, pagination: newPagination}
        }

        case SET_CURRENT_PAGE: {
            const newPagination = {...state.pagination, currPage: action.payload.pageInd};
            return {...state, pagination: newPagination}
        }

        case FETCH_DISH_REQUEST: {
            return {
                ...state, 
                status: 'fetch', 
                statusText: null, 
            }
        }

        case FETCH_DISH_SUCCESS: {
            return {
                ...state,
                status: 'success',
                statusText: action.payload.response
            }
        }

        case FETCH_DISH_FAILURE: {
            return {
                ...state,
                status: 'error',
                statusText: action.payload.error,
            }
        }
        default: return state;
    }
}