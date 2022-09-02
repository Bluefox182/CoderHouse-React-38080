import React from "react";

// Import Styles
import "../Styles/ResetButton.css";

function ResetButton({ reset }) {
  return (
    <div className="Reset__button">
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ResetButton;
