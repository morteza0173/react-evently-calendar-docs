"use client";

import dayjs from "dayjs";
import { Calendar } from "react-evently-calendar";
import jalali from "jalali-plugin-dayjs";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

dayjs.extend(jalali);

export const monthsFa = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const events = [
  {
    id: 1,
    title: "جلسه تیم",
    date: dayjs().add(1, "day").toDate(),
  },
  {
    id: 2,
    title: "ملاقات مشتری",
    date: dayjs().add(5, "day").toDate(),
  },
];

const CustomRenderDayCalander = () => {
  const dayRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [hiddenEvents, setHiddenEvents] = useState<Record<string, boolean>>({});

  const checkWidths = () => {
    const newHidden: Record<string, boolean> = {};
    Object.entries(dayRefs.current).forEach(([key, el]) => {
      if (!el) return;
      newHidden[key] = el.offsetWidth < 90;
    });
    setHiddenEvents(newHidden);
  };

  useEffect(() => {
    checkWidths();
    window.addEventListener("resize", checkWidths);
    return () => window.removeEventListener("resize", checkWidths);
  }, []);

  return (
    <Calendar
      CalendarType="jalali"
      firstDayOfWeek={6}
      classNames={{
        month: "not-prose m-0 p-0",
        year: "not-prose m-0 p-0",
      }}
      dir="rtl"
      components={{
        NextButton: (props) => (
          <button
            {...props}
            className="bg-blue-200 border-0 py-1.5 px-3.5 cursor-pointer rounded-sm transition-colors hover:bg-blue-300"
          >
            <ChevronLeft color="black" size={16} />
          </button>
        ),
        PrevButton: (props) => (
          <button
            {...props}
            className="bg-blue-200 border-0 py-1.5 px-3.5 cursor-pointer rounded-sm transition-colors hover:bg-blue-300"
          >
            <ChevronRight color="black" size={16} />
          </button>
        ),
      }}
      renderDay={(
        day,
        date,
        isCurrentMonth,
        showMonth,
        isToday,
        CustomOnSelect
      ) => {
        const dayEvents = events.filter((event) =>
          dayjs(event.date).isSame(dayjs(date), "day")
        );

        const dayKey = dayjs(date).format("YYYY-MM-DD");

        return (
          <div
            ref={(el) => {
              dayRefs.current[dayKey] = el;
            }}
            key={dayKey}
            className={`
    text-start p-0.5 aspect-[3/2] m-0.25 rounded-lg cursor-pointer text-[0.8rem] overflow-hidden
    ${
      isToday
        ? "bg-[#8f8f8fff] dark:bg-[#3385ff] text-black dark:text-white"
        : isCurrentMonth
        ? "bg-[#c9c9c9ff] dark:bg-[#96bbf8] text-white font-bold"
        : "bg-[#ebebebff] dark:bg-[#838383] text-black dark:text-gray-300 font-normal"
    }
  `}
            onClick={() => CustomOnSelect()}
          >
            <div className="flex flex-row gap-0.5 flex-wrap">
              <span>
                {day}
                {showMonth
                  ? monthsFa[dayjs(date).calendar("jalali").month()]
                  : null}
              </span>
              {dayEvents.length > 0 &&
                (hiddenEvents[dayKey] ? (
                  <div className="w-2 h-2 bg-amber-400 rounded-full m-2 mr-auto" />
                ) : (
                  dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className="w-full p-[1px] text-[0.7rem] bg-[#ecececff] dark:bg-[#2a2a2a] rounded-[0.4rem] text-black dark:text-gray-200"
                    >
                      {event.title}
                    </div>
                  ))
                ))}
            </div>
          </div>
        );
      }}
    />
  );
};
export default CustomRenderDayCalander;
