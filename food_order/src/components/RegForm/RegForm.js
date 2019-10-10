import React from 'react';
import './RegForm.css';
import {Loader, Icon, Button} from 'semantic-ui-react';
import ButtonWrapper from '../../containers/ButtonWrapper';
import {connect} from 'react-redux';

class RegForm extends React.Component{
    
    render(){

        const status = this.props.status;
        return(
            <div className = "reg-wrap">
                <form 
                    className="reg"
                    onSubmit={this.handleSubmit}
                >
                    <div className="form__header">
                        <h2>Register</h2>
                    </div>
                        <label 
                            htmlFor="reg__username" 
                            className="login__label"
                        >first name</label>
                        <br/>
                        <input 
                            type="text" 
                            id="reg__first-name" 
                            className="login__input"
                            required
                        ></input>
                        <br/>
                        <label 
                            htmlFor="reg__last-name" 
                            className="login__label"
                        >last name</label>
                        <br/>
                        <input 
                            type="text" 
                            id="reg__username" 
                            className="login__input"
                            required
                        ></input>
                        <br/>
                        <label 
                            htmlFor="reg__email" 
                            className="login__label"
                        >email</label>
                        <br/>
                        <input 
                            type="email" 
                            id="reg__email" 
                            className="login__input"
                            required
                        ></input>
                        <br/>
                        <br/>
                        <label 
                            htmlFor="reg__tel" 
                            className="login__label"
                        >telephone</label>
                        <br/>
                        <input 
                            type="tel" 
                            id="reg__tel" 
                            className="login__input"
                            placeholder="375 XX XXXXXXX"
                            pattern="375 [0-9]{2} [0-9]{7}"
                            required
                        ></input>
                        <br/>
                        <label 
                            htmlFor="reg__password" 
                            className="login__label"
                        >Password</label>
                        <br/>
                        <input 
                            type="password" 
                            id="reg__password" 
                            className="login__input"
                            required
                        ></input>
                        <br/>
                        {ButtonWrapper(Button)({status:'fetch', text:"signUP"})}
                        
                </form>
            </div>
        )
    }
}

export default RegForm;


/*<button 
                            type="submit" 
                            className="reg__button"
                        >Sign Up
                        <Loader 
                                active = {status === 'fetch'}
                                inline 
                                size='tiny'
                            >
                            </Loader>

                            {status === 'success' && 
                                <Icon 
                                    name='check'
                                    color='green'
                                />
                            }
                        </button>*/