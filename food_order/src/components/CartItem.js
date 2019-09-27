import React from 'react';
import { Router, Link } from 'react-router-dom';
import history  from '../history/history';

import remove from '../img/delete.svg';
import './CartItem.css'


class CartItem extends React.PureComponent{
    render(){
        console.log('item rendered')
        let {id, amount, name} = this.props;

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
                    
                    <img
                        data-id = {id}
                        className = "removeBtn"
                        src = {remove}
                        alt = "remove"
                    >
                    </img>
                </div>
            </li>
        )
    }
}

export default CartItem;