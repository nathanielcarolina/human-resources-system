import React from 'react';
import './App.css';
import EmployeeInformation from './employeeInformation.js';
import Navbar from './navbar.js';
import Sidebar from './sidebar.js'
import Candidate from './candidate.js';
import AddEmployee from './addemployee';
import Separation from './addemployee';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 pr-0 border-right"><Sidebar /></div>
        
        <div className="col-10 p-4">
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="list-employee-information" role="tabpanel" aria-labelledby="list-employee-information">
              <EmployeeInformation />
            </div>

            <div className="tab-pane fade" id="list-department" role="tabpanel" aria-labelledby="list-department">
              <p>test</p>
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
              <Separation />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
