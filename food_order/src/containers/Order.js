import React from 'react';
import { connect } from 'react-redux';


import history from '../config/historyConfig';

import OrderLine from './OrderLine';

import * as userAct from '../redux/actions/userActions';


class Order extends React.Component{
    orderClicked(){

    }
    render(){
        const {createdAt, OrderLines, totalCost} = this.props.order;
        const date = new Date(createdAt).toLocaleString();
        const orderLines = OrderLines.map(id=>
            <OrderLine 
                key={id}
                id={id}
            ></OrderLine>
        )
        return(
            <div className = "history__item">
                <div 
                    className = "history__row"
                    onClick = {this.orderClicked}
                >
                    <div className = "history__date">{date}</div>
                    <div className = "history__spend">{totalCost}</div>
                </div>
                <ul className = "history__bill">
                    {orderLines}
                        <p>total cost:{totalCost}</p>
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (store, ownProps) => {
    console.log(store)
    const entites = store.user.orderHistory.entities;
    return {
      order: entites.orders[ownProps.id],
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        setOrderHistory: (history) => dispatch(userAct.setOrderHistory(history))
    }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Order);