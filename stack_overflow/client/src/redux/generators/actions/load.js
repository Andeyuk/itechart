import { typeGenerator, makeActionCreators} from "../../utils";
import actionTypes from '../constants/load';
import RequestService from '../../../services/requestService';

const load = (name) => () => {
    return {
        type: typeGenerator(actionTypes.LOAD_REQUEST, name),
        promice: () => RequestService.load(name)(),
    }
}

const loadOne = (name) => (id) => {
    return {
        type: typeGenerator(actionTypes.LOAD_ONE_REQUEST, name),
        promice: () => RequestService.load(name)(id),
        payload: {
            id
        }
    }
}

const loadSuccess = (name) => (response) => {
    return {
        type: typeGenerator(actionTypes.LOAD_SUCCESS, name),
        payload: response
    }
}

const loadOneSuccess = (name) => (data) => {
    return {
        type: typeGenerator(actionTypes.LOAD_ONE_SUCCESS, name),
        payload: data
    }
}

const loadFail = (name) => (error) => {
    return {
        type: typeGenerator(actionTypes.LOAD_FAIL, name),
        error,
    }
}

const loadOneFail = (name) => (error) => {
    return {
        type: typeGenerator(actionTypes.LOAD_ONE_FAIL, name),
        error,
    }
}

const loadActionsGenerator = (name) => makeActionCreators(
    name,
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