export function addToCart(id, amount){
    return {
        type: 'ADD_TO_CART',
        payload: {id, amount}
    }
}

export function toggleVisibility(){
    return{
        type: 'TOGGLE_VISIBILITY',
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