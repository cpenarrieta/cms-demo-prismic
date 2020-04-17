import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-address">Add Address</Link>
        </li>
        <li>
          <Link to="/add-employee">Add Employees</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
