import React, { Component } from 'react'
import { signup } from '../api/apiCalls'
import Input from '../components/Input'

class UserSignupPage extends Component {

    state = {
        username: null,
        displayname: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false,
        errors: {},
        ispasswordMismatch: false
    }


    onChange = (event) => {

        const { name, value } = event.target

        const errors = {...this.state.errors}

        errors[name] = undefined


        this.setState({
            [name]: value,
            errors,
            ispasswordMismatch:false
        })

        if(name === "password" || name=== "passwordRepeat" ){

            if(name==="password" && value !==this.state.passwordRepeat ){
                
                errors.passwordRepeat = "Password Mismatch";
                
                this.setState({
                    ispasswordMismatch:true
                })

            }

            else if(name==="passwordRepeat" && value !==this.state.password ){
                
                errors.passwordRepeat = "Password Mismatch";

                this.setState({
                    ispasswordMismatch:true
                })

            }

        }

    }

    onClickSignUp = async (event) => {

        this.setState({
            pendingApiCall: true
        })

        event.preventDefault();

        const body = { ...this.state }

        try {
            const response = await signup(body)
        }
        catch (error) {
            console.log(error.response.data)
            if(error.response.data.validationErrors){
                this.setState({
                    errors: error.response.data.validationErrors
                })
            }
            
        }

        this.setState({ pendingApiCall: false })

        const {password,passwordRepeat} = this.state


    }

    render() {

        const { pendingApiCall,errors,ispasswordMismatch } = this.state;
        const {username,displayname,password,passwordRepeat} = errors;


        return (
            <div>
                <form>

                    <div className="col text-center" style={{ marginBottom: "100px,", marginTop: "20px" }}>
                        <h1> Sign Up</h1>
                    </div>

                    <div className="form-group">
                        <div className="container">
                           
                            <Input label="Username" name="username" error={username} onChange={this.onChange}></Input>

                            <Input label="Displayname" name="displayname" error={displayname} onChange={this.onChange}></Input>

                            <Input label="Password" type="password" name="password" error={password} onChange={this.onChange}></Input>
                            
                            <Input label="PasswordRepeat" type="password" name="passwordRepeat" error={passwordRepeat} onChange={this.onChange}></Input>

                            

                            <div className="col text-center" style={{ marginTop: '25px' }}>
                                <button disabled={pendingApiCall || ispasswordMismatch} onClick={this.onClickSignUp} type="button" style={{ background: "purple", border: "purple" }} className="btn btn-info ">
                                    {pendingApiCall &&
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
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
