import "./style.css";
import { useState } from "react";
import CreateEmployee from "../CreateEmployee";
import EmployeeList from "../EmployeeList";
import mockData from "../../utils/mockData";
import REACT_APP_ENV from "../../utils/processEnvironment";

const App = () => {
  const [onCreatePage, setOnCreatePage] = useState(true);
  const [employees, setEmployees] = useState([]);
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      {(onCreatePage && (
        <CreateEmployee
          employees={employees}
          setEmployees={setEmployees}
          setOnCreatePage={setOnCreatePage}
        />
      )) || (
        <EmployeeList
          employees={REACT_APP_ENV === "DEV" ? mockData : employees}
          setOnCreatePage={setOnCreatePage}
        />
      )}
    </>
  );
};

export default App;
