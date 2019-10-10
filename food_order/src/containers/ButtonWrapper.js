import React from 'react';
import {compose} from 'redux';
import { connect } from 'react-redux';
import { Loader, Icon} from 'semantic-ui-react';

const ButtonWrapper = Component => props => {
    const {status, text, path, ...rest} = props;
    const mapStateToProps = store => {
        const status = objectPathResolve(store, path)
        return {
            status,
        }
    }
    const button =
    <Component {...rest} >
        {text}
        <Loader 
            active = {status === 'fetch'}
            inline 
            size='tiny'
        >
        </Loader>
        {   
            status === 'success' &&  
            <Icon 
                 name='check'
                color='green'
            />
        }
    </Component>
    return button;
}

export default ButtonWrapper;


function objectPathResolve(obj, path=[]){
    let tmp = obj;
    path.map(el=>
        tmp=tmp[el]
    )
    return tmp;
}