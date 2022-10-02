import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <NavLink to="/home/products">Product</NavLink>
        </li>
        <li>
          <NavLink to="/home/invoices">Invoices</NavLink>
        </li>
        <li>
          <NavLink to="/home/cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/home/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/home/about">About</NavLink>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
