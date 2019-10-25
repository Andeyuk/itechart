import React from 'react';
import {Grid, Container, Item, Segment, Form, Header, Divider, Button} from 'semantic-ui-react'
import QuestionHeader from './QuestionHeader';
import Answers from './Answers';

class Question extends React.Component{
    render(){
        const {id} = this.props.match.params || this.props;
        return(
            <Container>
                <QuestionHeader id = {id}/>
               <Container>
                    <Answers id={id}/>
                </Container>
                <Divider></Divider>
                <Form reply style={{marginTop: '20px'}}>
                    <Header>Input Your Answer</Header>
                    <Form.TextArea style={{minHeight: '300px'}}/>
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
            </Container>
        )
    }
}

export default  Question;