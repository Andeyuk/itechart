import React from 'react';
import {Grid, Header, Segment, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class QuestionHeader extends React.Component{
    render(){
        const {id, rating=0, header = 'Header', content, username='admin'} = this.props;
        const date = new Date;

        return(
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={2} textAlign='center' verticalAlign='middle'>
                        <div className = 'flex-column_centered'>
                            <Icon name='angle up' style={{margin:0}} size='big'></Icon>
                            <div>{rating}</div>
                            <Icon name = 'angle down' style={{margin:0}} size='big'/>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Header size='medium' >
                            <Link to={`/questions/${id}`}>{header}</Link>
                        </Header>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </div>
                        <Grid>
                            <Grid.Column textAlign='right'>
                                <div>by {username}</div>
                                <div>at {date.toLocaleString()}</div>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default  QuestionHeader;