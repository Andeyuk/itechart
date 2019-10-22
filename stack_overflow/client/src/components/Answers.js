import React from 'react';
import {Grid, Container, Header, Divider, Segment} from 'semantic-ui-react'
import Answer from './Answer';

class AnswerList extends React.Component{
    render(){
        return(
            <>
                <Header style={{paddingTop: '20px'}}>Answers</Header>
                <Divider></Divider>
                <Grid>
                    <Answer id={1}/>
                    <Answer id={2}/>
                    <Answer id={3}/>
                </Grid>
                
            </>
        )
    }
}

export default  AnswerList;