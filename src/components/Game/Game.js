import React, { useCallback, useMemo, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import Guesses from "../Guesses/Guesses";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Keyboard from "../Keyboard/Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("active");

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("active");
  }

  const handleSubmit = useCallback(
    (guess) => {
      const nextGuesses = [...guesses, guess];
      setGuesses(nextGuesses);

      if (guess.toUpperCase() === answer) {
        setGameStatus("won");
      } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameStatus("lost");
      }
    },
    [guesses, answer]
  );

  const validatedGuesses = useMemo(
    () => guesses.map((guess) => checkGuess(guess, answer)),
    [guesses, answer]
  );

  return (
    <>
      <Guesses validateGuesses={validatedGuesses} />
      <Input gameStatus={gameStatus} onSubmit={handleSubmit} />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === "won" && (
        <HappyBanner
          totalGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === "lost" && (
        <SadBanner word={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
