import React from "react";
import Typewriter from "typewriter-effect";

const TextAnimationAutores = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .changeDelay(100)
            .pauseFor(100)
            // .typeString()

            .typeString("Historia de la ilustracion ")

            .start();
        }}
        options={{
          cursor: null,
        }}
      />
    </div>
  );
};

export default TextAnimationAutores;
