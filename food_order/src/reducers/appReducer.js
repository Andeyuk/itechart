
const initialState = {
    test: "Hello"
}

const TEST = 'test';

export function appReducer(state = initialState, action){
    switch (action.type){
        case  TEST:
            return {...state, got: action.payload}
        default: return state;
    }
}