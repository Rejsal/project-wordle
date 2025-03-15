import React, { memo } from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses({ validateGuesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((v) => (
        <Guess key={v} value={validateGuesses[v]} />
      ))}
    </div>
  );
}

export default memo(Guesses);
