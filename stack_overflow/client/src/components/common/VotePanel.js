import React from 'react';

import VoteRating from '../view/VoteRating';
import VoteDownIcon from '../view/VoteDownIcon';
import VoteUpIcon from '../view/VoteUpIcon';


class VotePanel extends React.Component{
    state = {
        activeId: null,
    }
    
    handleVoteUpClick = (e, {id, name}) => {
        this.setState({
            active: name
        })
        this.props.voteUp(id);
    }

    handleVoteDownClick = (e, {id, name}) => {
        this.setState({
            active: name
        })
        this.props.voteDown(id);
    }

    render = ({rating, id} = this.props) =>{
        return <>
            <VoteRating rating = {rating}/>
            <VoteUpIcon 
                id = {id}
                isClicked = {this.state.active === 'angle up'}
                onClick={this.handleVoteUpClick}
            ></VoteUpIcon>
            <VoteDownIcon
                id = {id}
                isClicked = {this.state.active === 'angle down'}
                onClick={this.handleVoteDownClick}
            ></VoteDownIcon>
        </>
    }
}

export default VotePanel;
