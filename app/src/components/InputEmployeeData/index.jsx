import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getId from "../../utils/getId";
import isObject from "../../utils/isObject";
import style from "./style.module.css";

const InputEmployeeData = ({ data, type, setInput, valid }) => {
  const id = getId(data.title);
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if (isObject(valid)) setValidInput(!!valid[data.data]);
  }, [valid]);

  function handleChange(event) {
    setValidInput(!event.target.value);
    setInput((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className={style.wrapper}>
      {validInput && (
        <div className={style["invalid-input"]}>
          <i
            className={`${style["error-icon"]} fa-solid fa-circle-exclamation`}
          />
          <span>required</span>
        </div>
      )}
      <label htmlFor={id}>
        {data.title}
        <input
          className={style.input}
          type={type}
          id={id}
          name={data.data}
          onChange={(event) => handleChange(event)}
          defaultValue=""
          required={!!data.isRequired}
        />
      </label>
    </div>
  );
};

export default InputEmployeeData;

InputEmployeeData.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  valid: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.bool,
  ]),
};

InputEmployeeData.defaultProps = {
  valid: undefined,
};
