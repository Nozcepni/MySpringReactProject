import React, { Component } from 'react'
import Input from '../components/Input'
import { login } from '../api/apiCalls'

class UserLoginPage extends Component {

    state = {
        username: null,
        password: null,
        error: null
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

        const { pendingApiCall,error,username,password } = this.state

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

                <div className="col text-center">
                    <button onClick={this.onClickLogin} style={{ marginTop: "25px", background: "purple", border: "purple" }} className="btn btn-info " disabled={!isEmpty}>Login</button>
                </div>


            </div>
        )
    }
}

export default UserLoginPage
