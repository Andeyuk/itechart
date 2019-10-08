import React from 'react';
import { connect } from 'react-redux';

import * as cartAct from '../redux/actions/cartActions';
import * as userAct from '../redux/actions/userActions';
import CartItem from '../components/CartItem';

import cartIcon from '../img/shopping-cart.svg';
import './Cart.css';
import { AuthAPI } from '../API/AuthAPI';
import { CartAPI } from '../API/CartAPI';

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

        let amount;
        if (id)
            amount = this.props.cart.purchases.find(dish=>dish.id === id).amount;

        switch(true){
            case el.matches('.checkout-btn'):{
                CartAPI.checkout(this.props.cart.purchases)
                    .then(el=>{
                        if (el instanceof Error) throw el;
                        console.log(el);
                    })
                    .catch(err=>{
                        console.log(err);
                        AuthAPI.logout();
                        this.props.setUserName(null);
                    });
                break;
            }

            case isNaN(id): {
                break;
            }

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

            case el.matches('.removeBtn'):{
                this.props.removeFromCart(id);
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
        //let dishes = this.props.dishes;
        let amount = this.props.cart.purchases.length;

        //transfer to API
        if (amount) this.props.savePurchases();
        else this.props.clearPurchases();


        let amountStyle = {
            width: amount.toString().length * 16 + 'px',
        }

        let items = (
            purchases || []
        ).map(el=>{
            return <CartItem 
                id = {el.id}
                amount = {el.amount}
                name = {el.name}
                key = {el.id}
            />
        })

        let totalPrice = 0;    
        purchases.forEach(el => {
            totalPrice += el.amount * el.price;
        });
        
        return(
            <div className = "cart">
                <div 
                    className = "cart__icon-wrap"
                    onClick = {this.toggleVisibility}
                >
                    <img className = "cart__icon" src ={cartIcon}  alt = "cart"></img>
                    <div className = "cart__amount" style = {amountStyle}>{amount}</div>
                </div>
                {  isVisible &&
                    <ul 
                        className = "cart__items-list"
                        onClick = {this.onClick}
                        onChange = {this.onChangeAmount}
                    >
                        {items}
                    <div className = "cart__checkout">
                        <div className = "cart__total_price">
                            {totalPrice}
                        </div>
                        <button className = "checkout-btn">Checkout</button>
                    </div>
                    </ul>
                }
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
        toggle: () => dispatch(cartAct.toggleVisibility()),
        setItemAmount: (id, amount) => dispatch(cartAct.setItemAmount(id, amount)),
        removeFromCart: id => dispatch(cartAct.removeFromCart(id)),
        savePurchases: () => dispatch(cartAct.savePurchases()),
        clearPurchases: () => dispatch(cartAct.clearPuchases()),
        setUserName: (name) => dispatch(userAct.setUserName(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

