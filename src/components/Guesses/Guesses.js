import React, { memo } from "react";

function Guesses({ guesses = [] }) {
  return (
    <div className="guess-results">
      {guesses.map((v) => (
        <p key={`${v}${crypto.randomUUID()}`} className="guess">
          {v}
        </p>
      ))}
    </div>
  );
}

export default memo(Guesses);
