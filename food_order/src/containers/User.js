import React from 'react';
import {Router, Link} from 'react-router-dom';
import history  from '../config/historyConfig';
import { connect } from 'react-redux';
import { batch } from "react-redux";

import * as userAct from '../redux/actions/userActions'

import userIcon from '../img/user-shape.svg';
import './User.css';

import {AuthAPI} from '../API/AuthAPI'

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

        AuthAPI.login(userName, password, remember)
            .then(el=>{
                batch(()=>{
                    this.props.setUserName(el.user.username);
                    this.props.setUserEmail(el.user.email);
                    this.props.toggleVisibility();
                })
            })
            .catch(err=>console.error(err));
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
                    { userName &&  isVisible &&
                    <UserLogged 
                        userName = {userName}
                    />}
                </div>
                {!userName && isVisible &&
                <UserForm 
                    onSubmit = {this.handleSubmit}
                />}
                
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

class UserForm extends React.PureComponent{
    render(){
        console.log('    user form rendered');
        return(
            <form 
                className="login user__drop-down user__drop-down_middle"
                onSubmit={this.props.onSubmit}

                >
                    <div className="login__header">
                        <h2>Log In</h2>
                    </div>
                    <label htmlFor="username" className="login__label">Username</label>
                    <br/>
                    <input type="text" id="username" className="login__input"></input>
                    <br/>
                    <label htmlFor="password" className="login__label">Password</label>
                    <br/>
                    <input type="password" id="password" className="login__input"></input>
                    <br/>
                    <input type="checkbox" id="login__remember"></input>
                    <label htmlFor="login__remember" className="login__label">Remember me</label>
                    <br/>
                    <button 
                        type="submit" 
                        className="login__button"
                    >Sign In</button>
                    <br/>
                    <Router history = { history }>
                        <Link to="/recovery" className="login__link">Forgot your password?</Link>
                        <br/>
                        <Link to="/signup" className="login__link">Don't have an account?</Link>
                    </Router>
            </form>
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
        setUserName: (name) => dispatch(userAct.setUserName(name)),
        setUserEmail: (email) => dispatch(userAct.setUserEmail(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);