import React from 'react';
import { Link } from 'react-router-dom';

const getUnauthenticatedUserLinks = () => {
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
        <Link to="/">
          Logout
        </Link>
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
    {props.authenticated ? getUnauthenticatedUserLinks() : null}
  </div>
);

export default NavLinks;
