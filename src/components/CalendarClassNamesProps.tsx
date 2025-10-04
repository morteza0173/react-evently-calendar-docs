"use client";

import { Calendar as EventlyCalendar } from "react-evently-calendar";

const CalendarClassNameProps = () => {
  return (
    <EventlyCalendar
      classNames={{
        root: "!min-w-[320px] !w-full",
        month: "not-prose m-0 p-0",
        year: "not-prose m-0 p-0",
        weekdays:
          "not-prose !text-[0.6rem] md:!text-xs !border-0 !bg-transparent",
        weekday: "not-prose !border-0",
        days: "not-prose !text-[0.6rem] md:!text-xs",
      }}
    />
  );
};
export default CalendarClassNameProps;
