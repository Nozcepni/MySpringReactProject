import React, { useEffect, useState } from "react";
import Input from '../components/Input';
import ButtonWithProgress from '../components/ButtonWithProgress';
import withApiProgress from '../shared/ApiProgress';
import { connect } from 'react-redux';
import { signupHandler } from '../redux/authActions';

const UserSignupPage = (props) => {

  const [form,setForm] = useState({
    username: null,
    displayname: null,
    password: null,
    passwordRepeat: null
  })

   const [errors,setErrors] = useState({});

  const onChange = event => {
   
    const { name, value } = event.target;
    const errorsCopy = { ...errors };
    errorsCopy[name] = undefined;
    setErrors(errorsCopy);

    const formCopy= {...form};

    setForm((previousForm)=>({...previousForm,[name]:value}))

  };
 
  const onClickSignup = async event => {

    event.preventDefault();

    console.log("ad")

    const { history, dispatch } = props;
    const { push } = history;

    const { username, displayname, password } = form;

    const body = {
      username,
      displayname,
      password
    };

    try {
      await dispatch(signupHandler(body));
      push('/');
    } catch (error) {
      if (error.response.data.validationErrors) {
        setErrors(error.response.data.validationErrors)
      }
    }
  };

    
    const ispasswordMismatch  = undefined;
    const {username: usernameError ,displayname:displaynameError,password:passwordError} = errors;
    const {pendingApiCall} = props;

    let passwordRepeatError;
    if(form.password!==form.passwordRepeat){
      passwordRepeatError="Password mismatch"
    }

    return (
      <div>
        <form>

          <div className="col text-center" style={{ marginBottom: "100px,", marginTop: "20px" }}>
            <h1> Sign Up</h1>
          </div>

          <div className="form-group">
            <div className="container">

              <Input label="Username" name="username" error={usernameError} onChange={onChange}></Input>

              <Input label="Displayname" name="displayname" error={displaynameError} onChange={onChange}></Input>

              <Input label="Password" type="password" name="password" error={passwordError} onChange={onChange}></Input>

              <Input label="PasswordRepeat" type="password" name="passwordRepeat" error={passwordRepeatError} onChange={onChange}></Input>

              <ButtonWithProgress pageName="Sign Up" pendingApiCall={pendingApiCall} ispasswordMismatch={ispasswordMismatch} onClick={onClickSignup}></ButtonWithProgress>



            </div>

          </div>


        </form>
      </div>
    );
  
}
const UserSignupPageWithApiProgressForSignupRequest = withApiProgress(UserSignupPage);
const UserSignupPageWithApiProgressForAuthRequest = withApiProgress(UserSignupPageWithApiProgressForSignupRequest);

export default connect()(UserSignupPageWithApiProgressForAuthRequest);