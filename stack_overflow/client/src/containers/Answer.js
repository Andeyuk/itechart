import React from 'react';
import {connect} from 'react-redux';
import {Comment} from 'semantic-ui-react';

import Reply from './Reply';
import CommentComponent from '../components/CommentComponent';
import actionCreators from '../redux/actions/answers';
import AuthService from '../services/authService';

class Answer extends React.Component{
    renderReplies(idList){
        const replies = idList.map(id=><Reply key={id} id={id}/>);
        return replies.length 
            ? <Comment.Group>{replies}</Comment.Group>
            : <></>
    }

    render(){
        const {upVotes, downVotes, createdAt:date, reply:replyIds = [], ...rest} = this.props.answer;
        const {userName, id} = this.props.user;
        const rating = upVotes - downVotes;
        const replies = this.renderReplies(replyIds);
        const isOwner = AuthService.isLogged() && AuthService.getUser().id === id ? true : false;
        return <>
            <CommentComponent rating = {rating} date = {date} username={userName} renderReplies={replies} {...rest} isOwner={isOwner}/>
        </>
    }
}

const mapStateToProps = (state, ownProps) =>{
    const answer = state.answers.byId[ownProps.id];
    const userId = answer.userId;
    return {
        answer: state.answers.byId[ownProps.id],
        user: state.users.byId[userId],
        errorMessage: state.answers.status[ownProps.questionId]
    }
}



export default connect(mapStateToProps)(Answer);