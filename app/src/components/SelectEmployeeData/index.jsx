import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Select from "react-select";
import getId from "../../utils/getId";
import isObject from "../../utils/isObject";
import style from "./style.module.css";

const SelectEmployeeData = ({ data, options, setNewEmployee, validInput }) => {
  const inputId = getId(data.title);
  const defaultValue = options[0];
  const { name } = data;
  const [inputValue, setInputValue] = useState(defaultValue);
  const styles = {
    control: (base) => ({
      ...base,
      ":hover": { backgroundColor: "#ededed" },
      backgroundColor: "#f6f6f6",
      cursor: "pointer",
    }),
    container: (base) => ({
      ...base,
      marginTop: 10,
    }),
  };

  useEffect(() => {
    if (!isObject(validInput) && validInput) setInputValue(defaultValue);
    setNewEmployee((state) => ({
      ...state,
      [data.data]: inputValue.label,
    }));
  }, [validInput]);

  function handleChange(select) {
    setInputValue(select);
    setNewEmployee((state) => ({
      ...state,
      [data.data]: select.value,
    }));
  }

  return (
    <div className={`${style.wrapper} ${inputId}`}>
      <label htmlFor={inputId}>{data.title}</label>
      <Select
        {...{ inputId, name, styles, defaultValue, options }}
        value={inputValue}
        onChange={(select) => handleChange(select)}
        openMenuOnFocus
        controlShouldRenderValue
      />
    </div>
  );
};

export default SelectEmployeeData;

SelectEmployeeData.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  setNewEmployee: PropTypes.func.isRequired,
  validInput: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.bool,
  ]),
};

SelectEmployeeData.defaultProps = {
  validInput: undefined,
};
