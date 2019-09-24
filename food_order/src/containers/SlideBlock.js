import React from 'react';
import { connect } from 'react-redux';

import  * as dishAct  from '../actions/dishActions';
import { addToCart } from '../actions/cartActions';
import * as carouselAct from '../actions/carouselActions'

import './SlideBlock.css';
import arrLeft from '../img/left-arrow.svg';
import arrRight from '../img/right-arrow.svg';

import Dish from '../components/Dish'


function generateDishes(id, name, cookingTime, queue, price){
    let descr = `May we be permitted to recur, for the sake of clearness in the recital, to the simple means which we have already employed in the case of Waterloo.`;
    return {id, name, descr, cookingTime, queue, price};
}


class SlideBlock extends React.Component{
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    onClick(event){
        let el = event.target;
        let id = +el.dataset.id;

        if(isNaN(id)) return;

        let dish = this.props.dish.dishes.find(dish=>dish.id === id);
        let amount = dish.amount || 0;


        switch(true){
            case el.matches('.slide-block__item'):{
                this.props.choseDish(id);
                break;
            }

            case el.matches('.decrBtn'):{
                this.props.choseDish(id);

                const newAmount =  amount > 0 ? amount - 1 : amount;
                
                this.props.setDishAmount(newAmount);
                break;
            }

            case el.matches('.incrBtn'):{
                this.props.choseDish(id);
                this.props.setDishAmount(amount + 1);
                break;
            }

            case el.matches('.dish__cart-button'):{
                this.props.addToCart(id, amount, dish.price);
                break;
            }

            default:  console.log('none');
        }
    }

    onChangeAmount(event){
        this.props.setDishAmount(event.target.value);
    }

    nextSlide(event){
        let dir = +event.target.dataset.direction;
        let {size, current} = this.props.carousel;

        dir = (dir + current <  size) ? dir + current : 0;
        dir = dir >= 0 ? dir : size - 1;

        this.props.setCurrent(dir);
    }

    componentDidMount(){
        //later data will be fetched
        let limit = 18;
        let demoDishesData = Array(limit).fill(null).map((el, ind)=>generateDishes(ind, 'Lorem'+ind, 60*15, ind, 500 + ind));
        this.props.setDishes(demoDishesData);
        this.props.setCarouselSize(limit/6^0);
    }

    render(){
        console.log("block rendered");

        let dishID = this.props.dish.dishID;

        let blockShiftStyle ={
            right: `${100*this.props.carousel.current}%`,
        }

        let tmp=[];
        for(let i = 0, j = 0; i < this.props.dish.dishes.length; i+=6, j++){
            let block = this.props.dish.dishes.slice(i, i + 6).map((dish, ind)=>{
                let display;
        
                if (dish.id === dishID){
                    display = 'flex'
                } 
                else {
                    display = 'none'
                }
        
                return <Dish 
                    key = {ind}
                    display = {display}
                    amount = {dish.amount}
                    queue = {dish.queue}
                    dish = {dish}
                ></Dish>
            })
            tmp.push(
                <div 
                    className = "slide-block__items-wrap"
                    style = {blockShiftStyle}
                >
                    {block}
                </div>
            )  
        }

        console.log(tmp)

        return(
            <>
                <div 
                    className = "slide-block"
                    onClick = { this.onClick }
                    onChange = { this.onChangeAmount }
                >
                    <div className = "slide-block__current">
                        {tmp}
                    </div>

                    <div 
                        className = "slide-block__arrow-left"
                        data-direction = {-1}
                        onClick = {this.nextSlide}
                    >
                        <img 
                            src = {arrLeft}
                            alt = "left"
                            data-direction = {-1}
                        >
                        </img>
                    </div>
                    
                    <div 
                        className = "slide-block__arrow-right"
                        onClick = {this.nextSlide}
                        data-direction = "1"
                    >
                    
                        <img 
                            src = {arrRight} 
                            alt = "right"
                            data-direction = "1"
                        >
                        </img>
                    </div>
                </div>
            </>
        )
    }
}



const mapStateToProps = store => {
    console.log(store)
    return {
      dish: store.dish,
      carousel: store.carousel,
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      choseDish: id => dispatch(dishAct.chooseDish(id)),
      setDishAmount: amount => dispatch(dishAct.setDishAmount(amount)),
      setDishes: dishes => dispatch(dishAct.setDishes(dishes)),
      addToCart: (id, amount, price) => dispatch(addToCart(id, amount, price)),
      setCarouselSize: (sz) => dispatch(carouselAct.setCarouselSize(sz)),
      setCurrent: (el) => dispatch(carouselAct.setCurrent(el)),

    }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(SlideBlock);

