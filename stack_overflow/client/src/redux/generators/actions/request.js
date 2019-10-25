import { typeGenerator, makeActionCreators} from "../../utils";
import RequestTypes from '../constants/vote'

const request = (name) => (id) => {
    return {
        type: typeGenerator(RequestTypes.REQUEST, name),
        promice: 'todo',
        payload: {
            id
        }
    }
}

const requestSuccess = (name) => (id) => {
    return {
        type: typeGenerator(actionTypes.REQUEST_SUCCESS, name),
        promice: 'todo',
        payload:{
            id
        }
    }
}

const requestFail = (name) => (id) => {
    return {
        type: typeGenerator(actionTypes.REQUEST_FAIL, name),
        promice: 'todo',
        payload:{
            id
        }
    }
}

const requestActionsGenerator = (name) => makeActionCreators(
    name,
    {
        request,
        requestSuccess,
        requestFail
    }
)

export default requestActionsGenerator;