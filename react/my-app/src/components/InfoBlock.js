import React from 'react';
import './InfoBlock.css'

class InfoBlock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
    }

    onClick(){
        this.setState({
            clicked: !this.state.clicked
        })    
    }

    render(){
        return (
            <div className = "info-item" onClick={()=>this.onClick()}>
                <div className = 'info-item__top'>
                    {this.props.value[0]}
                </div>
                <div className = 'info-item__middle'>
                    {this.props.value[1]}
                </div>
                <div className = 'info-item__bottom'>
                    {this.props.value[2]}
                </div>
            </div>
        )
    }
}

export default InfoBlock