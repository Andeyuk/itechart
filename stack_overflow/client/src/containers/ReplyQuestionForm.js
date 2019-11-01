import React from 'react';
import {connect} from 'react-redux';
import {Message} from 'semantic-ui-react';
import ReplyFrom from '../components/ReplyForm';

import AnswerActions from '../redux/actions/answers';


class ReplyQuestionFormConnected extends React.Component{
    handleSubmit = (e) =>{
        e.preventDefault();
        const {questionId} = this.props;
        const content = e.target['comment__reply'].value;
        this.props.reply(questionId, content);
    }

    render(){
        const {status, errorMessage, children} = this.props;
        return(
            <>
                {children}
                {   
                    status==='error' &&
                    <Message error>
                        {errorMessage}
                    </Message>
                }
                <ReplyFrom onSubmit = {this.handleSubmit} {...this.props}/>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    const {status, message} = state.answers.status[ownProps.id] || {};
    return{
        status,
        errorMessage: message,
    }
}

const mapDispatchToProps = {
    reply: AnswerActions.answerQuestionRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyQuestionFormConnected);