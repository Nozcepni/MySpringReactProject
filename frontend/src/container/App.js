import React, { Component } from 'react'
import UserLoginPage from '../pages/UserLoginPage'
import UserSignupPage from '../pages/UserSignupPage'
import ApiProgress from '../shared/ApiProgress'
import HomePage from '../pages/HomePage'
import Topbar from '../components/Topbar';
import UserPage from '../pages/UserPage'
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';

class App extends React.Component {

 render(){

  const{isLoggedIn} = this.props

  return (
    <div>
        <HashRouter>
          <Topbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            {!isLoggedIn && <Route path="/login" component={UserLoginPage} />}
            <Route path="/signup" component={UserSignupPage} />
            <Route path="/user/:username" component={UserPage} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>
    </div>
  )
 }

}

const mapStateToProps = store => {
  return {
    isLoggedIn: store.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);
