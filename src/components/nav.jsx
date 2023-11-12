import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <input type="checkbox" id="check"></input>
      <label htmlFor="check" className="checkBtn">
        <i className="bi bi-list"></i>
      </label>

      <ul className="mainMenu">
        <li>
          <Link to={"/autores"}>AUTORES</Link>
        </li>

        <li>
          <Link to={"/explore"}>ESTILOS</Link>
        </li>

        <li>
          <Link to={"/explore"}>ANATOMIA</Link>
        </li>

        <li>
          <Link to={"/explore"}>RETRATOS</Link>
        </li>

        <li>
          <Link to={"/explore"}>HISTORIA</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
