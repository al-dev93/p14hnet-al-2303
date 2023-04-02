import style from "./style.module.css";

const CreateEmployee = () => (
  <>
    <div className={style.title}>
      <h1>HRnet</h1>
    </div>
    <div className={style.container}>
      <a href="employee-list.html">View Current Employees</a>
      <h2>Create Employee</h2>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">
          First Name
          <input type="text" id="first-name" />
        </label>

        <label htmlFor="last-name">
          Last Name
          <input type="text" id="last-name" />
        </label>

        <label htmlFor="date-of-birth">
          Date of Birth
          <input id="date-of-birth" type="text" />
        </label>

        <label htmlFor="start-date">
          Start Date
          <input id="start-date" type="text" />
        </label>

        <fieldset className={style.address}>
          <legend>Address</legend>
          <label htmlFor="street">
            Street
            <input id="street" type="text" />
          </label>

          <label htmlFor="city">
            City
            <input id="city" type="text" />
          </label>

          <label htmlFor="state">
            State
            <select className="state" id="state">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </label>

          <label htmlFor="zip-code">
            Zip Code
            <input id="zip-code" type="number" />
          </label>
        </fieldset>

        <label htmlFor="department">
          Department
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </label>
      </form>

      <button type="button" onClick="saveEmployee()">
        Save
      </button>
    </div>
    {/* <div id="confirmation" className="modal">
      Employee Created!
    </div> */}
  </>
);

export default CreateEmployee;
