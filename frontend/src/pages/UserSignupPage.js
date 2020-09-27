import React, { Component } from 'react'
import {signup} from '../api/apiCalls'

class UserSignupPage extends Component {

    state = {
        username: null,
        displayname: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false
    }


    onChange = (event) => {

        const { name, value } = event.target


        this.setState({
            [name]: value
        })

    }

    onClickSignUp = async (event) => {

        this.setState({
            pendingApiCall:true
        })

        event.preventDefault();

        const body = { ...this.state }

        try{
            const response = await signup(body)
        }
        catch (error){

        }
 
        this.setState({pendingApiCall:false})

    }

    render() {

        const {pendingApiCall} = this.state

        return (
            <div>
                <form>

                    <div className="col text-center" style={{ marginBottom: "100px,", marginTop: "20px" }}>
                        <h1> Sign Up</h1>
                    </div>

                    <div className="form-group">
                        <div className="container">
                            <div>
                                <label> Username</label>
                                <input name="username" type="input" className="form-control" id="exampleInputEmail1" onChange={this.onChange} />
                            </div>

                            <div>
                                <label> Displayname</label>
                                <input name="displayname" type="input" className="form-control" id="exampleInputEmail1" onChange={this.onChange} />
                            </div>

                            <div>
                                <label> Password</label>
                                <input name="password" type="password" className="form-control" id="exampleInputEmail1" onChange={this.onChange} />
                            </div>

                            <div>
                                <label> Password Repeat</label>
                                <input name="passwordRepeat" type="password" className="form-control" id="exampleInputEmail1" onChange={this.onChange} />
                            </div>

                            <div className="col text-center" style={{ marginTop: '25px' }}>
                                <button disabled={pendingApiCall} onClick={this.onClickSignUp} type="button" style={{ background: "purple", border: "purple" }} className="btn btn-info ">
                                   { pendingApiCall &&
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                    Sign Up
                                    </button>
                            </div>

                        </div>



                    </div>


                </form>
            </div>
        )
    }
}

export default UserSignupPage;
