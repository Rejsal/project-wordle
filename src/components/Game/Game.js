import React, { useCallback, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import Guesses from "../Guesses/Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const handleSubmit = useCallback((guess) => {
    setGuesses((prev) => [...prev, guess]);
  }, []);

  return (
    <>
      <Guesses guesses={guesses} />
      <Input onSubmit={handleSubmit} />
    </>
  );
}

export default Game;
