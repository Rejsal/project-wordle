import React, { memo, useState } from "react";

function Input({ onSubmit }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(guess);
    setGuess("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id="guess-input"
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="Five letter word"
        type="text"
      />
    </form>
  );
}

export default memo(Input);
