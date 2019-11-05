import {makeActionCreators} from "../../utils";

const voteUpRequest = (types) => (id) => {
    return {
        type: types.VOTE_UP_REQUEST,
        payload: {
            id
        }
    }
}

const voteDownRequest = (types) => (id) => {
    return {
        type: types.VOTE_DOWN_REQUEST,
        payload: {
            id
        }
    }
}

const voteUpSuccess = (types) => (id) => {
    return {
        type: types.VOTE_UP_SUCCESS,
        payload: {
            id
        }
    }
}

const voteDownSucess = (types) => (id) => {
    return {
        type: types.VOTE_DOWN_SUCCESS,
        payload: {
            id
        }
    }
}

const voteUpFail = (types) => (error) => {
    return {
        type: types.VOTE_UP_FAIL,
        error
    }
}

const voteDownFail = (types) => (error) => {
    return {
        type: types.VOTE_DOWN_FAIL,
        error
    }
}


const voteActionsGenerator = (name) => makeActionCreators(
    name,
    {
        voteUpRequest,
        voteUpSuccess,
        voteUpFail,
        voteDownRequest,
        voteDownSucess,
        voteDownFail
    }
)

export default voteActionsGenerator;