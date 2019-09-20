
export function chooseDish(dishID){
    return {
        type: 'CHOOSE_DISH',
        payload: +dishID,
    }

}

export function setDishAmount(amount){
    return {
        type: 'SET_DISH_AMOUNT',
        payload: amount,
    }

}

export function setDishes(dishes){
    return {
        type: 'SET_DISHES',
        payload: dishes
    }
}
    

