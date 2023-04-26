/**
 * @description convert date object to format string
 * @param {object} date
 * @returns string format MM/DD/YYYY
 */
export default function dateToString(date) {
  return date?.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}
