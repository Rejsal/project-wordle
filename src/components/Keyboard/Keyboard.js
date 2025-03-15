import React, { memo, useMemo } from "react";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

// The same letter might have multiple matched statuses.
// For example, if the answer is "APPLE" and the user guesses
// "PAPER", then the letter "P" is misplaced (for the first P)
// and correct (for the second P).
//
// We want to prioritize the statuses in this order:
const STATUS_RANKS = {
  correct: 1,
  misplaced: 2,
  incorrect: 3,
};

const getStatusByLetter = (validatedGuesses) => {
  console.log({ validatedGuesses });
  const statusObj = {};
  // `.flat()` is a method that flattens nested arrays.
  // Here it produces an array containing all of the letter/status
  // objects for each guess.
  const allLetters = validatedGuesses.flat();

  console.log({ allLetters });

  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter];

    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

    const currentStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status;
    }
  });

  console.log({ statusObj });
  return statusObj;
};

const Keyboard = ({ validatedGuesses }) => {
  const statusByLetter = useMemo(
    () => getStatusByLetter(validatedGuesses),
    [validatedGuesses]
  );

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <div
              key={letter}
              className={`letter ${statusByLetter[letter] || ""}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default memo(Keyboard);
