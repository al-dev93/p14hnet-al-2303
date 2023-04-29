import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import getId from "../../utils/getId";
import dateToString from "../../utils/dateToString";
import "react-datepicker/dist/react-datepicker.css";
import style from "./style.module.css";

/**
 * @description opens date picker when the field date is selected
 * @param {object} data
 * @param {setNewEmployee} setNewEmployee
 * @param {boolean} addEmployee
 * @returns render date picker
 */
const InputDatePicker = ({ data, setNewEmployee, addEmployee }) => {
  const [startDate, setStartDate] = useState(null);
  const ref = useRef(null);
  const id = getId(data.title);
  const dateFormat = "MM/dd/yyyy";
  const today = new Date();
  const years = range(1950, getYear(today) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  /**
   * @description empty the date field after submitting the form
   */
  useEffect(() => {
    // if (!isObject(validInput) && validInput) setStartDate(null);
    if (addEmployee) setStartDate(null);
  }, [addEmployee]);
  /**
   * @description save the selected date in the current record
   * @param {object} date
   */
  function handleChange(date) {
    setStartDate(date);
    setNewEmployee((employeeState) => ({
      ...employeeState,
      [data.data]: dateToString(date),
    }));
    if (date === today) ref.current.setOpen(false);
  }

  return (
    <div className={style.wrapper}>
      <label htmlFor={id}>{data.title}</label>
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={style["header-date-picker"]}>
            <button
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <i className="fa fa-caret-left" />
            </button>
            <button
              className={style["home-button"]}
              type="button"
              onClick={() => handleChange(today)}
            >
              <i className="fa fa-home" />
            </button>
            <select
              className="custom-select-style"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              className="custom-select-style"
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <i className="fa fa-caret-right" />
            </button>
          </div>
        )}
        selected={startDate}
        fixedHeight
        onChange={(date) => handleChange(date)}
        {...{ id, dateFormat, ref }}
      />
    </div>
  );
};

export default InputDatePicker;

InputDatePicker.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  setNewEmployee: PropTypes.func.isRequired,
  addEmployee: PropTypes.bool.isRequired,
};
