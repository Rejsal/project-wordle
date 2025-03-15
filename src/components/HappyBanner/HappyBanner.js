import React from "react";
import Banner from "../Banner/Banner";

function HappyBanner({ totalGuesses, handleRestart }) {
  return (
    <Banner type="happy" action={handleRestart} actionText={"Play Again"}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{totalGuesses} guesses</strong>.
      </p>
    </Banner>
  );
}

export default HappyBanner;
