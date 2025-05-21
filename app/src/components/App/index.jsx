import './style.css';
import { useState } from 'react';
import CreateEmployee from '../CreateEmployee';
import EmployeeList from '../EmployeeList';
import mockData from '../../utils/mockData';
import REACT_APP_ENV from '../../utils/processEnvironment';

/**
 * @description displays CreateEmployee or EmployeeList depending on the onCreatePage state
 * @returns render app
 */
const App = () => {
  const [onCreatePage, setOnCreatePage] = useState(true);
  const [employees, setEmployees] = useState([]);
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      {(onCreatePage && <CreateEmployee {...{ employees, setEmployees, setOnCreatePage }} />) || (
        <EmployeeList
          employees={REACT_APP_ENV === 'DEV' ? [...mockData, ...employees] : employees}
          {...{ setOnCreatePage }}
        />
      )}
    </>
  );
};

export default App;
