import React from 'react';
import { Router, Link } from 'react-router-dom';
import history  from '../history/history';


class CartItem extends React.PureComponent{
    render(){
        console.log('item rendered')
        const {id, amount, name} = this.props

        return(
            <li className = "cart__item">
                <Router history = { history }>
                    <Link className = "cart-item__name" to = {`/dishes/${id}`}>
                        {name}
                    </Link>
                </Router>
                <div className = "cart__amount-buttons">
                    <button 
                    data-id = {id}
                        className = "decrBtn"
                    >-</button>
                    <input 
                        data-id = {id}
                        value = {amount}
                        type = "text" 
                        className = "dish__input"
                    ></input>
                    <button 
                        data-id = {id}
                        className = "incrBtn"
                    >+</button>
                </div>
            </li>
        )
    }
}

export default CartItem;