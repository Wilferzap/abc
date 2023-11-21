import React from "react";
import Typewriter from "typewriter-effect";

const AnimationText = () => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .changeDelay(60)
            .pauseFor(5000)

            .deleteAll(10)
            .typeString(
              " La pagina web donde encontraras todo lo necesario para aprender a ilustrar con un estilo clasico, ademas de encontraras la historia de este arte y bla bla bla...."
            )

            .start();
        }}
        options={{
          cursor: null,
        }}
      />
    </div>
  );
};
export default AnimationText;
