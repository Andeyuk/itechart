import React from 'react';
import {Router, Link} from 'react-router-dom';
import history  from '../config/historyConfig';
import { connect } from 'react-redux';
import { batch } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'

import * as userAct from '../redux/actions/userActions';
import * as cartAct from '../redux/actions/cartActions';

import userIcon from '../img/user-shape.svg';
import './User.css';

import {AuthAPI} from '../API/AuthAPI';
import LoginForm from '../components/LoginForm/LoginForm';

class User extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const userName = event.target.username.value;
        const password = event.target.password.value;
        const remember = event.target.login__remember.checked;

        if(!userName || !password) return;

        this.props.fetchLoginRequest();
        AuthAPI.login(userName, password, remember)
            .then(el=>{
                batch(()=>{
                    this.props.setUserName(el.user.username);
                    this.props.setUserEmail(el.user.email);
                    this.props.toggleVisibility();
                    this.props.fetchLoginSuccess();
                })
            })
            .catch(err=>this.props.fetchLoginFailure(err.message));
    }

    handleClick(event){
        const el = event.target;
        switch(true){
            case !!el.closest('.user__profile'):{
                history.push('/profile');
                break;
            }
            case !!el.closest('.user__logout'):{
                AuthAPI.logout();
                this.props.setUserName(null);
                break;
            }
            case !!el.closest('.user__icon-wrap'):{
                this.props.toggleVisibility();
                if (!this.props.user.isVisible){
                    this.props.hideCart();
                }
                break;
            }
            default: console.log('none');
        }
    }

    render(){
        console.log('user rendered');

        const {isVisible, userName} = this.props.user;
        return(
            <div 
                className = "user"
                onClick = {this.handleClick}
            >
                <div 
                    className = "user__icon-wrap"
                >
                    <img className = "user__icon" src ={userIcon}  alt = "cart"></img>
                    <div className = "user_logged">{userName}</div>
                    { 
                        userName &&  isVisible &&
                        <UserLogged 
                            userName = {userName}
                        />
                    }
                </div>
                {
                    !userName && isVisible &&
                        <LoginForm
                            dropdown
                            size='middle'
                            onSubmit = {this.handleSubmit}
                        />
                }
                
            </div>
        )
    }
}

class UserLogged extends React.PureComponent{
    render(){
        console.log('  user logged rendered');
        return(
            <ul className = 'user-list user__drop-down user__drop-down_small'>
                <li className = 'user-list__item user__profile'>Profile</li>
                <li className = 'user-list__item user__logout'>Logout</li>
            </ul>
        )
    }
}


const mapStateToProps = store => {
    return {
        user: store.user
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        toggleVisibility: ()=> dispatch(userAct.toggleVisibility()),
        hideCart: ()=> dispatch(cartAct.hideCart()),
        setUserName: (name) => dispatch(userAct.setUserName(name)),
        setUserEmail: (email) => dispatch(userAct.setUserEmail(email)),
        fetchLoginRequest: () => dispatch(userAct.fetchLoginRequest()),
        fetchLoginSuccess: (message) => dispatch(userAct.fetchLoginSuccess(message)),
        fetchLoginFailure: (message) => dispatch(userAct.fetchLoginFailure(message)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);