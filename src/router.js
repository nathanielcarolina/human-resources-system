import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import EmployeeInformation from './employeeInformation.js';
import Payroll from './payroll.js';
import LeaveManagement from './leaveManagement.js';
import Performance from './performance.js';
import Equipment from './equipment.js';
import DepartmentAdministrative from './departmentAdministrative.js';
import DepartmentDevelopment from './departmentDevelopment.js';
import DepartmentFinance from './departmentFinance.js';
import DepartmentHumanResources from './departmentHumanResources.js';
import DepartmentITSupport from './departmentITSupport.js';
import DepartmentQualityAssurance from './departmentQualityAssurance.js';
import CandidateNew from './candidateNew.js';
import Separation from './separation.js'
import EmployeeEdit from './employeeEdit.js';
import Candidatestatus from './candidatestatus.js';


class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={EmployeeInformation} />
        <Route path="/departments/administrative" component={DepartmentAdministrative} />
        <Route path="/departments/development" component={DepartmentDevelopment} />
        <Route path="/departments/finance" component={DepartmentFinance} />
        <Route path="/departments/human-resources" component={DepartmentHumanResources} />
        <Route path="/departments/it-support" component={DepartmentITSupport} />
        <Route path="/departments/quality-assurance" component={DepartmentQualityAssurance} />
        <Route path="/candidate/new" component={CandidateNew} />
        <Route path="/candidate/edit" component={CandidateNew} />
        <Route path="/employee/edit/:id" component={EmployeeEdit} />
        <Route path="/employee-information" component={EmployeeInformation} />
        <Route path="/payroll" component={Payroll} />
        <Route path="/leave-management" component={LeaveManagement} />
        <Route path="/performance" component={Performance} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/separation" component={Separation} />
        <Route path="/candidate/status" component={Candidatestatus} />
      </Switch>
    );
  }
}

export default Router;
