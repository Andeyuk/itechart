import React from 'react';
import {Grid, Header, Segment, Container, Icon, Button} from 'semantic-ui-react'

class Answer extends React.Component{
    render(){
        const {id, rating=0, answers = 0, header = 'Header', content, username='admin'} = this.props;
        const date = new Date;
        return(
            
                <Grid.Row>
                    <Grid.Column width={16}  verticalAlign='middle'  >
                        {rating}
                        <Icon name='angle up' color='green' style={{margin: '0'}}></Icon>
                        <Icon name='angle down' color='red' style={{margin: '0'}}></Icon>
                        {username}
                        <div> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </div>
                        <Segment vertical style={{padding:'0 0 0 10px', color:'#2185d0'}}>
                            reply
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            
        )
    }
}

export default  Answer;