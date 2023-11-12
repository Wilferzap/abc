import React from "react";
import AnimationText from "./animationText";
import TituloAnimation from "./tituloAnimation";

const TextHome = () => {
  return (
    <div className="aside">
      <div className="tipo2">
        <h1 className="tituloAside">
          <TituloAnimation></TituloAnimation>
        </h1>

        <h4 className="textAside">
          <AnimationText></AnimationText>
        </h4>
      </div>
    </div>
  );
};

export default TextHome;
