import React, { useEffect, useState } from "react";


const CurrentStatus = () => {
  const [healthy, setHealthy] = useState([]);
  useEffect(() => {
    async function getRecords() {
      try {
        const resp = await fetch("/api/records/today");
        const json = await resp.json();
        setHealthy(json.records["healthy"]);
      } catch (e) {
        console.error(e);
      }
    }
    getRecords();
  }, []);


  return (
    <div className="current-status">
      { healthy ? "YES" : "NO" }
    </div>
  );
};

export default CurrentStatus;
