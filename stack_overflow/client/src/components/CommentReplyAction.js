import React from 'react';
import ReplyForm from './common/ReplyForm';
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

    
    render = ({isVisible} = this.state) => <>
        <Comment.Action onClick={this.handleReplyClick}>
            Reply
        </Comment.Action>
        {   
            isVisible &&   
            <ReplyForm {...this.props}/>
        }
    </>
}

export default CommentReply;