export interface CalendarProps {
  /** Text direction of the calendar */
  dir?: "ltr" | "rtl";

  /** Select the calendar system */
  CalendarType?: "gregorian" | "jalali";

  /** Day index to start the week (0 = Sunday) */
  firstDayOfWeek?: number;

  /** Callback triggered when a day is selected */
  onChange?: (date: Date) => void;

  /** Custom day render function */
  renderDay?: (
    day: number,
    date: Date,
    isCurrentMonth: boolean,
    showMonth: boolean,
    isToday: boolean,
    onSelect: () => void
  ) => React.ReactNode;

  /** Override default CSS class names */
  classNames?: CalendarClassNames;

  /** Override navigation buttons (PrevButton and NextButton) */
  components?: CalendarComponents;
}

/** Optional interface for CSS class names */
export interface CalendarClassNames {
  root?: string;
  header?: string;
  nav?: string;
  month?: string;
  year?: string;
  weekdays?: string;
  weekday?: string;
  days?: string;
  day?: string;
  currentDay?: string;
  lastMonth?: string;
  nextMonth?: string;
}

/** Optional interface for custom components */
export interface CalendarComponents {
  PrevButton?: (props: {
    onClick: () => void;
    dir: "ltr" | "rtl";
  }) => React.ReactNode;
  NextButton?: (props: {
    onClick: () => void;
    dir: "ltr" | "rtl";
  }) => React.ReactNode;
}

export interface renderDayProps {
  /** The day of the month */
  day: number;
  /** The date object */
  date: Date;
  /** Whether the day is in the current month */
  isCurrentMonth: boolean;
  /**
   * Whether to display the month name for this day.
   * For example, you can set this to `true` for the first day of the month
   * so the month name appears at the start of each month.
   * For days from the previous or next month shown in the calendar,
   * `showMonth` can also be `true` for the first visible day of that month.
   */
  showMonth: boolean;
  /** Whether the day is today */
  isToday: boolean;
  /** Callback to select the day */
  onSelect: () => void;
}
