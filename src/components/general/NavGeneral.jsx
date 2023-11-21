import React from "react";
import { Link } from "react-router-dom";

const NavGeneral = () => {
  return (
    <nav className="generalNav">
      <input type="checkbox" id="check"></input>
      <label htmlFor="check" className="checkBtnGeneral">
        <i className="bi bi-list"></i>
      </label>

      <ul className="mainMenu">
        <li>
          <Link to={"/"}>HOME</Link>
        </li>

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
          <Link to={"/historia"}>HISTORIA</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavGeneral;
