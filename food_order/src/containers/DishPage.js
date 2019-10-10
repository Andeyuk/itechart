import React from 'react';
import { connect} from 'react-redux';



import 'semantic-ui-css/semantic.min.css';


class DishPage extends React.Component{
    render(){
        return(
            <></>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    const id = ownProps.id;
    const state = store.dish;
    return {
        dish: state.dishes[id],
    }
}

  


export default connect(mapStateToProps, {})(DishPage);