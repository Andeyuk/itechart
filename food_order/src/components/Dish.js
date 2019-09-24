import React  from 'react';

import './Dish.css'


class Dish extends React.PureComponent{
    render(){
        console.log("dish rendered");

        let style = {
            display: this.props.display
        }

        //static
        let {id, name, descr, cookingTime, price} =  this.props.dish;
        //dynamic
        let {amount, queue} =  this.props;


        return(
            <div 
                className = "slide-block__item-wrap dish"
            >
                <div className = "slide-block__item"
                    data-id = {id}
                ></div>

                <div 
                    className = "slide-block__item-info"
                    style = {style}
                >
                    <h3 className = "dish__title">{name}</h3>

                    <p className = "dish__description dish__description__short">
                        {descr}
                    </p>


                    <DishPrice
                        price = {price}
                        amount = {amount}
                    />
                    
                    <CookingDuration
                        queue = {queue}
                        cookingTime = {cookingTime}
                        amount = {amount}
                    />


                    <div 
                        className = "dish__cart-control"
                        data-id = {id}
                    >
                        <button 
                            data-id = {id}
                            className = "dish__cart-button"
                        >Add</button>

                        <div className = "dish__amount-wrap">
                            <button 
                                data-id = {id}
                                className = "decrBtn"
                            >-</button>

                            <Input 
                                value = {amount}
                                id ={id}
                            />

                            <button 
                                data-id = {id}
                                className = "incrBtn"
                            >+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class Input extends React.PureComponent{
    render(){
        console.log('  dish input rendered');
        let value = this.props.value || 0;
        let id = this.props.id
        return(
            <input 
                data-id = {id}
                value = {value} 
                type = "text" 
                className = "dish__input"
            ></input>

        )
    }
}

class CookingDuration extends React.PureComponent{
    render(){
        console.log('  dish coockin rendered');
        let {queue, amount, cookingTime} = this.props;

        let allTime = cookingTime * amount * queue
            || cookingTime * queue 
            || cookingTime * amount
            || cookingTime;
        
        let hours = allTime / 3600^0;
        let mins = allTime % 3600 / 60;

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


export default Dish;
