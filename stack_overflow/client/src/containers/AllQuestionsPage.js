import React from 'react';
import {connect} from 'react-redux';
import {Grid, Container, Segment, Header, Menu, Divider, Loader} from 'semantic-ui-react'
import Question from './Question';

import actionCreators from '../redux/actions/questions';

class QuestionsPage extends React.Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        const {Ids = []} = this.props;
        const questions = Ids.map(id=><Question key={id} id={id}/>)
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
                {   this.props.status === 'loading' 
                        ? <Loader active></Loader>
                        : content
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
       Ids: state.questions.Ids,
       status: state.questions.status
    }
}

const mapDispatchToProps = {
    load: actionCreators.load
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);