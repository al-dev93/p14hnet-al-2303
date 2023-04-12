import PropTypes from "prop-types";
import style from "./style.module.css";

const SelectTableLength = ({ length, setCurrentPage, setLengthTable }) => {
  const lengthOptions = ["10", "25", "50", "100"];

  function handleChange(event) {
    setCurrentPage(1);
    setLengthTable({
      rows: +event.target.value,
      pages: Math.ceil(length / +event.target.value),
    });
  }

  return (
    <div className={style["data-table-length"]}>
      <label htmlFor="select-length">
        {`Show `}
        <select
          id="select-length"
          name="select-length"
          aria-controls="id-data-table"
          defaultValue="10"
          onChange={(event) => handleChange(event)}
        >
          {lengthOptions.map((value, index) => (
            <option key={`${value}-${index + 1}`} value={value}>
              {value}
            </option>
          ))}
          {/* <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option> */}
        </select>
        {` entries`}
      </label>
    </div>
  );
};

export default SelectTableLength;

SelectTableLength.propTypes = {
  length: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setLengthTable: PropTypes.func.isRequired,
};
