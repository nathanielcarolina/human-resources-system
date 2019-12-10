import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import EmployeeInformation from './employeeInformation.js';
import Payroll from './payroll.js';
import LeaveManagement from './leaveManagement.js';
import Performance from './performance.js';
import Equipment from './equipment.js';


class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={EmployeeInformation} />
        <Route path="/employee-information" component={EmployeeInformation} />
        <Route path="/payroll" component={Payroll} />
        <Route path="/leave-management" component={LeaveManagement} />
        <Route path="/performance" component={Performance} />
        <Route path="/equipment" component={Equipment} />
      </Switch>
    );
  }
}

export default Router;
