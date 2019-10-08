import React from 'react';
import { connect } from 'react-redux';


import history from '../config/historyConfig';


import * as userAct from '../redux/actions/userActions';

class OrderLine extends React.Component{
    render(){
        const [orderLine, dish] = [this.props.orderLine, this.props.dish];
        return(
            <li className = "history__dish">
                <p>{dish.name}</p>
                <p>{orderLine.price}X{orderLine.amount}={orderLine.amount * orderLine.price}</p>
            </li>
        )
    }
}


const mapStateToProps = (store, ownProps) => {
    const entites = store.user.orderHistory.entities;
    const line = entites.orderLines[ownProps.id];
    return {
      orderLine: line,
      dish: entites.dish[line.Dish],
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        setOrderHistory: (history) => dispatch(userAct.setOrderHistory(history))
    }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(OrderLine);