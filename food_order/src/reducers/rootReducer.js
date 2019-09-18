import { combineReducers }  from 'redux';
import { appReducer } from './appReducer';
import { dishReducer } from './dishReducer';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
    home: appReducer,
    dish: dishReducer,
    cart: cartReducer
});