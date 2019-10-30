import React from 'react';
import {Icon, Comment} from 'semantic-ui-react';
import VotePanel from './common/VotePanel';
import CommentReplyAction from './CommentReplyAction';

const CommentComponent = (props) => {
    const {rating, id, username, date, content, renderReplies, toggleForm, ...rest} = props;
    return(
        <Comment>
            <Comment.Content>
                <Comment.Author>
                    <VotePanel rating = {rating} id = {id} {...rest}></VotePanel>
                    <Icon name='user' color='grey' style={{margin: '0'}}></Icon>
                    {username + id}
                </Comment.Author>
                <Comment.Metadata>
                    <div>{date}</div>
                </Comment.Metadata>
                <Comment.Text>
                    {content}
                </Comment.Text>
                <Comment.Actions>
                    <CommentReplyAction />
                </Comment.Actions>
            </Comment.Content>
            {renderReplies}
        </Comment>  
    )
}

export default  CommentComponent;
