import PropTypes from 'prop-types';
import { DataTable } from 'react-data-table-plugin';
import columns, { orderTable } from '../../utils/employeeData';

/**
 * @description displays the list of employees created in the data table
 * @param {array of object} employees
 * @param {function} setOnCreatePage
 * @returns render data table
 */
const EmployeeList = ({ employees, setOnCreatePage }) => {
  const dataTable = [...employees];
  const columnsTitle = [];
  orderTable.forEach((value) => columnsTitle.push(columns.find((item) => item.data === value)));

  return (
    <div className="container">
      <h2>Current Employees</h2>
      <DataTable {...{ dataTable, columnsTitle }} />
      <button type="button" onClick={() => setOnCreatePage((currentView) => !currentView)}>
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
