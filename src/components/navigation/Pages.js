import React from 'react';
import { Link } from 'react-router-dom';

const Pages = () => (
  <div className="navbar">
      <li className="nav-item">
        <Link className="nav-link" to="/new">
          New Story
        </Link>
      </li>
    </div>
);

export default Pages;
