import React from 'react';
import Dish from '../components/Dish'
import { connect } from 'react-redux';

import  * as dishAct  from '../actions/dishActions';

import './SlideBlock.css';

class SlideBlock extends React.Component{
    render(){
        console.log("block rendered");
        console.log(this.props.dish.el, this.props.dish.el);
       // if (this.props.dish.isClicked){
          //  this.props.dish.el.style.display = 'none';
          //  this.props.dish.el.nextElementSiblibng.style.display = 'block';

        //}
        let amount = this.props.amount;
        let slides = Array(amount).fill(null).map((slide, ind)=>
            <Dish 
                key = {ind}
                onClick = {this.props.onClick}
            ></Dish>
        )

        return(
            <div className = "slide-block">
                { slides }
            </div>
        )
    }
}

const mapStateToProps = store => {
    console.log(store)
    return {
      dish: store.dish,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onClick: e => dispatch(dishAct.dishOnClick(e)),
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(SlideBlock);

