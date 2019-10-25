import React from 'react';

import VoteRating from './VoteRating';
import VoteDownIcon from './VoteDownIcon';
import VoteUpIcon from './VoteUpIcon';


class VotePanel extends React.Component{
    
    handleVoteUpClick = (e, {id}) => {
        this.props.voteUp(id);
    }

    handleVoteDownClick = (e, {id}) => {
        this.props.voteDown(id);
    }

    render = ({rating, id} = this.props) =>
        <>
            <VoteRating rating = {rating}/>
            <VoteUpIcon 
                id = {id}
                onClick={this.handleVoteUpClick}
            ></VoteUpIcon>
            <VoteDownIcon
                id = {id}
                onClick={this.handleVoteDownClick}
            ></VoteDownIcon>
        </>
}

export default VotePanel;
