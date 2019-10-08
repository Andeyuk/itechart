import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route } from 'react-router-dom';
import  history  from './config/historyConfig';

import Main from './components/Main';
import Header from './components/Header';
import Menu from './containers/Menu';
import Registration from './containers/Registration';
import Profile from './containers/Profile'

import * as serviceWorker from './serviceWorker';

import store from './config/storeConfig';
import './reset.css';
import './index.css';



ReactDOM.render(
    <Provider store = { store }>
        <div className="App">
            <Header />
            <Router history = { history }>
                <Route exact path = '/' component = { Main }/>
                <Route path = '/menu' component = { Menu }/>
                <Route path = '/signup' component = { Registration }/>
                <Route path = '/profile' component = { Profile }/>
            </Router>
            <footer className = "footer">Ета футер</footer>
        </div>
    </Provider>,
    document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
