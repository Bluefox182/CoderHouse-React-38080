import React, { useState } from "react";

// Import Styles
import "../Styles/Counter.css";

// Import Icons
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// Import Button
import ResetButton from "./ResetButton";

function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(1);
  };

  return (
    <div>
      <div className="Counter">
        <RemoveCircleOutlineIcon
          className="Counter__icon"
          onClick={decrement}
        />
        <p className="Counter__number">{count}</p>
        <AddCircleOutlineIcon className="Counter__icon" onClick={increment} />
      </div>
      <ResetButton reset={reset} />
    </div>
  );
}

export default Counter;
