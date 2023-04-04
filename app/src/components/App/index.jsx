import "./style.css";
import { useState } from "react";
import CreateEmployee from "../CreateEmployee";
import EmployeeList from "../EmployeeList";

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
        <EmployeeList employees={employees} setOnCreatePage={setOnCreatePage} />
      )}
    </>
  );
};

export default App;
