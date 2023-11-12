import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import AutoresPage from "./pages/autoresPage";
import Home from "./pages/home";
import ErrorPage from "./pages/404";

const RouterFinal = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="*" Component={ErrorPage}></Route>
          <Route exact path="/autores" Component={AutoresPage}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default RouterFinal;
