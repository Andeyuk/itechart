import React from 'react';
import { connect } from 'react-redux';
import  * as pageAct  from '../actions/pageActions';
import { Router, Route } from 'react-router-dom';
import  history  from '../history/history';

import Main from '../components/Main';
import Header from '../components/Header';


import './App.css';

class App extends React.Component{
  render(){
    console.log("app rendered");
    return (
      <div className="App">
        <Header />
        <Router history = { history }>
            <Route exact path = '/' component = { Main }/>
        </Router>
        <footer className = "footer">Ета футер</footer>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    got: store.App,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTest: () => dispatch(pageAct.test()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
