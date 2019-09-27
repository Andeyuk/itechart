import React from 'react';
import {Router, Link} from 'react-router-dom';
import history  from '../history/history';

import './Header.css';

import Cart from '../containers/Cart';
import User from '../containers/User';

class Header extends React.Component{
    render(){
        return(
            <header className = "header">
                <div className = "header__inner">
                    <nav className = "nav">
                        <Router history = { history }>
                            <Link to="/" className= "nav__link">Home</Link>
                            <Link to="/menu" className= "nav__link">Menu</Link>
                        </Router>
                    </nav>
                    <div className = "header__left">
                        <Cart />
                        <User />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;