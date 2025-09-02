import { useState } from "react";
import "./calendar-style.css";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaCaretLeft,
  FaCaretRight,
} from "react-icons/fa";

const CalendarComponent = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const daysInMonth = endOfMonth.getDate();

  const startDay = startOfMonth.getDay(); // Sunday = 0

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`} />);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        i === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear();

      days.push(
        <div className={`calendar-day ${isToday ? "today" : ""}`} key={i}>
          {i}
        </div>
      );
    }
    return days;
  };

  const goToFirstMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), 0, 1)); // January
  };

  const goToLastMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), 11, 1)); // December
  };

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  return (
    <div className="calendarWRapper overflow-hidden ">
      <div className="calendar-container  overflow-hidden  p-[2px] md:p-[5px] max-w-[95%] md:max-w-[80%] mx-auto">
        <div className="calendar-header">
          <button className="btnLeft" onClick={goToFirstMonth}>
            <FaAngleDoubleLeft />
          </button>
          <div className="middleBlock flex items-center justify-center">
            <button onClick={prevMonth}>
              <FaCaretLeft />
            </button>
            <div>
              <span className="whitespace-nowrap  text-[var(--color6)] montserrat-regular text-smallSubTitle montserrat-semibold">
                {monthName} {currentDate.getFullYear()}
              </span>
            </div>
            <button onClick={nextMonth}>
              <FaCaretRight />
            </button>
          </div>
          <button className="btnRight" onClick={goToLastMonth}>
            <FaAngleDoubleRight />
          </button>
        </div>
        <div className="calendar-grid">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              className="calendar-day header montserrat-regular text-extraSmallDescription"
              key={day}
            >
              {day}
            </div>
          ))}
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
