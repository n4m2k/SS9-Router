import React from "react";
import { Link, Outlet } from "react-router-dom";

const Invoices = () => {
  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        <li>
          <Link to="1">Invoices 1</Link>
        </li>
        <li>
          <Link to="2">Invoices 2</Link>
        </li>
        <li>
          <Link to="3">Invoices 3</Link>
        </li>
        <li>
          <Link to="4">Invoices 4</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default Invoices;
