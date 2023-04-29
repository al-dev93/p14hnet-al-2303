import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Select from "react-select";
import getId from "../../utils/getId";
import style from "./style.module.css";

/**
 * @description displays the selected element with the list of options passed
 * @param {object} data
 * @param {array of object} options
 * @param {function} setNewEmployee
 * @param {boolean} addEmployee
 * @returns render select input
 */
const SelectEmployeeData = ({ data, options, setNewEmployee, addEmployee }) => {
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
  /**
   * @description fills the select field with the default option after submitting the form
   */
  useEffect(() => {
    // if (!isObject(validInput) && validInput) setInputValue(defaultValue);
    if (addEmployee) setInputValue(defaultValue);
    setNewEmployee((state) => ({
      ...state,
      [data.data]: inputValue.label,
    }));
  }, [addEmployee]);
  /**
   * @description saves the selected option in the current record
   * @param {object} select
   */
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
  addEmployee: PropTypes.bool.isRequired,
};
