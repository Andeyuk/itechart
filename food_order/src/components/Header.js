import React from 'react';
import {Router, Link} from 'react-router-dom';
import history  from '../history/history';

import './Header.css';

class Header extends React.Component{
render(){
    return(
        <header className = "header">
            <Router history = { history }>
                <Link to="/" className= "nav-link">Home</Link>
                <Link to="/menu" className= "nav-link">Menu</Link>
            </Router>
        </header>
    )
}
}

export default Header;