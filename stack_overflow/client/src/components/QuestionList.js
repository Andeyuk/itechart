import React from 'react';
import {Grid, Container, Segment, Header, Menu, Divider} from 'semantic-ui-react'
import Question from './QuestionListItem';

class QuestionList extends React.Component{
    render(){
        const {IdList = [1,2,3]} = this.props;
        const questions =IdList.map(id=><Question key={id} id={id}/>)
        const content = questions.length 
            ? <Grid celled>{questions}</Grid>
            : <Segment> no content</Segment>
        return(
            <Container>
                <Segment>
                    <Header>All Questions</Header>
                    <Menu compact  >
                        <Menu.Item as='a'>Newest</Menu.Item>
                        <Menu.Item as='a'>Active</Menu.Item>
                    </Menu>
                </Segment>
                {content}
            </Container>
        )
    }
}

export default  QuestionList;