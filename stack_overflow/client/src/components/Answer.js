import React from 'react';
import {Grid, Header, Segment, Container, Icon, Button, Comment, Form} from 'semantic-ui-react';
import VotePanel from './common/VotePanel';


class Answer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isFormVisible: false
        }
    }

    handleReplyClick = (e) => {
        this.setState(prevState => ({
            isFormVisible: !prevState.isFormVisible
        }));
    }
    

    renderReplies(idList){
        const replies = idList.map(id=><Answer key={id} id={id}/>);
        return replies.length 
            ? <Comment.Group>{replies}</Comment.Group>
            : <></>
    }

    render(){
        const {id=1, rating=0, answers = 0, header = 'Header', content, username = 'admin', answerLevel = 1, repliesIdList = [], ...rest} = this.props;
        const date = new Date().toLocaleString();
        
        const replies = this.renderReplies(repliesIdList);
        return(
            <Comment>
                <Comment.Content>
                    <Comment.Author>
                        <VotePanel rating = {rating} id = {id} {...rest}></VotePanel>
                        <Icon name='user' color='grey' style={{margin: '0'}}></Icon>
                        {username + id}
                    </Comment.Author>
                    <Comment.Metadata>
                        <div>{date}</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Comment.Text>
                    <Comment.Actions>
                        <Comment.Action onClick={this.handleReplyClick}>
                            Reply
                        </Comment.Action>
                        {   
                            //todo
                            //make form container
                            this.state.isFormVisible &&
                            <Form reply>
                                <Form.TextArea />
                                <Button
                                    content='Add Reply'
                                    labelPosition='left'
                                    icon='edit'
                                    primary
                                />
                            </Form>
                        }
                    </Comment.Actions>
                </Comment.Content>
                {replies}
            </Comment>
            
        )
    }
}

export default  Answer;