import React from 'react';
import {Grid, Container, TextArea, Form, Header, Divider, Button} from 'semantic-ui-react'
import QuestionListItem from './QuestionListItem';
import Answers from './Answers';

class Question extends React.Component{
    render(){
        const {id} = this.props.match.params || this.props;

        return(
            <Container>
                <Grid celled>
                    <QuestionListItem id={id}/>
                </Grid>
                <Container>
                    <Answers id={id}/>
                </Container>
                <Divider></Divider>
                <Form style={{marginTop: '20px'}}>
                    <Header>Input Your Answer</Header>
                    <TextArea style={{minHeight: '300px'}}></TextArea>
                    <Button>Send</Button>
                </Form>
            </Container>
        )
    }
}

export default  Question;