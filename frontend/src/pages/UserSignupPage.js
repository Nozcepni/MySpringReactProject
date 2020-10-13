import React from 'react';
import Input from '../components/Input';
import ButtonWithProgress from '../components/ButtonWithProgress';
import withApiProgress from '../shared/ApiProgress';
import { connect } from 'react-redux';
import { signupHandler } from '../redux/authActions';

class UserSignupPage extends React.Component {
  state = {
    username: null,
    displayname: null,
    password: null,
    passwordRepeat: null,
    errors: {}
  };

  onChange = event => {
    const { t } = this.props;
    const { name, value } = event.target;
    const errors = { ...this.state.errors };
    errors[name] = undefined;
    if (name === 'password' || name === 'passwordRepeat') {
      if (name === 'password' && value !== this.state.passwordRepeat) {
        errors.passwordRepeat = 'Password mismatch';
      } else if (name === 'passwordRepeat' && value !== this.state.password) {
        errors.passwordRepeat = 'Password mismatch';
      } else {
        errors.passwordRepeat = undefined;
      }
    }
    this.setState({
      [name]: value,
      errors
    });
  };

  onClickSignup = async event => {

    event.preventDefault();

    console.log("ad")

    const { history, dispatch } = this.props;
    const { push } = history;

    const { username, displayname, password } = this.state;

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
        this.setState({ errors: error.response.data.validationErrors });
      }
    }
  };

  render() {
    
    const { errors,ispasswordMismatch } = this.state;
    const {username,displayname,password,passwordRepeat} = errors;
    const {pendingApiCall} = this.props;

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

              <ButtonWithProgress pageName="Sign Up" pendingApiCall={pendingApiCall} ispasswordMismatch={ispasswordMismatch} onClick={this.onClickSignup}></ButtonWithProgress>



            </div>

          </div>


        </form>
      </div>
    );
  }
}
const UserSignupPageWithApiProgressForSignupRequest = withApiProgress(UserSignupPage);
const UserSignupPageWithApiProgressForAuthRequest = withApiProgress(UserSignupPageWithApiProgressForSignupRequest);

export default connect()(UserSignupPageWithApiProgressForAuthRequest);