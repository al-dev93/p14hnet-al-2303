/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import { useState } from "react";
import InputEmployeeData from "../InputEmployeeData";
import InputDatePicker from "../InputDatePicker";
import SelectEmployeeData from "../SelectEmployeeData";
import ModalNewEmployee from "../ModalNewEmployee";
import employeeData from "../../utils/employeeData";
import { departmentOption, stateOption } from "../../utils/selectOptions";
import "./style.css";

const CreateEmployee = ({ employees, setEmployees, setOnCreatePage }) => {
  const [newEmployee, setNewEmployee] = useState();
  const [addEmployee, setAddEmployee] = useState(false);
  const [validInput, setValidInput] = useState();
  const numberOfAddressInfo = 4;

  function handleSubmit(event) {
    event.preventDefault();
    const validity = Array.from(event.target).filter(
      (value) => value.validity.valid === false
    );
    if (validity.length) {
      setValidInput(
        validity.reduce(
          (curr, next) => ({ ...curr, [next.name]: next.name }),
          {}
        )
      );
      return;
    }
    setEmployees([...employees, newEmployee]);
    setValidInput(true);
    setAddEmployee(!addEmployee);
    event.currentTarget.reset();
  }

  function renderFormComponent(data) {
    const type = data.type === "alphanumeric" ? "text" : data.type;
    const options = data.data === "department" ? departmentOption : stateOption;
    return (
      ((type === "text" || type === "number" || type === "alphnumeric") && (
        <InputEmployeeData
          key={data.data}
          {...{ data, type, setNewEmployee, validInput }}
        />
      )) ||
      (type === "date" && (
        <InputDatePicker
          key={data.data}
          {...{ data, setNewEmployee, validInput }}
        />
      )) ||
      (type === "list" && (
        <SelectEmployeeData
          key={data.data}
          {...{ data, options, setNewEmployee, validInput }}
        />
      ))
    );
  }

  return (
    <>
      <div className="container">
        <button
          type="button"
          onClick={() => setOnCreatePage((currentView) => !currentView)}
        >
          View Current Employee
        </button>
        <h2>Create Employee</h2>
        <form
          id="create-employee"
          noValidate
          onSubmit={(event) => handleSubmit(event)}
        >
          {employeeData
            .slice(0, numberOfAddressInfo)
            .map((data) => renderFormComponent(data))}
          <fieldset key="form-employee">
            <legend key="subForm-address">Address</legend>
            {employeeData
              .slice(numberOfAddressInfo, -1)
              .map((data) => renderFormComponent(data))}
          </fieldset>
          {renderFormComponent(employeeData[employeeData.length - 1])}
        </form>

        <button type="submit" form="create-employee">
          Save
        </button>
      </div>

      {addEmployee && <ModalNewEmployee {...{ setAddEmployee }} />}
    </>
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
