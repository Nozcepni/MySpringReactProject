import React, { Component } from 'react'
import Input from '../components/Input'
import { login } from '../api/apiCalls'

import ButtonWithProgress from '../components/ButtonWithProgress'


class UserLoginPage extends Component {

    state = {
        username: null,
        password: null,
        error: null,
    }

  


    onChange = (event) => {

        const { name, value } = event.target

        this.setState({
            [name]: value,
            error:null
        })

    }

    onClickLogin = async (event) => {

        event.preventDefault();

        this.setState({
            error:null
        })

        const creds = {
            username: this.state.username,
            password: this.state.password
        }

        try {
            await login(creds)
        }
        catch (apiError) {
            this.setState({
                error: apiError.response.data.message
            })
        }

    }

    render() {

        const {pendingApiCall} = this.props;

        const { error,username,password } = this.state;

        const isEmpty= username && password;

        return (
            <div className="container">

                <div className="col text-center" style={{ marginBottom: "100px,", marginTop: "20px" }}>
                    <h1> Login</h1>
                </div>

                <Input onChange={this.onChange} name="username" label="Username"></Input>
                <Input onChange={this.onChange} name="password" label="Password" type="password"></Input>

                <div className="text-center">
                { error && <div style={{marginTop:'25px', width:'20%', marginLeft:'450px'}} class="alert alert-danger" role="alert">
                      {error}
                </div>}
                </div>

                <ButtonWithProgress pageName="Login" pendingApiCall={pendingApiCall} onClick ={this.onClickLogin}></ButtonWithProgress>


            </div>
        )
    }
}

export default UserLoginPage
