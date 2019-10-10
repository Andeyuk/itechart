import React from 'react';
import {Router, Link} from 'react-router-dom';
import history  from '../../config/historyConfig';


class LoginForm extends React.PureComponent {
    render(){
        console.log('    user form rendered');
        const {dropdown, size} = this.props;
        let formClassName = 'login';
        let headClassName = 'form__header';

        if (dropdown) {
            formClassName+=` user__drop-down user__drop-down_${size}`;
            headClassName+=` form__header_rectangular`
        }

        return(
            <form 
                className={formClassName}
                onSubmit={this.props.onSubmit}
            >
                <div 
                    className={headClassName}
                >
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
                    <Link to="/auth" className="login__link">Don't have an account?</Link>
                </Router>
            </form>
        )
    }
}

export default LoginForm;