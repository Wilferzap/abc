import React from "react";
import Typewriter from "typewriter-effect";

const TituloAnimation = () => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .changeDelay(100)
            .pauseFor(100)
            .typeString()

            .typeString("Are you ready")

            .deleteAll(50)
            .typeString("Aprende a ilustrar")

            .start();
        }}
        options={{
          cursor: null,
        }}
      />

      {/* <Typewriter
        options={{
          strings: ["Are you ready", "Aprende a ilustrar"],
          autoStart: true,
          loop: false,
          cursor: null,
        }}
      /> */}
    </div>
  );
};

export default TituloAnimation;
