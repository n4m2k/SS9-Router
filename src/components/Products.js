import React from "react";
import { Link, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="1">Product 1</Link>
        </li>
        <li>
          <Link to="2">Product 2</Link>
        </li>
        <li>
          <Link to="3">Product 3</Link>
        </li>
        <li>
          <Link to="4">Product 4</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default Products;
