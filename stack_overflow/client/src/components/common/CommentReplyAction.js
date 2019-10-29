import React from 'react';
import ReplyForm from '../view/ReplyForm';
import {Comment} from 'semantic-ui-react';

class CommentReply extends React.Component {
    state = {
        isVisible: false
    }

    handleReplyClick = (e) => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    
    render = ({isVisible} = this.state) => <>
        <Comment.Action onClick={this.handleReplyClick}>
            Reply
        </Comment.Action>
        {   
            isVisible &&   
            <ReplyForm onSubmit = {this.handleSubmit}/>
        }
    </>
}

export default CommentReply;