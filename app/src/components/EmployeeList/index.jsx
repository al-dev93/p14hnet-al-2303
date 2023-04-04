import PropTypes from "prop-types";

const EmployeeList = ({ employees, setOnCreatePage }) => (
  <div className="container">
    {console.log(employees)}
    <h2>Current Employees</h2>
    <button
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
