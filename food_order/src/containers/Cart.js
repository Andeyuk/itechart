import React from 'react';
import { connect } from 'react-redux';

import * as cartAct from '../actions/cartActions';
import CartItem from '../components/CartItem';

import cartIcon from '../img/shopping-cart.svg';
import './Cart.css';

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
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
                this.props.addToCart(id, amount);
                break;
            }

            default:  console.log('none');
        }
    }

    toggleVisibility(){
        this.props.toggle();
    }

    onChangeAmount(event){
        this.props.setItemAmount(+event.target.dataset.id, +event.target.value);
    }

    render(){
        console.log('cart rendered');

        let {purchases, isVisible} = this.props.cart;
        let dishes = this.props.dishes;
        let amount = this.props.cart.purchases.length;

        if (amount) this.props.savePurchases();
        else this.props.clearPurchases();

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
        })
        
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
                    onChange = {this.onChangeAmount}
                >
                    {items}
                <div className = "cart__checkout">
                    <button className = "checkout-btn">Checkout(not active)</button>
                </div>
                </ul>
            </div>
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
        setItemAmount: (id, amount) => dispatch(cartAct.setItemAmount(id, amount)),
        removeFromCart: id => dispatch(cartAct.removeFromCart(id)),
        savePurchases: () => dispatch(cartAct.savePurchases()),
        clearPurchases: () => dispatch(cartAct.clearPuchases()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

