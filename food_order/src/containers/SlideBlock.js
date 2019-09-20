import React from 'react';
import Dish from '../components/Dish'
import { connect } from 'react-redux';

import  * as dishAct  from '../actions/dishActions';
import { addToCart } from '../actions/cartActions';

import './SlideBlock.css';

import arrLeft from '../img/left-arrow.svg';
import arrRight from '../img/right-arrow.svg';

function generateDishes(id, name, cookingTime, queue){
    let descr = `May we be permitted to recur, for the sake of clearness in the recital, to the simple means which we have already employed in the case of Waterloo.`;
    return {id, name, descr, cookingTime, queue};
}


class SlideBlock extends React.Component{
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
    }

    onClick(event){
        let el = event.target;
        let id = +el.dataset.id;

        if(isNaN(id)) return;

        let amount= this.props.dish.dishes.find(dish=>dish.id === id).amount || 0;


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
                this.props.addToCart(id, amount);
                break;
            }

            default:  console.log('none');
        }
    }

    onChangeAmount(event){
        this.props.setDishAmount(event.target.value);
    }

    componentDidMount(){
        //later data will be fetched
        let demoDishesData = Array(6).fill(null).map((el, ind)=>generateDishes(ind, 'Lorem'+ind, 60*15, ind));
        this.props.setDishes(demoDishesData);
    }

    render(){

        console.log("block rendered");

        let dishID = this.props.dish.dishID;

        let slides = this.props.dish.dishes.map((dish, ind)=>{
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

        return(
            <>
                <div 
                    className = "slide-block"
                    onClick = { this.onClick }
                    onChange = { this.onChangeAmount }
                >

                    { slides }

                    <div className = "slide-block__arrow-left">
                        <img src = {arrLeft} alt = "left"></img>
                    </div>
                    
                    <div className = "slide-block__arrow-right">
                        <img src = {arrRight} alt = "right"></img>
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
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      choseDish: id => dispatch(dishAct.chooseDish(id)),
      setDishAmount: amount => dispatch(dishAct.setDishAmount(amount)),
      setDishes: dishes => dispatch(dishAct.setDishes(dishes)),
      addToCart: (id, amount) => dispatch(addToCart(id, amount)),
    }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(SlideBlock);

