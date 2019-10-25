import React from 'react';

/**
 * @param  beforeClick   object props before triggering click action (ex: {color: red})
 * @param  afterClick    object props after triggering click action,
*/
const withOnClick = (WrappedComponent, injectProps, beforeClick, afterClick) => {
    return class withOnClick extends React.Component{
        constructor(props){
            super(props)
            this.state={
               isClicked: 'false' 
            }
        }

        handleOnClick = (e) => {
            this.setState(prevState => ({
                isClicked: !prevState.isClicked
            }))

            if (this.props.onClick) this.props.onClick(e, this.props)
        }

        render = (isClicked = this.state.isClicked) => 
            <WrappedComponent 
                {...injectProps} 
                {...this.props} 
                {...isClicked ? beforeClick : afterClick}
                onClick = {this.handleOnClick}
            />
    }
}

export default withOnClick;