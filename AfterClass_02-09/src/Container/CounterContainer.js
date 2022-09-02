import React from "react";

// Import Styles
import "../Styles/CounterContainer.css";

// Import Components
import Counter from "../Components/Counter";

// Import Icons
import AlarmAddIcon from "@mui/icons-material/AlarmAdd";

function CounterContainer() {
  return (
    <div className="Counter-Container">
      <h1>Mi Contador</h1>
      <div className="Counter__icon">
        <AlarmAddIcon />
      </div>

      <div className="Counter__button">
        <Counter />
      </div>
    </div>
  );
}

export default CounterContainer;
