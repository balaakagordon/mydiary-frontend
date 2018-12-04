import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {logoutAction} from '../../actions/loginActions';

import Pages from './Pages';
// import { logOut } from '../../common/functions';

const username = localStorage.getItem('username');
const loggedIn = localStorage.getItem('token');


const NavigationBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light nav-display">
    <Link className="navbar-brand brown" to="/home">
        MyDiary
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <Pages />
      </ul>
      <ToastContainer />
      <ul className="navbar-nav">
        {loggedIn ? (
          <div className="navbar">
            <li className="nav-item">
              <Link
                className="nav-link dropdown-toggle"
                to="./"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="caret">{username}</span>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to={'/profile'}>
                    Profile
                </Link>
                <div className="dropdown-divider" />
                <button type="button" onClick={logoutAction()} className="dropdown-item">
                  Log out
                </button>
              </div>
            </li>
          </div>
        ) : (
          <button
            className="btn btn-outline-brown margin-4"
            type="button"
            data-toggle="modal"
            data-target="#authModal"
          >
              Login
          </button>
        )}
      </ul>
    </div>
  </nav>
);

export default NavigationBar;
