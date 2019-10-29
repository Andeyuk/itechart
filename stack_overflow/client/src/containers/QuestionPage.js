import React from 'react';
import {connect} from 'react-redux';
import {Grid, Container, Item, Segment, Form, Header, Divider, Button, Loader, Message} from 'semantic-ui-react';

import QuestionHeader from '../components/QuestionHeader';
import Answers from '../components/Answers';

import questionActions from '../redux/actions/questions';

class QuestionPage extends React.Component{
    componentDidMount(){
        if (!this.props.header){
            console.log(this.props.loadOne())
        }
    }

    render(){
        const {id} = this.props.match.params || this.props;

        const {answers:answerIds=[]} = this.props.question || {};
        return(
            <Container>
                {
                    this.props.status === 'error' &&
                    <Message error>error</Message>      
                }
                {
                    this.props.status === 'loading' 
                    ?  <Loader active/>
                    : <>
                        <QuestionHeader 
                            id = {id} 
                            {...this.props.question}
                            onError = {this.props.status === 'error' ?  <Message error/> : null}
                            onLoading = {this.props.status === 'loading' ?  <Loader active/> : null}
                        />
                        <Container>
                            <Answers questionId={id} answerIds={answerIds}/>
                        </Container>
                        <Divider></Divider>
                        <Form reply style={{marginTop: '20px'}}>
                            <Header>Input Your Answer</Header>
                            <Form.TextArea style={{minHeight: '300px'}}/>
                            <Button content='Add Answer' labelPosition='left' icon='edit' primary />
                        </Form>
                    </>
                }
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    const {id} = ownProps.match.params;
    const data = state.questions.byId || {}
    return {
        question: data[id],
        status: state.questions.status,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps.match.params;
    return { 
       loadOne: () => dispatch(questionActions.loadOne(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);








