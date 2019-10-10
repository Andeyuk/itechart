
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

export function setCurrentPage(pageInd){
    return{
        type: 'SET_CURRENT_PAGE',
        payload: {pageInd},
    }
}

export function setVisibleAmount(amount){
    return{
        type: 'SET_VISIBLE_AMOUNT',
        payload: {amount},
    }
}


export function fetchDishRequest(){
    return{
        type: 'FETCH_DISH_REQUEST'
    }
}

export function fetchDishSuccess(response){
    return{
        type: 'FETCH_DISH_SUCCESS',
        payload:{
            response
        },
    }
}

export function fetchDishFailure(error){
    return{
        type: 'FETCH_DISH_FAILURE',
        payload:{
            error
        },
    }
}

