import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link } from "react-router-dom";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: "Appointment with Dr. Smith",
    start: new Date(),
    end: new Date(new Date().getTime() + 60 * 60 * 1000),
  },
  {
    title: "Dental Checkup",
    start: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
    end: new Date(new Date().getTime() + 3 * 60 * 60 * 1000),
  },
  {
    title: "Follow-up Appointment",
    start: new Date(new Date().getTime() + 4 * 60 * 60 * 1000),
    end: new Date(new Date().getTime() + 5 * 60 * 60 * 1000),
  },
];

const AppointmentCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(Views.MONTH); // <-- Add this line

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-end mb-4">
        <Link
          to="/add-appointment"
          className="btn-secondary"
        >
          Book Appointment
        </Link>
      </div>

      <div style={{ height: "80vh" }}>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day", "agenda"]}
          view={view} // <-- Control the current view
          onView={(newView) => setView(newView)} // <-- Update on view change
          date={date}
          onNavigate={(newDate) => setDate(newDate)}
          style={{ height: "100%", backgroundColor: "white" }}
        />
      </div>
    </div>
  );
};

export default AppointmentCalendar;
