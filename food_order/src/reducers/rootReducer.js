import { combineReducers }  from 'redux';
import { dishReducer } from './dishReducer';
import { cartReducer } from './cartReducer';
import { carouselReducer} from './carouselReducer'

export const rootReducer = combineReducers({
    dish: dishReducer,
    cart: cartReducer,
    carousel: carouselReducer
});