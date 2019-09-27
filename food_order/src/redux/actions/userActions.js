
export function toggleVisibility(){
    return {
        type: 'TOGGLE_USER_VISIBILITY',
    }
}


export function setUsername(name){
    return {
        type: 'SET_USERNAME',
        payload: name
    }
}


