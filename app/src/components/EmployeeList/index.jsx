import PropTypes from "prop-types";
import { DataTable } from "react-data-table-plugin";
import style from "./style.module.css";
import columns, { orderTable } from "../../utils/employeeData";

const EmployeeList = ({ employees, setOnCreatePage }) => {
  const dataTable = [...employees];
  const columnsTitle = [];
  orderTable.forEach((value) =>
    columnsTitle.push(columns.find((item) => item.data === value))
  );

  return (
    <div className="container">
      <h2>Current Employees</h2>
      <DataTable {...{ dataTable, columnsTitle }} />
      <button
        className={style["nav-button"]}
        type="button"
        onClick={() => setOnCreatePage((currentView) => !currentView)}
      >
        Home
      </button>
    </div>
  );
};

export default EmployeeList;

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  setOnCreatePage: PropTypes.func.isRequired,
};

EmployeeList.defaultProps = {
  employees: null,
};
