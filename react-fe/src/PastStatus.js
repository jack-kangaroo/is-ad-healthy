import React, { useState } from "react";
import FormField from "@cloudscape-design/components/form-field";
import DatePicker from "@cloudscape-design/components/date-picker";

const PastStatus = () => {
  const [value, setValue] = useState("");

  return (
    <div className="past-status">
      <FormField label="Search date">
        <DatePicker
          onChange={({ detail }) => setValue(detail.value)}
          value={value}
          openCalendarAriaLabel={(selectedDate) =>
            "Choose certificate expiry date" + (selectedDate ? `, selected date is ${selectedDate}` : "")
          }
          nextMonthAriaLabel="Next month"
          placeholder="YYYY/MM/DD"
          previousMonthAriaLabel="Previous month"
          todayAriaLabel="Today"
        />
      </FormField>
    </div>
  );
};

export default PastStatus;
