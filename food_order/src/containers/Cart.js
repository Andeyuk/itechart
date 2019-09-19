import React from 'react';
import { Router, Link } from 'react-router-dom';
import history  from '../history/history';
import { connect } from 'react-redux';

import * as cartAct from '../actions/cartActions';

import cartIcon from '../img/shopping-cart.svg';
import './Cart.css';

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        let el = event.target;
        let id = +el.dataset.id;

        if(isNaN(id)) return;

        const {amount} = this.props.cart.purchases.find(dish=>dish.id === id);

        switch(true){
            case el.matches('.decrBtn'):{

                const newAmount =  amount > 0 ? amount - 1 : amount;

                if (newAmount === 0) {
                    this.props.removeFromCart(id);
                    break;
                }

                this.props.setItemAmount(id, newAmount);
                
                break;
            }

            case el.matches('.incrBtn'):{

                this.props.setItemAmount(id, amount + 1);

                break;
            }

            case el.matches('.dish__cart-button'):{
                console.log('amount:', amount, 'id:', id);
                this.props.addToCart(id, amount);
                break;
            }

            default:  console.log('none');
        }
    }

    toggleVisibility(){
        this.props.toggle();
    }

    render(){
        console.log('cart rendered');

        let {purchases, isVisible} = this.props.cart;
        let dishes = this.props.dishes;
        let amount = this.props.cart.purchases.length;

        if (amount) this.props.savePurchases();

        let cartListStyle = {
            display: isVisible ? 'block' : 'none'
        }

        let amountStyle = {
            width: amount.toString().length * 16 + 'px',
        }

        let items = (
                dishes.length > 0 ? purchases : []
            ).map(el=>{
            return <CartItem 
                id = {el.id}
                amount = {el.amount}
                name = {dishes[el.id].name}
                key = {el.id}
            />
        }
        )
        
        return(
            <div className = "cart">
                <div 
                    className = "cart__icon-wrap"
                    onClick = {this.toggleVisibility}
                >
                    <img className = "cart__icon" src ={cartIcon}  alt = "cart"></img>
                    <div className = "cart__amount" style = {amountStyle}>{amount}</div>
                </div>
                <ul 
                    className = "cart__items-list"
                    style = {cartListStyle}
                    onClick = {this.onClick}
                >
                    {items}
                    
                </ul>
            </div>
        )
    }
}

class CartItem extends React.PureComponent{
    render(){
        console.log('item rendered')
        const {id, amount, name} = this.props

        return(
            <li className = "cart__item">
                <Router history = { history }>
                    <Link className = "cart-item__name" to = "/dishes/:dish">
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

const mapStateToProps = store => {
    return {
        cart: store.cart,
        dishes: store.dish.dishes,
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id, amount) => dispatch(cartAct.addToCart(id, amount)),
        toggle: () => dispatch(cartAct.toggleVisibility()),
        setItemAmount: (id,amount) => dispatch(cartAct.setItemAmount(id, amount)),
        removeFromCart: id => dispatch(cartAct.removeFromCart(id)),
        savePurchases: () =>dispatch(cartAct.savePurchases()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

