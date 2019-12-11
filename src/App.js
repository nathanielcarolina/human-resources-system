import React from 'react';
import './App.css';
import EmployeeInformation from './employeeInformation.js';
import Navbar from './navbar.js';
import Sidebar from './sidebar.js'
import CandidateNew from './candidateNew.js';
import AddEmployee from './addemployee.js';
import DepartmentAdministrative from './departmentAdministrative.js'
import DepartmentDevelopment from './departmentDevelopment.js';
import DepartmentFinance from './departmentFinance.js';
import DepartmentHumanResources from './departmentHumanResources.js';
import DepartmentITSupport from './departmentITSupport.js';
import DepartmentQualityAssurance from './departmentQualityAssurance.js';
import Payroll from './payroll.js';
import LeaveManagement from './leaveManagement.js';
import Performance from './performance.js';
import Equipment from './equipment.js';
import Router from './router.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 pr-0 border-right">
          <Sidebar />
        </div>
        <div className="col-10 p-4">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
