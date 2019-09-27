export function setCarouselSize(size){
    return{
        type: 'SET_CAROUSEL_SIZE',
        payload: size,
    }
}

export function setCurrent(el){
    return{
        type: 'SET_CURRENT',
        payload: el,
    }
}
