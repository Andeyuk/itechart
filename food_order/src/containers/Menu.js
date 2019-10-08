import React from 'react';
import { connect } from 'react-redux';
import {Grid, Container} from 'semantic-ui-react';
import {normalize, schema} from 'normalizr';

import {DishAPI} from '../API/DishAPI';

import * as dishAct from '../redux/actions/dishActions';
import 'semantic-ui-css/semantic.min.css';

import Dish from './Dish';


class Menu extends React.Component{
    componentDidMount(){
        let limit = 30;
        const dish = new schema.Entity('dishes');
    
        DishAPI.getDishes(0,limit)
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
        const dishes = this.props.IDs.map(id=>
            <Dish key={id} id={id}/>
        )
        const GridStyle = {
            backgroundColor: '#282c34'
        };
        return(
            <div className='main__content row'>
                    {dishes}

            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
      IDs: store.dish.IDs || [],
    }
}

const mapDispatchToProps = dispatch => {
    return {
      setDishes: dishes => dispatch(dishAct.setDishes(dishes)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);