import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, Redirect} from 'react-router-dom';
import  history  from './config/historyConfig';

import Main from './components/Main';
import Header from './components/Header';
import Menu from './containers/Menu';
import Auth from './containers/Auth';
import Profile from './containers/Profile';
import DishPage from './containers/DishPage';

import * as serviceWorker from './serviceWorker';

import store from './config/storeConfig';
import './reset.css';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import { AuthAPI } from './API/AuthAPI';

const PrivateRoute = ({ component: Component, ...rest }) => 
    <Route {...rest} render = {
        (props) => (

        AuthAPI.isLogged() === true
            ? <Component {...props} />
            : <Redirect to='/auth' />
    )} />

ReactDOM.render(
    <Provider store = { store }>
        <div className="App">
            <Header />
            <Router history = { history }>
                <Route exact path = '/' component = { Main }/>
                <Route path = '/menu' component = { Menu }/>
                <Route path = '/auth' component = { Auth }/>
                
                <PrivateRoute 
                    path = '/profile' 
                    component = {Profile}
                />
                <Route path = '/dishes/:id' component = { DishPage }/>
            </Router>
            <footer className = "footer">Ета футер</footer>
        </div>
    </Provider>,
    document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
