
const initialState = {
    isClicked: false
}

const DISH_CLICKED = 'DISH_CLICKED';

export function dishReducer(state = initialState, action){
    switch (action.type){
        case  DISH_CLICKED:
            return {...state, isClicked: !state.isClicked, el: action.payload}
        default: return state;
    }
}