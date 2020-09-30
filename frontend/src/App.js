import React, { Component } from 'react'
import UserLoginPage from './pages/UserLoginPage'
import UserSignupPage from './pages/UserSignupPage'
import ApiProgress from './shared/ApiProgress'


export default class App extends Component {
  render() {
    return (
      <div>
         <ApiProgress>
           <UserSignupPage></UserSignupPage>
         </ApiProgress>
      </div>
    )
  }
}
