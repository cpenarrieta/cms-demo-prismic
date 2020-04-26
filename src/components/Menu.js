import React from "react";
import { Link } from "react-router-dom";
import { useLocale } from "./LocaleContext";

function Menu() {
  const { locale, setLocale } = useLocale();

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
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <select
            value={locale}
            name="locale-select"
            id="locale-select"
            onChange={(e) => setLocale(e.target.value)}
          >
            <option value="en-us">English</option>
            <option value="es-es">Spanish</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
