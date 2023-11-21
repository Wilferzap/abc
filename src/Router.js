import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import AutoresPage from "./pages/autoresPage";
import ErrorPage from "./pages/404";
import HomePage from "./pages/homePage";
import HistoriaPage from "./pages/historiaPage";

const RouterFinal = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" Component={HomePage}></Route>
          <Route exact path="*" Component={ErrorPage}></Route>
          <Route exact path="/autores" Component={AutoresPage}></Route>
          <Route exact path="/historia" Component={HistoriaPage}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default RouterFinal;
