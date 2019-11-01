import React from 'react';
import {connect} from 'react-redux';
import {Comment} from 'semantic-ui-react';

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
        const {upVotes, downVotes, createdAt:date, username = 'admin', reply:replyIds = [], ...rest} = this.props;
        const rating = upVotes - downVotes;
        const replies = this.renderReplies(replyIds);

        return <CommentComponent rating = {rating} date = {date} username={username} renderReplies={replies} {...rest}/>
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        ...state.replies.byId[ownProps.id]
    }
}


const mapDispatchToProps = {
    ...actionCreators
}


var ConnectedReply =  connect(mapStateToProps, mapDispatchToProps)(Reply);
export default ConnectedReply; 