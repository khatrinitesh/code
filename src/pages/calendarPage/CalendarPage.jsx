import { useState } from "react";
import CalendarComponent from "../../components/calendarComponent/CalendarComponent";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="calendarPage m-[10px]">
      <div className="innerContent">
        <CalendarComponent onChange={setDate} value={date} />
      </div>
    </div>
  );
};

export default CalendarPage;
