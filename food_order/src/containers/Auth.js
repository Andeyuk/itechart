import React from 'react';
import {Container, Segment, Divider, Grid} from 'semantic-ui-react';


import {AuthAPI} from '../API/AuthAPI';
import LoginForm from '../components/LoginForm';
import RegForm from '../components/RegForm';

class Auth extends React.Component{
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
            <Container>
                <Segment placeholder>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <LoginForm></LoginForm>
                        </Grid.Column>
                        <Grid.Column>
                            <RegForm/>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Or</Divider>
                </Segment>
            </Container>
        )
    }
}

export default Auth;