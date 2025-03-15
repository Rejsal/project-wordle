import React from "react";

function Banner({ type, action, actionText, children }) {
  const className = type === "happy" ? "happy banner" : "sad banner";
  return (
    <div className={className}>
      {children}
      {action && <button onClick={action}>{actionText}</button>}
    </div>
  );
}

export default Banner;
