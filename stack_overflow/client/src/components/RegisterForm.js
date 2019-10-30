import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Loader } from 'semantic-ui-react'

class RegisterForm extends React.Component{
    render(){
        const {onSubmit, status, errorMessage} = this.props
        return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Register here
                </Header>
                {   
                    status==='error' &&
                    <Message error>
                        {errorMessage}
                    </Message>
                }
                <Form size='large' onSubmit = {onSubmit}>
                    <Segment stacked>
                        <Form.Input 
                            id='register__user-name'
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='User Name' />
                        <Form.Input 
                            id='register__first-name' 
                            fluid 
                            icon='user outline'
                            iconPosition='left' 
                            placeholder='First Name' />
                        <Form.Input 
                            id='register__last-name' 
                            fluid 
                            icon='user outline'
                            iconPosition='left' 
                            placeholder='Last Name' />
                        <Form.Input 
                            id='register__email' 
                            icon='mail' 
                            fluid 
                            iconPosition='left' 
                            placeholder='E-mail address' />
                        <Form.Input 
                            id='register__seniority' 
                            fluid 
                            icon='time'
                            iconPosition='left' 
                            placeholder='Seniority' />
                        <Form.Input 
                            id='register__working-position' 
                            fluid 
                            icon='briefcase'
                            iconPosition='left' 
                            placeholder='Working Position' />
                        <Form.Input 
                            id='register__password' 
                            fluid 
                            icon='lock' 
                            iconPosition='left'
                            placeholder='Password' />
                
                        <Button type='submit' color='teal' fluid size='large'>
                            Register
                            {
                                status==='loading' &&
                                <Loader as='i' active inline size='tiny'/>
                            }
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