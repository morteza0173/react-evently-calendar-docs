"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar as EventlyCalendar } from "react-evently-calendar";

const Calendar = () => {
  return (
    <EventlyCalendar
      classNames={{
        root: "min-w-[320px] !w-full",
        month: "not-prose m-0 p-0",
        year: "not-prose m-0 p-0",
        weekdays: "not-prose !text-[0.6rem] md:!text-xs",
        weekday: "not-prose ",
        days: "not-prose !text-[0.6rem] md:!text-xs",
      }}
      components={{
        NextButton: (props) => (
          <button
            {...props}
            className="bg-blue-200 border-0 py-1.5 px-3.5 cursor-pointer rounded-sm transition-colors hover:bg-blue-300"
          >
            <ChevronRight color="black" size={16} />
          </button>
        ),
        PrevButton: (props) => (
          <button
            {...props}
            className="bg-blue-200 border-0 py-1.5 px-3.5 cursor-pointer rounded-sm transition-colors hover:bg-blue-300"
          >
            <ChevronLeft color="black" size={16} />
          </button>
        ),
      }}
    />
  );
};
export default Calendar;
