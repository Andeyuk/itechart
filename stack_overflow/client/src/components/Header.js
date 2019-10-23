import React from 'react';
import {
    Menu,
    Container,
    Dropdown,
    Button,
    Modal
} from 'semantic-ui-react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import {Link, Router} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item  header>
                            <Link to='/'>Project Name</Link>
                        </Menu.Item>
                        <Menu.Item as={Link} to='/questions'  header>
                            Questions
                        </Menu.Item>
                
                        <Menu.Item position='right'>
                            <Modal 
                            size='small'
                            trigger = { 
                                <Button as='a' inverted>
                                    Log in
                                </Button>
                            }>
                                <LoginForm/>
                            </Modal>
                            
                            <Modal trigger = { 
                                <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                    Sign Up
                                </Button>
                            }>
                                <RegisterForm/>
                            </Modal>
                            
                        </Menu.Item>
                    </Container>
                </Menu>
                <div style={{height: '48px'}}></div>
            </>
        )
    }
}

export default Header;