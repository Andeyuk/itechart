import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

class RegisterForm extends React.Component{
    render(){
        return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Register here
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid placeholder='First Name' />
                        <Form.Input fluid placeholder='Last Name' />
                        <Form.Input fluid placeholder='E-mail address' />
                        <Form.Input fluid placeholder='Seniority' />
                        <Form.Input fluid placeholder='Password' />
                
                        <Button color='teal' fluid size='large'>
                            Register
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    Already have an account? <a href='/login'>Log In</a>
                </Message>
            </Grid.Column>
        </Grid>)
    }
}

export default RegisterForm;