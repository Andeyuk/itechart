import React from 'react';
import { connect } from 'react-redux';
import { normalize, schema } from 'normalizr';

import  * as dishAct  from '../redux/actions/dishActions';


import './SlideBlock.css';

import Dish from './Dish';
import Carousel from './Carousel';

import {DishAPI} from '../API/DishAPI';



class SlideBlock extends React.Component{

    componentDidMount(){

        let limit = 18;
        const dish = new schema.Entity('dishes');

        DishAPI.getPopularDishes(0,limit)
            .then(res=>res.json())
            .then(data=>{
                return normalize(data, new schema.Array(dish));
            })
            .then(res=>{
                console.log(res)
                this.props.setDishes(res);
            })
        
    }

    render(){
        console.log("block rendered");

        const {IDs = []} = this.props;


        let tmp=[];
        for(let i = 0, j = 0; i < IDs.length; i+=6, j++){
            let row = this.props.IDs.slice(i, i + 6).map((id)=>
                <Dish 
                    key = {id}
                    id = {id}
                ></Dish>
            )
            tmp.push(
                <div key = {j}
                    className = "slide-block__items-wrap"
                >
                    {row}
                </div>
            )  

        }
        const size = tmp.length;

        return(
            <>
                <Carousel
                    size = {size}
                >
                    {tmp}
                </Carousel>

            </>
        )
    }
}


const mapStateToProps = store => {
    console.log(store)
    return {
      IDs: store.dish.IDs,
    }
}


const mapDispatchToProps = dispatch => {
    return {
      setDishes: dishes => dispatch(dishAct.setDishes(dishes)),
    }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(SlideBlock);

