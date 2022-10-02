import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Auth = () => {
  return (
    <div>
      <h1>Auth</h1>
      <ul>
        <li>
          <NavLink to="/auth/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/auth/register">Register</NavLink>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};
export default Auth;
