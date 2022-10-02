import React from "react";
import { Link } from "react-router-dom";
const NavBar = ({ login }) => {
  return (
    <div>
      {login ? (
        <ul>
          <li>
            <Link to="/auth">Auth</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/auth">Auth</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
