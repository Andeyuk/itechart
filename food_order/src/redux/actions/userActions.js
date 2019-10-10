
export function toggleVisibility(){
    return {
        type: 'TOGGLE_USER_VISIBILITY',
    }
}

export function hideUser(){
    return {
        type: 'HIDE_USER',
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

export function logout(){
    return {
        type: 'LOGOUT',
    }
}


export function fetchLoginRequest(){
    return{
        type: 'FETCH_LOGIN_REQUEST'
    }
}

export function fetchLoginSuccess(response){
    return{
        type: 'FETCH_LOGIN_SUCCESS',
        payload:{
            response
        },
    }
}

export function fetchLoginFailure(error){
    return{
        type: 'FETCH_LOGIN_FAILURE',
        payload:{
            error
        },
    }
}
