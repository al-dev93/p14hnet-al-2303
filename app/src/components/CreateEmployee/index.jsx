import PropTypes from "prop-types";
import { useState } from "react";
import InputEmployeeData from "../InputEmployeeData";
import InputDatePicker from "../InputDatePicker";
import SelectEmployeeData from "../SelectEmployeeData";
import ModalNewEmployee from "../ModalNewEmployee";
import { departmentOption, stateOption } from "../../utils/selectOptions";
import columnsTitle from "../../utils/columnsTitle";
import "./style.css";

const CreateEmployee = ({ employees, setEmployees, setOnCreatePage }) => {
  const mainForm = [...columnsTitle];
  const adressForm = mainForm.splice(5);
  const [newEmployee, setNewEmployee] = useState();
  const [addEmployee, setAddEmployee] = useState(false);
  const [validInput, setValidInput] = useState();

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
          {mainForm.map((item, index) => {
            switch (index) {
              case 0:
              case 1:
                return (
                  <InputEmployeeData
                    key={`${item.data}-${index + 1}`}
                    data={item}
                    type="text"
                    setInput={setNewEmployee}
                    valid={validInput}
                  />
                );
              case 2:
              case 3:
                return (
                  <InputDatePicker
                    key={`${item.data}-${index + 1}`}
                    data={item}
                    setDate={setNewEmployee}
                    valid={validInput}
                  />
                );
              case 4:
                return (
                  <SelectEmployeeData
                    key={`${item.data}-${index + 1}`}
                    data={item}
                    options={departmentOption}
                    setSelect={setNewEmployee}
                    valid={validInput}
                  />
                );
              default:
            }
            return null;
          })}

          <div className="address">
            <fieldset>
              <legend>Address</legend>
              {adressForm.map((item, index) => {
                switch (index) {
                  case 0:
                  case 1:
                  case 3:
                    return (
                      <InputEmployeeData
                        key={`${item.data}-${index + 1}`}
                        data={item}
                        type={index === 3 ? "number" : "text"}
                        setInput={setNewEmployee}
                        valid={validInput}
                      />
                    );
                  case 2:
                    return (
                      <SelectEmployeeData
                        key={`${item.data}-${index + 1}`}
                        data={item}
                        options={stateOption}
                        setSelect={setNewEmployee}
                        valid={validInput}
                      />
                    );
                  default:
                }
                return null;
              })}
            </fieldset>
          </div>
        </form>

        <button type="submit" form="create-employee">
          Save
        </button>
      </div>

      {addEmployee && <ModalNewEmployee setAddEmployee={setAddEmployee} />}
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
