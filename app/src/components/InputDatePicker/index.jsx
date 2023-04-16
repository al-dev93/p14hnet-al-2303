import PropTypes from "prop-types";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import style from "./style.module.css";

const InputDatePicker = ({ dateName, setDate }) => {
  const ref = useRef();
  const [startDate, setStartDate] = useState(null);
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

  function handleChange(date) {
    const changeDate = date || new Date();
    setStartDate(changeDate);
    setDate((employeeState) => ({
      ...employeeState,
      [dateName]: changeDate.toLocaleDateString("en-US"),
    }));
    if (!date) ref.current.setOpen(false);
  }

  return (
    <DatePicker
      className="custom-input-style"
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
      shouldCloseOnSelect
      selected={startDate}
      onChange={(date) => handleChange(date)}
    />
  );
};

export default InputDatePicker;

InputDatePicker.propTypes = {
  dateName: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
};
