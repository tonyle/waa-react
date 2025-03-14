import React from 'react';
import 'react-router';
import {Link} from "react-router";

const Header = () => {

  return (
    <nav>
      <header className="header">
        <h1>React</h1>
          <ul>
              <li>
                  <Link to="/">My Posts</Link>
              </li>

              <li>
                  <Link to="/create"> Create a Post </Link>
              </li>

          </ul>
      </header >
    </nav>
  );

};

export default Header;
