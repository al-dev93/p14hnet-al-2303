/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import { useState } from "react";
import Select from "react-select";
import { departmentOption, stateOption } from "../../utils/selectOptions";
import InputDatePicker from "../InputDatePicker";
import style from "./style.module.css";
import "react-datepicker/dist/react-datepicker.css";

const CreateEmployee = ({ employees, setEmployees, setOnCreatePage }) => {
  const [newEmployee, setNewEmployee] = useState({
    state: stateOption[0].value,
    department: departmentOption[4].value,
  });
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

  function handleChange(event, employeeProperty = undefined) {
    if (employeeProperty)
      setNewEmployee({
        ...newEmployee,
        [employeeProperty]: event.value,
      });
    else
      setNewEmployee({
        ...newEmployee,
        [event.target.name]: event.target.value,
      });
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
          <InputDatePicker dateName="dateOfBirth" setDate={setNewEmployee} />
        </label>

        <label htmlFor="start-date">
          Start Date
          <InputDatePicker dateName="startDate" setDate={setNewEmployee} />
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
            <Select
              inputId="state"
              name="state"
              onChange={(newValue) => handleChange(newValue, "state")}
              styles={selectStyle}
              openMenuOnFocus
              defaultValue={stateOption[0]}
              options={stateOption}
            />
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
          <Select
            inputId="department"
            name="department"
            onChange={(newValue) => handleChange(newValue, "department")}
            styles={selectStyle}
            openMenuOnFocus
            defaultValue={departmentOption[4]}
            options={departmentOption}
          />
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
