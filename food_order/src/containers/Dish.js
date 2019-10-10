import React  from 'react';
import { connect } from 'react-redux';


import './Dish.css'

import  * as dishAct  from '../redux/actions/dishActions';
import { addToCart } from '../redux/actions/cartActions';


class Dish extends React.PureComponent{
    constructor(props){
        super(props);
        this.clickDish = this.clickDish.bind(this);
        this.incrementAmount = this.incrementAmount.bind(this);
        this.decrementAmount = this.decrementAmount.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    clickDish(){
        const id = this.props.id;
        this.props.chooseDish(id);
    }

    decrementAmount(){
        const {id, amount = 0} = this.props;
        const newAmount = amount > 0 ? amount - 1 : 0
        this.props.setDishAmount(id, newAmount);
    }

    incrementAmount(){
        const {id, amount = 0} = this.props;
        this.props.setDishAmount(id, amount + 1);
    }    

    addToCart(){
        const {id, price, name} = this.props.dish;
        const {amount} = this.props;
        this.props.addToCart(id, amount, price, name)
    }

    render(){
        console.log("dish rendered");
        const {amount = 0, dish, isSelected, widthRatio} =  this.props;
        const visibility = isSelected ? 'visible' : 'hidden';
        const backStyle = {
            visibility,
            top:' 50%',  
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }
        const {name, description, cookingTime, price, isCookingAmount} = dish;

        const DishWidth={
            width: `${widthRatio}%`,
        }
        return(
            <div 
                className = "slide-block__item-wrap dish"
                style={DishWidth}
            >
                <div 
                    className = "slide-block__item"
                    onClick = {this.clickDish}
                >
                </div>

                <div 
                    className = "slide-block__item-info"
                    style={backStyle}
                >
                    <h3 className = "dish__title">{name}</h3>

                    <p className = "dish__description dish__description__short">
                        {description}
                    </p>


                    <DishPrice
                        price = {price}
                        amount = {amount}
                    />
                        
                    <CookingDuration
                        isCookingAmount = {isCookingAmount}
                        cookingTime = {cookingTime}
                        amount = {amount}
                    />


                    <div 
                        className = "dish__cart-control"
                    >
                        <button 
                            className = "dish__cart-button"
                            onClick = {this.addToCart}
                        >Add</button>

                        <div className = "dish__amount-wrap">
                            <button 
                                className = "decrBtn"
                                onClick = {this.decrementAmount}
                            >-</button>

                            <Input 
                                value = {amount}
                                setDishAmount = {this.props.setDishAmount}
                            />

                            <button 
                                className = "incrBtn"
                                onClick = {this.incrementAmount}
                            >+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class Input extends React.PureComponent{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(){
        const {id, amount} = this.props;
        this.props.setDishAmount(id, amount);
    }

    render(){
       // console.log('  dish input rendered');
        const {value=0} = this.props
        return(
            <input 
                value = {value} 
                onChange = {this.onChange}
                type = "text" 
                className = "dish__input"
            ></input>
        )
    }
}

class CookingDuration extends React.PureComponent{
    render(){
        //console.log('  dish coockin rendered');
        let {isCookingAmount, amount , cookingTime} = this.props;


        let allTime = cookingTime * amount * isCookingAmount
            || cookingTime * isCookingAmount 
            || cookingTime * amount
            || cookingTime;
        
        let hours = allTime / 3600 ^0;
        let mins = allTime % 3600 / 60 ^0;

        let time = '~'
        time += hours >= 1 ? `${hours}h ` : '';
        time += mins > 0 ? `${mins}m` : '';
        time = time.length > 1 ? time  : 'inf'


        return(
            <div className = "dish__cooking-duration">
                <div>Ready in:</div>
                <div>{time}</div>
            </div>
        )
    }
}

class DishPrice extends React.Component{
    render(){
        let {price, amount} = this.props;

        return(
            <div className = "dish__price">
                <div>Price:</div>
                <div>{price * amount || price}</div>
            </div>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    const id = ownProps.id;
    const state = store.dish;
    return {
        dish: state.dishes[id],
        amount: (state.dishesAmount[id] || {}).amount,
        //currentDishID: store.dish.dishID,
        isSelected: state.dishesSelected[id],
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      chooseDish: id => dispatch(dishAct.chooseDish(id)),
      setDishAmount: (id, amount) => dispatch(dishAct.setDishAmount(id, amount)),
      addToCart: (id, amount, price, name) => dispatch(addToCart(id, amount, price, name)),
    }
}
  


export default connect(mapStateToProps, mapDispatchToProps)(Dish);
