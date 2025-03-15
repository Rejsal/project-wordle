import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((v) => (
          <span
            key={v}
            className={`cell ${value ? value[v].status : undefined}`}
          >
            {value ? value[v].letter : undefined}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Guess;
