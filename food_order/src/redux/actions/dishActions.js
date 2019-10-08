
export function chooseDish(id){
    return {
        type: 'CHOOSE_DISH',
        payload: {id},
    }

}

export function setDishAmount(id, amount){
    return {
        type: 'SET_DISH_AMOUNT',
        payload: {id, amount},
    }

}

export function setDishes(dishes){
    return {
        type: 'SET_DISHES',
        payload: dishes
    }
}

 

