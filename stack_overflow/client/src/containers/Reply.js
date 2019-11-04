import React from 'react';
import {connect} from 'react-redux';
import {Comment, Message} from 'semantic-ui-react';

import CommentComponent from '../components/CommentComponent';

import actionCreators from '../redux/actions/replies';


class Reply extends React.Component{
    renderReplies(idList){
        const replies = idList.map(id=><ConnectedReply key={id} id={id}/>);
        return replies.length 
            ? <Comment.Group>{replies}</Comment.Group>
            : <></>
    }

    render(){
        const {upVotes, downVotes, createdAt:date, reply:replyIds = [], ...rest} = this.props.reply;
        const {userName} = this.props.user;
        const rating = upVotes - downVotes;
        const replies = this.renderReplies(replyIds);

        return <>
            <CommentComponent rating = {rating} date = {date} username={userName} renderReplies={replies} {...rest}/>
        </>
    }
}

const mapStateToProps = (state, ownProps) =>{
    const reply = state.replies.byId[ownProps.id];
    console.log(reply, state.users.byId)
    return {
        reply,
        user:  state.users.byId[reply.userId],
        errorMessage: state.replies.status[ownProps.questionId]
    }
}


const mapDispatchToProps = {
    voteUp: actionCreators.voteUp,
    voteDown: actionCreators.voteDown,
}


var ConnectedReply =  connect(mapStateToProps, mapDispatchToProps)(Reply);
export default ConnectedReply; 