import React from 'react';
import {Form, Button} from 'semantic-ui-react';

const ReplyForm = () => (

    <Form reply>
        <Form.TextArea />
        <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            primary
        />
    </Form>
)

export default ReplyForm;