
export function dishOnClick(e){
    return {
        type: 'DISH_CLICKED',
        payload: e.target,
        //match: (el) => el.matches('.slide-block__item'),
        //swapDisplay: (el) => el.style.display === 'block' ? el.style.display = 'none' : el.style.display = 'block',
    }

}