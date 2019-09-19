import React from 'react';
import {Router, Link} from 'react-router-dom';
import history  from '../history/history';

import './Header.css';
import cartIcon from '../img/shopping-cart.svg'

import Cart from '../containers/Cart';

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
                    <Cart />
                </div>
            </header>
        )
    }
}

export default Header;