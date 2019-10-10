export function addToCart(id, amount, price, name){
    return {
        type: 'ADD_TO_CART',
        payload: {id, amount, price, name},
        pr: price,
    }
}

export function toggleVisibility(){
    return{
        type: 'TOGGLE_CART_VISIBILITY',
    }
}

export function hideCart(){
    return {
        type: 'HIDE_CART',
    }
}

export function removeFromCart(id){
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}

export function setItemAmount(id, amount){
    return {
        type: 'SET_ITEM_AMOUNT',
        payload: amount,
        id
    }
}

export function savePurchases(){
    return{
        type: 'SAVE_PURCHASES'
    }
}

export function clearPuchases(){
    return{
        type: 'CLEAR_PURCHASES'
    }
}


export function fetchCartRequest(){
    return{
        type: 'FETCH_CART_REQUEST'
    }
}

export function fetchCartSuccess(response){
    return{
        type: 'FETCH_CART_SUCCESS',
        payload:{
            response
        },
    }
}

export function fetchCartFailure(error){
    return{
        type: 'FETCH_CART_FAILURE',
        payload:{
            error
        },
    }
}