import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getId from "../../utils/getId";
import isObject from "../../utils/isObject";
import style from "./style.module.css";

/**
 * @description displays input element corresponding to the passed type
 * @param {object} data
 * @param {string} type
 * @param {function} setNewEmployee
 * @param {object or boolean} validInput
 * @returns render input element
 */
const InputEmployeeData = ({ data, type, setNewEmployee, validInput }) => {
  const id = getId(data.title);
  const name = data.data;
  const required = !!data.isRequired;
  const defaultValue = "";
  const [isValid, setIsValid] = useState(false);
  /**
   * @description if the field is required, change the state to invalid when the field is empty
   */
  useEffect(() => {
    if (required && isObject(validInput)) setIsValid(!!validInput[data.data]);
  }, [validInput]);
  /**
   * @description saves the value entered in the current record
   * @param {object} event
   */
  function handleChange(event) {
    if (required) setIsValid(!event.target.value);
    setNewEmployee((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className={style.wrapper}>
      {/* displays the error message if the isValid state is true */}
      {isValid && (
        <div className={style["invalid-input"]}>
          <i
            className={`${style["error-icon"]} fa-solid fa-circle-exclamation`}
          />
          <span>required</span>
        </div>
      )}
      <label htmlFor={id}>{data.title}</label>
      <input
        className={style.input}
        onChange={(event) => handleChange(event)}
        {...{ type, id, name, defaultValue, required }}
      />
    </div>
  );
};

export default InputEmployeeData;

InputEmployeeData.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  setNewEmployee: PropTypes.func.isRequired,
  validInput: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.bool,
  ]),
};

InputEmployeeData.defaultProps = {
  validInput: undefined,
};
