import PropTypes from "prop-types";
import style from "./style.module.css";
import DataTable from "../DataTable";
import columnsTitle from "../../utils/columnsTitle";

const EmployeeList = ({ employees, setOnCreatePage }) => (
  <div className="container">
    {console.log(employees)}
    <h2>Current Employees</h2>
    <DataTable employees={employees} columnsTitle={columnsTitle} />
    <button
      className={style["nav-button"]}
      type="button"
      onClick={() => setOnCreatePage((currentView) => !currentView)}
    >
      Home
    </button>
  </div>
);

export default EmployeeList;

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  setOnCreatePage: PropTypes.func.isRequired,
};

EmployeeList.defaultProps = {
  employees: null,
};
