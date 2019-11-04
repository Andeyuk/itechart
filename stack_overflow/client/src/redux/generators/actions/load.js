import { typeGenerator, makeActionCreators} from "../../utils";
import actionTypes from '../constants/load';
import RequestService from '../../../services/requestService';

const load = (types) => () => {
    return {
        type: types.LOAD_REQUEST,
        //promice: () => RequestService.load(name)(),
    }
}

const loadOne = (types) => (id) => {
    return {
        type: types.LOAD_ONE_REQUEST,
        //promice: () => RequestService.load(name)(id),
        payload: {
            id
        }
    }
}

const loadSuccess = (types) => (byId, allIds) => {
    return {
        type: types.LOAD_SUCCESS,
        payload: {
            byId, 
            allIds
        }
    }
}

const loadOneSuccess = (types) => (byId, allIds) => {
    return {
        type: types.LOAD_ONE_SUCCESS,
        payload: {
            byId, allIds
        }
    }
}

const loadFail = (types) => (error) => {
    return {
        type: types.LOAD_FAIL,
        error,
    }
}

const loadOneFail = (types) => (error) => {
    return {
        type: types.LOAD_ONE_FAIL,
        error,
    }
}

const loadActionsGenerator = (types) => makeActionCreators(
    types,
    {
        loadOne,
        loadOneSuccess,
        loadOneFail,
        load,
        loadSuccess,
        loadFail
    }
)

export default loadActionsGenerator;