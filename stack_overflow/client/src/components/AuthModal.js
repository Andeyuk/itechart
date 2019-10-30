import React from 'react';
import {connect} from 'react-redux';
import {Menu, Modal, Button} from 'semantic-ui-react';
import LoginFormConnected from '../containers/LoginFormConnected';
import RegisterFormConnected from '../containers/RegisterFormConnected';
import AuthActions from '../redux/actions/auth';

class AuthModal extends React.Component{
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
            <Menu.Item position='right'>
                <Modal 
                size='small'
                trigger = { 
                    <Button as='a' inverted>
                        Log in
                    </Button>
                }>
                    <LoginFormConnected />
                </Modal>
                            
                <Modal trigger = { 
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
                    </Button>
                }>
                    <RegisterFormConnected />
                </Modal>
            </Menu.Item>
        )
    }
}



export default AuthModal;