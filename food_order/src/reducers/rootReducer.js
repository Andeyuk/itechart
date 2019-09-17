import { combineReducers }  from 'redux';
import { appReducer } from './appReducer';
import { dishReducer } from './dishReducer';

export const rootReducer = combineReducers({
    home: appReducer,
    dish: dishReducer
});