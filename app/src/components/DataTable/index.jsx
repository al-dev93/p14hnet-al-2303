import PropTypes from "prop-types";
import { useState } from "react";
import style from "./style.module.css";

const DataTable = ({ employees, columnsTitle }) => {
  const [filter, setFilter] = useState();

  function renderTableRow(row, index) {
    const tableRow = Object.entries(row);

    if (
      (filter &&
        tableRow.filter(([, value]) =>
          value.toUpperCase().includes(filter.toUpperCase())
        ).length) ||
      !filter
    ) {
      return tableRow.map(([key, value]) => (
        <td key={`${key}-${index + 1}`}>{value}</td>
      ));
    }
    return null;
  }

  return (
    <div className={style["employee-table"]}>
      <div className={style["data-table-filter"]}>
        <label htmlFor="filter-input">
          Search:
          <input
            id="filter-input"
            type="search"
            aria-controls="employee-table"
            onChange={(event) => setFilter(event.target.value)}
          />
        </label>
      </div>
      <table id="employee-table" role="grid" className={style["data-table"]}>
        <thead>
          <tr role="row">
            {columnsTitle.map((cell) => (
              <th
                className={style.sorting}
                tabIndex="0"
                rowSpan="1"
                colSpan="1"
                key={`${cell.data}-0`}
              >
                {cell.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((row, index) => (
            <tr
              className={(index + 1) % 2 ? style.odd : style.even}
              role="row"
              key={`${index + 1}`}
            >
              {renderTableRow(row, index)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

DataTable.propTypes = {
  columnsTitle: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  employees: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
