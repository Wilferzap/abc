import React from "react";
import Nav from "../components/nav";
import TextHome from "../components/textHome";

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }} className="tipo">
      <div style={{ width: "100%", maxWidth: "1500px" }}>
        <div className="fondo">
          <div
            // className="row medida"
            style={{ paddingTop: "40px", width: "100%", paddingRight: "0px" }}
          >
            <div>
              <div className="logoName">
                <div className="letraLogo">
                  <h2>Artistic Aye</h2>
                </div>
              </div>
            </div>

            <div>
              <Nav></Nav>
            </div>

            <TextHome></TextHome>
          </div>
        </div>
        <div className="hola">
          <h1>Hola</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
