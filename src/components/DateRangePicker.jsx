import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CalendarDays } from "lucide-react";

const DatePicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const calendarRef = useRef();

  const handleSelect = (ranges) => {
    setRange([ranges.selection]);
    // Close calendar after selecting
    setShowCalendar(false);
  };

  // Close calendar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={calendarRef}>
        <div className="bg-primary/10 p-3  absolute" >
        <CalendarDays className=" text-primary " size={20} />
        </div>
        <input
          type="text"
          readOnly
          value={`${format(range[0].startDate, "MMM d, yyyy")} - ${format(
            range[0].endDate,
            "MMM d, yyyy"
          )}`}
          onClick={() => setShowCalendar(!showCalendar)}
          className="border pl-12 border-gray-300 px-3 py-2 rounded-md shadow-sm cursor-pointer w-[300px]"
        />

        {showCalendar && (
          <div className="absolute top-full mt-2 z-50 right-0 bg-white shadow-lg rounded">
            <DateRange
              editableDateInputs={true}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              ranges={range}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DatePicker;
