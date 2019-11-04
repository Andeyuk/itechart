import React from 'react';
import {Icon, Comment, Message} from 'semantic-ui-react';
import VotePanel from './common/VotePanel';
import CommentReplyAction from './CommentReplyAction';

const CommentComponent = (props) => {
    const {rating, id, username, date, content, renderReplies, questionId, status, errorMessage, isOwner, ...rest} = props;
    return(
        <Comment>
            {   
                status === 'error' &&
                <Message error> {errorMessage}</Message>
            }
            <Comment.Content>
                <Comment.Author>
                    {
                        isOwner &&
                        <Icon name='star' color='grey' style={{margin: '0'}}></Icon>
                    }
                    <VotePanel rating = {rating} id = {id} {...rest}></VotePanel>
                    <Icon name='user' color='grey' style={{margin: '0'}}></Icon>
                    {username}
                </Comment.Author>
                <Comment.Metadata>
                    <div>{date}</div>
                </Comment.Metadata>
                <Comment.Text>
                    {content}
                </Comment.Text>
                <Comment.Actions>
                    <CommentReplyAction questionId={questionId} id={id} status = {status}/>
                </Comment.Actions>
            </Comment.Content>
            {renderReplies}
        </Comment>  
    )
}

export default  CommentComponent;
