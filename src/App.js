import React from "react";
import "./App.css";
import SVG from "./SVG";

import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Counts in 1s */}
        <Counter />
        {/* Counts in 5s */}

        {/* Counts in 3s */}

        <SVG />
      </header>
    </div>
  );
}

export default App;