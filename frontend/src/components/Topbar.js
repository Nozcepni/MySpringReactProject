import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopBar extends Component {

  render() {

    const { isLoggedIn, username, onLogoutSuccess} = this.props
  

    let links = (<ul className="navbar-nav ml-auto">
      <li>
        <Link className="nav-link" to="/login">
          Login
      </Link>
      </li>
      <li>
        <Link className="nav-link" to="/signup">
          Sign Up
      </Link>
      </li>
    </ul>);

    if (isLoggedIn) {
      links = (

        <ul className="navbar-nav mauto ml-auto">

          <Link className="nav-link" to={`/user/${username}`}>
            {username}
          </Link>

          <Link className="nav-link" to="/" onClick={onLogoutSuccess}>
            Logout
          </Link>

        </ul>


      );
    }

    return (
      <div className="shadow-sm bg-light mb-2">
        <nav className="navbar navbar-light container navbar-expand">
          <Link className="navbar-brand" to="/">
            Hoaxify
          </Link>
          {links}

        </nav>
      </div>
    );
  }
}

export default (TopBar);