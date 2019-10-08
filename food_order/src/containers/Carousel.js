import React from 'react';
import { connect } from 'react-redux';

import * as carouselAct from '../redux/actions/carouselActions';

import arrLeft from '../img/left-arrow.svg';
import arrRight from '../img/right-arrow.svg';

import './Carousel.css';

class Carousel extends React.PureComponent{
    constructor(props){
        super(props)
        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide(event){
        let dir = +event.target.dataset.direction;
        let {current} = this.props.carousel;
        const size = this.props.size;

        dir = (dir + current <  size) ? dir + current : 0;
        dir = dir >= 0 ? dir : size - 1;

        this.props.setCurrent(dir);
    }

    render(){
        console.log('carousel rendered');
        const blockShiftStyle ={
            right: `${100*this.props.carousel.current}%`,
        }

        const slides = this.props.children.map((child, i)=>
            <div key = {i}
                className = "slide-block__items-wrap"
                style = {blockShiftStyle}
            >
                {child}
            </div>)
        return(
            <div 
                className = "carousel"
            >
                <div className = "carousel__current">
                    {slides}
                </div>

                <div 
                    className = "carousel__arrow-left"
                    data-direction = {-1}
                    onClick = {this.nextSlide}
                >
                    <img 
                        src = {arrLeft}
                        alt = "left"
                        data-direction = {-1}
                    >
                    </img>
                </div>
                    
                <div 
                    className = "carousel__arrow-right"
                    onClick = {this.nextSlide}
                    data-direction = {1}
                >
                    <img 
                        src = {arrRight} 
                        alt = "right"
                        data-direction = {1}
                    >
                    </img>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
      carousel: store.carousel,
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      setCarouselSize: (sz) => dispatch(carouselAct.setCarouselSize(sz)),
      setCurrent: (el) => dispatch(carouselAct.setCurrent(el)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);