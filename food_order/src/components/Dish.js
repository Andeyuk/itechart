import React  from 'react';

import './Dish.css'


class Dish extends React.PureComponent{
    render(){
        console.log("dish rendered");

        let style = {
            zIndex: this.props.zIndex
        }

        let {id, dishAmount, name, descr} =  this.props;

        return(
            <div 
                className = "slide-block__item-wrap dish"
            >
            <div className = "slide-block__item"
                data-id = {id}
                style = {style}
            ></div>
            <div className = "slide-block__item-info">
                <h3 className = "dish__title">{name}</h3>
                <p className = "dish__description dish__description__short">
                    {descr}
                </p>
                <div 
                    className = "dish__cart-control"
                    data-id = {id}
                >
                    <button 
                        data-id = {id}
                        className = "dish__cart-button"
                    >Add</button>
                    <button 
                        data-id = {id}
                        id = "decrBtn"
                    >-</button>
                    <input 
                        data-id = {id}
                        onChange = {this.props.onChange}
                        value = {dishAmount} 
                        type = "text" 
                        className = "dish__input"
                    ></input>
                    <button 
                        data-id = {id}
                        id = "incrBtn"
                    >+</button>
                </div>
            </div>
        </div>
        )
    }
}


export default Dish;
