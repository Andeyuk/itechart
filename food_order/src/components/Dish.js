import React  from 'react';

import './Dish.css'

let descr = `May we be permitted to recur, for the sake of clearness in the recital, to the simple means which we have already employed in the case of Waterloo.`;

class Dish extends React.PureComponent{
    render(){
      console.log("dish rendered");
        return(
            <div 
            className = "slide-block__item-wrap dish"
            onClick = {this.props.onClick}>
                <div className = "slide-block__item"></div>
                <div className = "slide-block__item-info">
                    <h3 className = "dish__title">Pizza Italiana</h3>
                    <p className = "dish__description dish__description__short">
                        {descr}
                    </p>
                    <div className = "dish__cart-control">
                        <button className = "dish__cart-button">Add</button>
                        <button>-</button>
                        <input type = "text" defaultValue = "0" min = "0" className = "dish__input"></input>
                        <button>+</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Dish;
