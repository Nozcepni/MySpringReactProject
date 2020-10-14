
import Input from '../components/Input'
import { login } from '../api/apiCalls'
import withApiProgress from '../shared/ApiProgress'
import ButtonWithProgress from '../components/ButtonWithProgress'
import {loginHandler} from '../redux/authActions'
import {connect} from 'react-redux';
import React, { useEffect, useState } from "react";


const UserLoginPage = (props) =>  {


    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState();

    useEffect(()=>{
        setError(null)
    },[username,password])

    const onClickLogin = async (event) => {

        const {history,dispatch} = props
        const { push } = history;
       // const{username,password} = this.state


        event.preventDefault();

        setError(null)

        const creds = {
          username,
          password
        }

        try {
           await dispatch(loginHandler(creds))
           push('/');
        }

        catch (apiError) {

            setError(apiError.response.data.message)
            // this.setState({
            //     error: apiError.response.data.message
            // });
        }

    };

        const {pendingApiCall} = props;

        const isEmpty= username && password;

        return (
            <div className="container">

                <div className="col text-center" style={{ marginBottom: "100px,", marginTop: "20px" }}>
                    <h1> Login</h1>
                </div>

                <Input onChange={(event) =>{
                    setUsername(event.target.value)
                }} 
                name="username" label="Username"></Input>
                <Input onChange={(event)=>{
                    setPassword(event.target.value)
                }} name="password" label="Password" type="password"></Input>

                <div className="text-center">
                { error && <div style={{marginTop:'25px', width:'20%', marginLeft:'450px'}} class="alert alert-danger" role="alert">
                      {error}
                </div>}
                </div>

                <ButtonWithProgress pageName="Login" pendingApiCall={pendingApiCall} onClick ={onClickLogin}></ButtonWithProgress>


            </div>
        )
    
}

const LoginPagewithApiProgress =  withApiProgress(UserLoginPage)

export default connect()(LoginPagewithApiProgress)
 