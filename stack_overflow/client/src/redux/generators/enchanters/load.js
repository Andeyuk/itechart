import RequestTypes from '../constants/load';
import {typeGenerator} from '../../utils';


const createLoadEnchanter = (name) => (state, action) => {
    switch (action.type){
        case typeGenerator(RequestTypes.LOAD_ONE_REQUEST, name):
        case typeGenerator(RequestTypes.LOAD_REQUEST, name): {
            return {
                ...state, 
                status: 'loading'
            }
        }
        case typeGenerator(RequestTypes.LOAD_SUCCESS, name): {
            return {
                ...state,
                status: 'loaded',
                ...action.payload,
            }
        }
        case typeGenerator(RequestTypes.LOAD_ONE_SUCCESS, name): {
            return {
                ...state, 
                status: 'loaded',
                byId: {...state.byId,  ...action.payload}
            }
        }
        case typeGenerator(RequestTypes.LOAD_ONE_FAIL, name):
        case typeGenerator(RequestTypes.LOAD_FAIL, name): {
            return {
                ...state,
                status: 'error',
                message: action.error.response.statusText
            }
        }
    }
    //no default because it won't be used on it own
}

export default createLoadEnchanter;