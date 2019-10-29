import React from 'react';
import {Grid, Container, Header, Divider, Segment, Comment} from 'semantic-ui-react'

import Answer from '../containers/Answer';

class Answers extends React.Component{
    render(){
        const {answerIds} = this.props;

        const answers = answerIds.map(id=><Answer key={id} id={id}/>)
        const content = answers.length 
            ? answers
            : <Segment> no content</Segment>
        return(
            <Comment.Group>
                <Header as='h3' dividing style={{paddingTop: '20px'}}>
                    Answers
                </Header>
                    {content}
            </Comment.Group>
        )
    }
}

export default  Answers;