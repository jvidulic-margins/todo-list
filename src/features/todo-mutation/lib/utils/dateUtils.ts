import { format, addDays } from "date-fns";

/**
 * Generates an array of formatted weekday strings.
 *
 * @param {Date} [startDate=new Date()]
 * @param {number} [numDays=7]
 * @param {string} [dateFormat="EEEE - dd.MM.yyyy"]
 * @returns {string[]}
 */
export const generateWeekdays = (
  startDate = new Date(),
  numDays = 7,
  dateFormat = "EEEE - dd.MM.yyyy"
) => {
  const weekdays = [];

  for (let i = 0; i < numDays; i++) {
    const currentDate = addDays(startDate, i);
    weekdays.push(format(currentDate, dateFormat));
  }

  return weekdays;
};
