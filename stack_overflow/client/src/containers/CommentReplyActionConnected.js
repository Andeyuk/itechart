import React from 'react';
import {connect} from 'react-redux';
import CommentReplyAction from '../components/CommentReplyAction';

import AnswerActions from '../redux/actions/answers';


class CommentReplyActionConnected extends React.Component{
    handleSubmit = (e) =>{
        e.preventDefault();
        // const login = e.target['login__login'].value;
        // const password = e.target['login__password'].value;
        this.props.createReply(QuestionId, content, parentId);
    }

    render(){
        return(
            <CommentReplyAction onSubmit = {this.handleSubmit} {...this.props}/>
        )
    }
}

const mapStateToProps = (state) =>{
    const auth = state.auth;
    return{
        status: auth.login.status,
        errorMessage: auth.login.message,
    }
}

const mapDispatchToProps = {
    login: AnswerActions.createReply
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentReplyAction)