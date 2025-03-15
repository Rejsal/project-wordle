import React from "react";
import Banner from "../Banner/Banner";

function SadBanner({ word, handleRestart }) {
  return (
    <Banner type="sad" action={handleRestart} actionText={"Try Again"}>
      <p>
        Sorry, the correct answer is <strong>{word}</strong>.
      </p>
    </Banner>
  );
}

export default SadBanner;
