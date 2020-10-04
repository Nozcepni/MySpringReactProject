import React, { Component } from 'react'
import UserLoginPage from '../pages/UserLoginPage'
import UserSignupPage from '../pages/UserSignupPage'
import ApiProgress from '../shared/ApiProgress'
import HomePage from '../pages/HomePage'
import UserPage from '../pages/UserPage'
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Topbar from '../components/Topbar'

class App extends React.Component {

  state = {
    isLoggedIn: false,
    username: undefined
  }

  onLoginSuccess = (username) =>{
    this.setState({
      username,
      isLoggedIn:true
    })
  }

  onLogoutSuccess = () =>{
    this.setState({
      username:undefined,
      isLoggedIn:false
    })
  }

 render(){

  const{isLoggedIn,username} = this.state

  return (
    <div>

      <HashRouter>
        <Topbar username={username} isLoggedIn={isLoggedIn} onLogoutSuccess={this.onLogoutSuccess}  />
        <Switch>
          <Route exact path="/" component={HomePage} />
         {!isLoggedIn && <Route path="/login" component={(reactRouterProps) =>{
            return <UserLoginPage {...reactRouterProps} onLoginSuccess={this.onLoginSuccess}  />
          }} />}
          <Route path="/signup" component={UserSignupPage} />
          <Route path="/user/:username" component={UserPage} />
          <Redirect to="/" />

        </Switch>
      </HashRouter>

    </div>
  )
 }

}

export default App
