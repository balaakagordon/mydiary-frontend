import React from 'react';
import { Link } from 'react-router-dom';

const getUnauthenticatedUserLinks = (props) => {
  return (
    <div>
      <li className="navbar-item">
        <Link to="/new">
          New Story
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/profile">
          Profile
        </Link>
      </li>
      <li className="navbar-item nav-auth">
        {/* {props.logOut} */}
        {/* <Link to="/"> */}
          <button
            className="navbar-item logout"
            onClick={props.logOut}>
            Logout
          </button>
        {/* </Link> */}
      </li>
    </div>
  )
}

const NavLinks = (props) => (
  <div className="navbar-item">
    <li className="navbar-icon">
      <Link to="/home">
        MyDiary
      </Link>
    </li>
    {props.authenticated ? getUnauthenticatedUserLinks(props) : null}
  </div>
);

export default NavLinks;
