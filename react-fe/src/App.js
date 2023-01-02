import React, { useEffect, useState } from "react";
import CurrentStatus from "./CurrentStatus";
import PastStatus from "./PastStatus";
import "./App.css";
import "@cloudscape-design/global-styles/index.css";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Is AD Healthy?</h1>
      </header>
      <CurrentStatus />
      <PastStatus />
    </div>
  );
}

export default App;
