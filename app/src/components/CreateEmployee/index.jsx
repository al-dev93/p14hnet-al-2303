import PropTypes from "prop-types";
import { useState } from "react";
import style from "./style.module.css";

const CreateEmployee = ({ employees, setEmployees, setOnCreatePage }) => {
  const [newEmployee, setNewEmployee] = useState({
    state: "A",
    department: "Sales",
  });

  function handleChange(event) {
    setNewEmployee({ ...newEmployee, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEmployees([...employees, newEmployee]);
    event.target.reset();
  }
  return (
    <div className="container">
      <button
        type="button"
        onClick={() => setOnCreatePage((currentView) => !currentView)}
      >
        View Current Employee
      </button>
      <h2>Create Employee</h2>
      <form id="create-employee" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="first-name">
          First Name
          <input
            type="text"
            id="first-name"
            name="firstName"
            onChange={(event) => handleChange(event)}
            defaultValue=""
          />
        </label>

        <label htmlFor="last-name">
          Last Name
          <input
            type="text"
            id="last-name"
            name="lastName"
            onChange={(event) => handleChange(event)}
            defaultValue=""
          />
        </label>

        <label htmlFor="date-of-birth">
          Date of Birth
          <input
            id="date-of-birth"
            type="text"
            name="dateOfBirth"
            onChange={(event) => handleChange(event)}
            defaultValue=""
          />
        </label>

        <label htmlFor="start-date">
          Start Date
          <input
            id="start-date"
            type="text"
            name="startDate"
            onChange={(event) => handleChange(event)}
            defaultValue=""
          />
        </label>

        <fieldset className={style.address}>
          <legend>Address</legend>
          <label htmlFor="street">
            Street
            <input
              id="street"
              type="text"
              name="street"
              onChange={(event) => handleChange(event)}
              defaultValue=""
            />
          </label>

          <label htmlFor="city">
            City
            <input
              id="city"
              type="text"
              name="city"
              onChange={(event) => handleChange(event)}
              defaultValue=""
            />
          </label>

          <label htmlFor="state">
            State
            <select
              className="state"
              id="state"
              name="state"
              onChange={(event) => handleChange(event)}
            >
              <option selected>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </label>

          <label htmlFor="zip-code">
            Zip Code
            <input
              id="zip-code"
              type="number"
              name="zipCode"
              onChange={(event) => handleChange(event)}
            />
          </label>
        </fieldset>

        <label htmlFor="department">
          Department
          <select
            id="department"
            name="department"
            onChange={(event) => handleChange(event)}
          >
            <option selected>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </label>
      </form>

      <button type="submit" form="create-employee">
        Save
      </button>
    </div>
  );
};

export default CreateEmployee;

CreateEmployee.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  setEmployees: PropTypes.func.isRequired,
  setOnCreatePage: PropTypes.func.isRequired,
};

CreateEmployee.defaultProps = {
  employees: null,
};
