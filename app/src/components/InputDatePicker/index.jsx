import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import getId from "../../utils/getId";
import dateToString from "../../utils/dateToString";
import isObject from "../../utils/isObject";
import "react-datepicker/dist/react-datepicker.css";
import style from "./style.module.css";

const InputDatePicker = ({ data, setDate, valid }) => {
  const [startDate, setStartDate] = useState(null);
  const ref = useRef(null);
  const id = getId(data.title);
  const years = range(1950, getYear(new Date()) + 1, 1);
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

  useEffect(() => {
    if (!isObject(valid) && valid) setStartDate(null);
  }, [valid]);

  function handleChange(date = undefined) {
    const changeDate = date ?? new Date();
    setStartDate(changeDate);
    setDate((employeeState) => ({
      ...employeeState,
      [data.data]: dateToString(changeDate),
    }));
    if (!date) ref.current.setOpen(false);
  }

  return (
    <div className={style.wrapper}>
      <label htmlFor={id}>{data.title}</label>
      <DatePicker
        id={id}
        dateFormat="MM/dd/yyyy"
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
              onClick={() => handleChange()}
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
        ref={ref}
        selected={startDate}
        onChange={(date) => handleChange(date)}
      />
    </div>
  );
};

export default InputDatePicker;

InputDatePicker.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  setDate: PropTypes.func.isRequired,
  valid: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.bool,
  ]),
};

InputDatePicker.defaultProps = {
  valid: undefined,
};
