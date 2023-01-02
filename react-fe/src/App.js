import React, { useEffect, useState } from "react";
import CurrentStatus from "./CurrentStatus";
import PastStatus from "./PastStatus";
import "./App.css";
import "@cloudscape-design/global-styles/index.css";

function App() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function getRecords() {
      try {
        const resp = await fetch("/api/records");
        const json = await resp.json();
        setRecords(json);
      } catch (e) {
        console.error(e);
      }
    }
    getRecords();
  }, []);
  console.log(records);
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
