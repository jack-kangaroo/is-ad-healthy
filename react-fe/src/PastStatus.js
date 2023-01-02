import React, { useEffect, useState } from "react";
import FormField from "@cloudscape-design/components/form-field";
import DatePicker from "@cloudscape-design/components/date-picker";
import Calendar from "@cloudscape-design/components/calendar";

const PastStatus = () => {
  const yourDate = new Date();
  const parseDate = yourDate.toISOString().split("T")[0];

  const [searchDate, setSearchDate] = useState(parseDate);
  const [records, setRecords] = useState([]);

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
      />
    </div>
  );
};

export default PastStatus;
