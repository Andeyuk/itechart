import React from 'react';
import { connect } from 'react-redux';
import { normalize, schema } from 'normalizr';

import history from '../config/historyConfig';

import {AuthAPI} from '../API/AuthAPI';
import {OrderAPI} from '../API/OrderAPI';
import * as userAct from '../redux/actions/userActions';

import Order from './Order';

import { Dimmer, Loader, Container, Segment} from 'semantic-ui-react';

import './Profile.css';

class Profile extends React.Component{
    componentDidMount(){
        const dish = new schema.Entity('dish');
        const orderLine = new schema.Entity('orderLines', {
            Dish: dish
        });
        const orderLines = new schema.Entity('orders',{
            OrderLines: [orderLine]
        });
        const order = new schema.Array(orderLines);

        OrderAPI.getHistory()
            .then(res=>res.json())
            .then(json=>{
                return normalize(json, order);
            })
            .then(data=>this.props.setOrderHistory(data));
    }

    render(){
        const {userName, userEmail} = this.props.user;

        const orders = (this.props.user.orderHistory.result || []).map(id=>
            <Order id = {id} key={id}></Order>
        );

        return(
            <div className = "profile-wrap">
                <div className = "profile">
                    <div className = "profile__info info">
                        <div className = "info__item">
                            <div className = "info__title">Username:</div>
                            <div className = "info__content">
                                {userName}
                            </div>
                        </div>
                        <div className = "info__item">
                            <div className = "info__title">Email:</div>
                            <div className = "info__content">
                                {userEmail}
                            </div>
                        </div>
                    </div>
                    <div className = "profile__history history">
                        <div className = "history__title">History</div>
                        { !orders.length &&
                            <Container>
                                <Loader active inline='centered' size='big'>Loading</Loader>
                            </Container>
                        }
                        {orders}
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = store => {
    console.log(store)
    return {
      user: store.user,
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        setOrderHistory: (history) => dispatch(userAct.setOrderHistory(history))
    }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

