import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getId from "../../utils/getId";
import isObject from "../../utils/isObject";
import style from "./style.module.css";

const InputEmployeeData = ({ data, type, setNewEmployee, validInput }) => {
  const id = getId(data.title);
  const name = data.data;
  const required = !!data.isRequired;
  const defaultValue = "";
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (required && isObject(validInput)) setIsValid(!!validInput[data.data]);
  }, [validInput]);

  function handleChange(event) {
    if (required) setIsValid(!event.target.value);
    setNewEmployee((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className={style.wrapper}>
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
