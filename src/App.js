import React from 'react';
import './App.css';
import EmployeeInformation from './employeeInformation.js';
import Navbar from './navbar.js';
import Sidebar from './sidebar.js'
import Candidate from './candidate.js';
import AddEmployee from './addemployee.js';
import DepartmentAdministrative from './departmentAdministrative.js'
import DepartmentDevelopment from './departmentDevelopment.js';
import DepartmentFinance from './departmentFinance.js';
import DepartmentHumanResources from './departmentHumanResources.js';
import DepartmentITSupport from './departmentITSupport.js';
import DepartmentQualityAssurance from './departmentQualityAssurance.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 pr-0 border-right"><Sidebar /></div>
        
        <div className="col-10 p-4">
          <div className="tab-content" id="nav-tabContent">
            <div 
              className="tab-pane fade show active" 
              id="list-employee-information" 
              role="tabpanel" 
              aria-labelledby="list-employee-information">
              <EmployeeInformation />
            </div>
            <div 
              className="tab-pane fade" 
              id="list-department-admin" 
              role="tabpanel" 
              aria-labelledby="list-department-admin">
              <DepartmentAdministrative />
            </div>
            <div 
              className="tab-pane fade" 
              id="list-department-development" 
              role="tabpanel" 
              aria-labelledby="list-department-development">
              <DepartmentDevelopment />
            </div>
            <div 
              className="tab-pane fade" 
              id="list-department-finance" 
              role="tabpanel" 
              aria-labelledby="list-department-finance">
              <DepartmentFinance />
            </div>
            <div 
              className="tab-pane fade" 
              id="list-department-hr" 
              role="tabpanel" 
              aria-labelledby="list-department-hr">
              <DepartmentHumanResources />
            </div>
            <div 
              className="tab-pane fade" 
              id="list-department-itSupport" 
              role="tabpanel" 
              aria-labelledby="list-department-itSupport">
              <DepartmentITSupport />
            </div>
            <div 
              className="tab-pane fade" 
              id="list-department-qualityAssurance" 
              role="tabpanel" 
              aria-labelledby="list-department-qualityAssurance">
              <DepartmentQualityAssurance />
            </div>
            <div className="tab-pane fade" id="list-payroll" role="tabpanel" aria-labelledby="list-payroll">
              <p>test</p>
            </div>
            <div className="tab-pane fade" id="list-leave-management" role="tabpanel" aria-labelledby="list-leave-management">
              <p>test</p>
            </div>
            <div className="tab-pane fade" id="list-performance" role="tabpanel" aria-labelledby="list-performance">
              <p>test</p>
            </div>
            <div className="tab-pane fade" id="list-candidate-form" role="tabpanel" aria-labelledby="list-candidate-form">
              <Candidate />
            </div>
            <div className="tab-pane fade" id="list-employee-form" role="tabpanel" aria-labelledby="list-employee-form">
              <AddEmployee />
            </div>
            
            <div className="tab-pane fade" id="list-equipment" role="tabpanel" aria-labelledby="list-equipment">
              <p>test</p>
            </div>

            <div className="tab-pane fade" id="list-separation" role="tabpanel" aria-labelledby="list-separation">
              <p>test</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
