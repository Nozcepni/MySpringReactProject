import React, { Component } from 'react'
import Input from '../components/Input'
import {login} from '../api/apiCalls'

class UserLoginPage extends Component {

    state={
        username:null,
        password:null,
        isEmpty:true,
    }

    
    onChange = (event)=>{

        const {username,password} = this.state

        const{name,value} = event.target

        this.setState({
            [name] : value 
        })

        if( (username==null || password==null) ){
            this.setState({
                isEmpty:true
            })
        }
        else{
            this.setState({
                isEmpty:false
            })
        }

    }

    onClickLogin = async (event) =>{

        event.preventDefault();

        const creds = {
            username:this.state.username,
            password:this.state.password
        }

        login(creds)

        this.setState({ pendingApiCall: false })

    }

    render() {

        const {isEmpty,pendingApiCall} = this.state

        return (
            <div className="container">

                <div className="col text-center" style={{ marginBottom: "100px,", marginTop: "20px" }}>
                        <h1> Login</h1>
                    </div>

              

                <Input onChange={this.onChange} name="username" label="Username"></Input>
                <Input onChange={this.onChange} name="password" label="Password" type="password"></Input>

                <div className="col text-center">
                    <button onClick={this.onClickLogin} style={{marginTop:"25px",background:"purple",border:"purple"}} className="btn btn-info " disabled={isEmpty}>Login</button>
                </div>

            </div>
        )
    }
}

export default UserLoginPage
