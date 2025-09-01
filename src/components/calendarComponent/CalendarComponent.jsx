import React, { useState } from "react";
import "./calendar-style.css";

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

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <div>
          {monthName} {currentDate.getFullYear()}
        </div>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div className="calendar-day header" key={day}>
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default CalendarComponent;
