import React, { Component } from 'react'
import axios from 'axios'

class UserSignupPage extends Component {

    state={
        username:null,
        displayname:null,
        password:null,
        passwordRepeat:null
    }


    onChange= (event) =>{

        const {name,value} = event.target


        this.setState({
            [name]: value
        })

    }

    onClickSignUp = (event) =>{
        event.preventDefault();

       // const body= {...this.state}

       const {username,displayname,password} = this.state

       const body = {
           username,
           displayname,
           password
       }

        axios.post("/api/1.0/users/",body)
    }

    render() {
        return (
            <div>
                <form>

                    <div className="col text-center" style={{ marginBottom: "100px,", marginTop: "20px" }}>
                        <h1> Signup Page</h1>
                    </div>

                    <div className="form-group">
                        <div className="container">
                            <div>
                                <label> Username</label>
                                <input name="username" type="input" className="form-control" id="exampleInputEmail1" onChange={this.onChange} />
                            </div>

                            <div>
                                <label> Displayname</label>
                                <input name="displayname" type="input" className="form-control" id="exampleInputEmail1"  onChange={this.onChange} />
                            </div>

                            <div>
                                <label> Password</label>
                                <input name="password" type="password" className="form-control" id="exampleInputEmail1"  onChange={this.onChange} />
                            </div>

                            <div>
                                <label> Password Repeat</label>
                                <input name="passwordRepeat" type="password" className="form-control" id="exampleInputEmail1"  onChange={this.onChange} />
                            </div>

                            <div className="col text-center" style={{marginTop:'25px'}}>
                                <button onClick={this.onClickSignUp} type="button" style={{ background: "purple", border: "purple" }} className="btn btn-info">Sign Up</button>
                            </div>

                        </div>



                    </div>


                </form>
            </div>
        )
    }
}

export default UserSignupPage;
