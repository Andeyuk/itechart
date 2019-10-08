export const DishAPI = {
    getDishes(start, limit){
        return fetch(`/dishes?start=${start}&limit=${limit}`)
        .catch(err=>err)
        
    },

    getPopularDishes(start, limit){
        return fetch(`/dishes/popular?start=${start}&limit=${limit}`)
        .catch(err=>err)
    }
}