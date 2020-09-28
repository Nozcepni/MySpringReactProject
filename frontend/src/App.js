import React, { Component } from 'react'
import UserLoginPage from './pages/UserLoginPage'
import UserSignupPage from './pages/UserSignupPage'


export default class App extends Component {
  render() {
    return (
      <div>
         <UserLoginPage></UserLoginPage>
      </div>
    )
  }
}
