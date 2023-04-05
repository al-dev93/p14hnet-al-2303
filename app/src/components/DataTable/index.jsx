import PropTypes from "prop-types";
import style from "./style.module.css";

const DataTable = ({ employees, columnsTitle }) => {
  return (
    <div>
      <table role="grid" className={style["data-table"]}>
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
              {Object.entries(row).map(([key, value]) => (
                <td key={`${key}-${index + 1}`}>{value}</td>
              ))}
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
