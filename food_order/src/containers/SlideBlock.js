import React from 'react';
import { connect } from 'react-redux';
import { normalize, schema } from 'normalizr';
import { Dimmer, Loader} from 'semantic-ui-react';

import  * as dishAct  from '../redux/actions/dishActions';



import './SlideBlock.css';

import Dish from './Dish';
import Carousel from './Carousel';

import {DishAPI} from '../API/DishAPI';



class SlideBlock extends React.Component{

    componentDidMount(){

        let limit = 18;
        const dish = new schema.Entity('dishes');

        this.props.fetchDishRequest();
        DishAPI.getPopularDishes(0,limit)
            .then(res=>res.json())
            .then(data=>{
                return normalize(data, new schema.Array(dish));
            })
            .then(res=>{
                this.props.setDishes(res);
                this.props.fetchDishSuccess('OK');
            })
        
    }

    render(){
        console.log("block rendered");

        const {IDs = [], status} = this.props;


        let dishSlides=[];
        for(let i = 0, j = 0; i < IDs.length; i+=6, j++){
            let row = this.props.IDs.slice(i, i + 6).map((id)=>
                <Dish 
                    key = {id}
                    id = {id}
                ></Dish>
            )
            dishSlides.push(
                <div key = {j}
                    className = "slide-block__items-wrap"
                >
                    {row}
                </div>
            )  

        }
        const size = dishSlides.length;
        if (status === 'fetch')
            dishSlides = 
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>
        return(
            <>
                <Carousel
                    size = {size}
                >
                    {dishSlides}
                </Carousel>

            </>
        )
    }
}


const mapStateToProps = store => {
    console.log(store)
    return {
        IDs: store.dish.IDs,
        status: store.dish.status,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setDishes: dishes => dispatch(dishAct.setDishes(dishes)),
        fetchDishRequest: ()=> dispatch(dishAct.fetchDishRequest()),
        fetchDishSuccess: (res)=> dispatch(dishAct.fetchDishSuccess(res)),
        fetchDishFailure: (err)=> dispatch(dishAct.fetchDishFailure(err)),
    }
}

  
export default connect(mapStateToProps, mapDispatchToProps)(SlideBlock);

