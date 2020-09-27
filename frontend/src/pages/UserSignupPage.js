import React, { Component } from 'react'

class UserSignupPage extends Component {

    state={
        username:null,
        displayname:null,
        password:null,
        passwordRepeat:null
    }


    onChange= (event) =>{

        const field = event.target.name
        const value = event.target.value

        this.setState({
            [field]: value
        })

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
                                <input name="password" type="email" className="form-control" id="exampleInputEmail1"  onChange={this.onChange} />
                            </div>

                            <div>
                                <label> Password Repeat</label>
                                <input name="passwordRepeat" type="email" className="form-control" id="exampleInputEmail1"  onChange={this.onChange} />
                            </div>

                            <div className="col text-center" style={{marginTop:'25px'}}>
                                <button type="button" style={{ background: "purple", border: "purple" }} className="btn btn-info">Sign Up</button>
                            </div>

                        </div>



                    </div>


                </form>
            </div>
        )
    }
}

export default UserSignupPage;
