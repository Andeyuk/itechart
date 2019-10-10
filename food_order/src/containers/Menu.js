import React from 'react';
import { connect} from 'react-redux';
import {Menu, Pagination, Input, Container} from 'semantic-ui-react';
import {normalize, schema} from 'normalizr';

import {DishAPI} from '../API/DishAPI';

import * as dishAct from '../redux/actions/dishActions';

import Dish from './Dish';


class DishMenu extends React.Component{
    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.fetchDishes = this.fetchDishes.bind(this);
    }

    componentDidMount(){
        this.fetchDishes();    
    }

    fetchDishes(visibleAmount, currPage){
        const pageLimit = visibleAmount || this.props.visibleAmount;
        const pageInd = currPage || this.props.currPage;//goes from 1
        const offset = (pageInd - 1)*pageLimit;

        const dish = new schema.Entity('dishes');
    
        DishAPI.getDishes(offset, pageLimit)
            .then(res=>res.json())
            .then(data=>{
                return normalize(data, new schema.Array(dish));
            })
            .then(res=>{
                this.props.setDishes(res);
            }) 
    }

    handleItemClick(event, {name}){
        if(+name)
            this.props.setVisibleAmount(+name)
        this.props.setVisibleAmount(name)
        this.fetchDishes(name);

    }

    handlePageChange(e, {activePage}){
        this.props.setCurrentPage(activePage);
        this.fetchDishes(null, activePage);
    }

    render(){
        console.log('menu render');
        const dishes = this.props.IDs.map(id=>
            <Dish key={id} id={id} widthRatio={1/4*100}/>
        )
        const {visibleAmount, currPage} = this.props;
        return(
            <div className='main__content'>
                <Menu >
                    <Menu.Item
                        name='20'
                        active={visibleAmount === '20'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='50'
                        active={visibleAmount === '50'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='100'
                        active={visibleAmount === '100'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='all'
                        active={visibleAmount === 'all'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <div className="row">
                    {dishes}
                </div>
                <Container>
                    <Pagination
                        activePage={currPage}
                        onPageChange={this.handlePageChange}
                        totalPages={25}
                    />
                </Container>
            </div>
        )
    }
}

const mapStateToProps = store => {
    const {visibleAmount, currPage} = store.dish.pagination;
    return {
      IDs: store.dish.IDs || [],
      visibleAmount,
      currPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
      setDishes: dishes => dispatch(dishAct.setDishes(dishes)),
      setCurrentPage: ind => dispatch(dishAct.setCurrentPage(ind)),
      setVisibleAmount: amount => dispatch(dishAct.setVisibleAmount(amount)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishMenu);