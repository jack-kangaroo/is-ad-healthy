import React, { useEffect, useState } from "react";
import FormField from "@cloudscape-design/components/form-field";
import DatePicker from "@cloudscape-design/components/date-picker";
import Calendar from "@cloudscape-design/components/calendar";

const PastStatus = () => {
  const yourDate = new Date();
  const parseDate = yourDate.toISOString().split("T")[0];

  const [searchDate, setSearchDate] = useState(parseDate);
  const [records, setRecords] = useState([]);
  const clickedRecord = records.find(({ date }) => date == searchDate);

  useEffect(() => {
    async function getRecords() {
      try {
        const resp = await fetch("/api/records/");
        const json = await resp.json();
        setRecords(json.records);
      } catch (e) {
        console.error(e);
      }
    }
    getRecords();
  }, []);

  function dateFilter(date) {
    const dateString = date.toISOString().split("T")[0];
    // object destruction below:
    return records.find(({ date }) => date == dateString);
  }
  return (
    <div className="past-status">
      <FormField label="Search date">
        <DatePicker
          onChange={({ detail }) => setSearchDate(detail.value)}
          value={searchDate}
          openCalendarAriaLabel={(selectedDate) =>
            "Choose certificate expiry date" + (selectedDate ? `, selected date is ${selectedDate}` : "")
          }
          nextMonthAriaLabel="Next month"
          placeholder="YYYY/MM/DD"
          previousMonthAriaLabel="Previous month"
          todayAriaLabel="Today"
        />
      </FormField>
      <Calendar
        onChange={({ detail }) => setSearchDate(detail.value)}
        value={searchDate}
        nextMonthAriaLabel="Next month"
        previousMonthAriaLabel="Previous month"
        todayAriaLabel="Today"
        isDateEnabled={dateFilter}
      />
      {clickedRecord && (
        <ul>
          <li>Is healthy: {clickedRecord.healthy ? "Yes" : "No"}</li>
          <li>Injury location: {clickedRecord.type}</li>
          <li>Date Selected: {clickedRecord.date}</li>
        </ul>
      )}
    </div>
  );
};

export default PastStatus;
