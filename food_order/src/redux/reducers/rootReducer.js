import { combineReducers }  from 'redux';
import { dishReducer } from './dishReducer';
import { cartReducer } from './cartReducer';
import { carouselReducer} from './carouselReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
    dish: dishReducer,
    cart: cartReducer,
    carousel: carouselReducer,
    user: userReducer
});