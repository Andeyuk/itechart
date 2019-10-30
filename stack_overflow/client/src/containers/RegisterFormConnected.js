import React from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';

import AuthActions from '../redux/actions/auth';


class RegisterFormConnected extends React.Component{
    handleRegister = (e) =>{
        e.preventDefault();
        const firstName = e.target['register__first-name'].value;
        const lastName = e.target['register__last-name'].value;
        const email = e.target['register__email'].value;
        const seniority = e.target['register__seniority'].value;
        const workingPosition = e.target['register__working-position'].value;
        const userName = e.target['register__user-name'].value;
        const password = e.target['register__password'].value;
        this.props.register(userName, firstName, lastName, email, password, seniority, workingPosition);
    }

    render(){
        return(
            <LoginForm onSubmit = {this.handleSubmit} {...this.props}/>
        )
    }
}

const mapStateToProps = (state) =>{
    const auth = state.auth;
    return{
        status: auth.register.status,
        errorMessage: auth.register.message,
    }
}

const mapDispatchToProps = {
    register: AuthActions.register
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormConnected)