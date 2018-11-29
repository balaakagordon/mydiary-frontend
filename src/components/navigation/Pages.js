import React from 'react';
import { Link } from 'react-router-dom';

const Pages = () => (
  <div className="navbar">
      <li className="nav-item">
        <Link className="nav-link" to="#">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">
          New Memory
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="./index"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          More
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="#">
            Fashion
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="#">
            Entertainment
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="#">
            Crypto currency
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="#">
            Bitcoin
          </Link>
        </div>
      </li>
    </div>
);

export default Pages;
