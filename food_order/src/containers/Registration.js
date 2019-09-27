import React from 'react';

import './Registration.css';

import {AuthAPI} from '../API/AuthAPI';

class Registration extends React.Component{
    handleSubmit(event){
        event.preventDefault();
        const el = event.target;
        const userName = el.reg__username.value;
        const password = el.reg__password.value;
        const email = el.reg__email.value;

        if(!userName || !password || !email) return;

        AuthAPI.register(userName, email, password)
            .then(el=>{
                console.log(el)
                //todo output
            })
            .catch(err=>console.error(err));
    }
    render(){
        return(
            <div className = "reg-content">
                <div className = "reg-wrap">
                    <form 
                        className="reg"
                        onSubmit={this.handleSubmit}
                    >
                            <div className="reg__header">
                                <h2>Registration</h2>
                            </div>
                            <label htmlFor="reg__username" className="login__label">Username</label>
                            <br/>
                            <input type="text" id="reg__username" className="login__input"></input>
                            <br/>
                            <label htmlFor="email" className="login__label">email</label>
                            <br/>
                            <input type="email" id="reg__email" className="login__input"></input>
                            <br/>
                            <label htmlFor="reg__password" className="login__label">Password</label>
                            <br/>
                            <input type="password" id="reg__password" className="login__input"></input>
                            <br/>
                            <button 
                                type="submit" 
                                className="reg__button"
                            >Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Registration;