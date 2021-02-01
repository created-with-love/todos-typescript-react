import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 px1">
        <Link to="/" className="brand-logo">
          <img
            src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
            alt="logo"
            width="60"
            height="60"
          ></img>
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">ToDos</Link>
          </li>
          <li>
            <Link to="/about">Information</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
