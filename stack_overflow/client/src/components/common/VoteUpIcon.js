import React from 'react';
import {Icon} from 'semantic-ui-react';


const VoteUpIcon = (props) => {
    const {
        isClicked,
        ...rest
    } = props;

    const style = {
        margin: '0',
    }

    return (
        <Icon 
            name = {'angle up'}
            style = {style}
            color = {isClicked ? 'green' : 'grey'}
            {...rest}
        />
    )
}

export default VoteUpIcon;