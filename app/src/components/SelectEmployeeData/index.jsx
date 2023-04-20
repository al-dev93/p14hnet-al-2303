import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Select from "react-select";
import getId from "../../utils/getId";
import isObject from "../../utils/isObject";
import style from "./style.module.css";

const SelectEmployeeData = ({ data, options, setSelect, valid }) => {
  const id = getId(data.title);
  const [inputValue, setInputValue] = useState(options[0]);
  const selectStyle = {
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
    if (!isObject(valid) && valid) setInputValue(options[0]);
    setSelect((state) => ({
      ...state,
      [data.data]: inputValue.label,
    }));
  }, [valid]);

  function handleChange(select) {
    setInputValue(select);
    setSelect((state) => ({
      ...state,
      [data.data]: select.value,
    }));
  }

  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={id}>
        {data.title}
        <Select
          inputId={id}
          name={data.data}
          onChange={(select) => handleChange(select)}
          styles={selectStyle}
          openMenuOnFocus
          defaultValue={options[0]}
          value={inputValue}
          controlShouldRenderValue
          options={options}
        />
      </label>
    </div>
  );
};

export default SelectEmployeeData;

SelectEmployeeData.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  setSelect: PropTypes.func.isRequired,
  valid: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.bool,
  ]),
};

SelectEmployeeData.defaultProps = {
  valid: undefined,
};
