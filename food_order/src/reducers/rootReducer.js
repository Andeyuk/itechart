import { combineReducers }  from 'redux';
import { dishReducer } from './dishReducer';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
    dish: dishReducer,
    cart: cartReducer
});