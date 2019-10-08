
export function toggleVisibility(){
    return {
        type: 'TOGGLE_USER_VISIBILITY',
    }
}


export function setUserName(name){
    return {
        type: 'SET_USER_NAME',
        payload: name
    }
}

export function setUserEmail(email){
    return {
        type: 'SET_USER_EMAIL',
        payload: email
    }
}

export function setOrderHistory(history){
    return {
        type: 'SET_ORDER_HISTORY',
        payload: history,
    }
}

