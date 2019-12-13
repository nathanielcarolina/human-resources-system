import React, { Component } from 'react';
import EmployeeEditPersonalInformation from './employeeEdit-personalInformation.js';
import EmployeeEditPayroll from './employeeEditPayroll.js';
import EmployeeEditLeaveManagement from './employeeEdit-leaveManagement.js';
import EmployeeEditPerformance from './employeeEdit-performance.js';


class EmployeeEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentEmployee: null,
            currentDepartmentID: null,
            currentDepartmentPositions: [],
            currentManager: null,
            departments: null,
            employeeStatuses: null,
            managers: [],
            addresses: []
        };
    }

    componentDidMount() {
        this.getEmployee();
    }

    getEmployee = _ => {
        let id = this.props.match.params.id;
        fetch(`http://localhost:4000/employee/${id}`)
        .then(response => response.json())
        .then(response => this.setState({ currentEmployee: response.data[0] }, () => {
            this.setDepartmentID(this.state.currentEmployee.Dept_ID);
            this.getDepartments();
            this.getManagers();
            this.getEmployeeStatuses();
            this.getAddresses();
        }))
        .catch(err => console.error(err));
    }

    getDepartments = _ => {
        fetch('http://localhost:4000/departments')
        .then(response => response.json())
        .then(response => this.setState({ departments: response.data }))
        .catch(err => console.error(err));
    }

    getCurrentDepartmentPositions = _ => {
        fetch(`http://localhost:4000/department/${this.state.currentDepartmentID}`)
        .then(response => response.json())
        .then(response => this.setState({ currentDepartmentPositions: response.data }))
        .catch(err => console.error(err));
    }

    getManagers = _ => {
        fetch('http://localhost:4000/employees')
        .then(response => response.json())
        .then(response => this.setState({ managers: response.data }))
        .catch(err => console.error(err));
    }

    getEmployeeStatuses = _ => {
        fetch('http://localhost:4000/employee-statuses')
        .then(response => response.json())
        .then(response => this.setState({ employeeStatuses: response.data }))
        .catch(err => console.error(err));
    }

    setDepartmentID = (currentDepartmentID) => {
        this.setState({ currentDepartmentID: currentDepartmentID }, () => {
            this.getCurrentDepartmentPositions();
        })
    }

    getAddresses = _ => {
        fetch(`http://localhost:4000/address/${this.state.currentEmployee.PersonID}`)
        .then(response => response.json())
        .then(response => this.setState({ addresses: response.data }))
        .catch(err => console.error(err));
    }

    render() {
        let { currentEmployee } = this.state;
        console.log(currentEmployee);
        return (
            <div className="container">
                <h4 className="mb-4">Edit Employee</h4>
                <div class="row">
                    <div class="col-md-3 mb-4">
                        <h5 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Select a section to edit</span>
                        </h5>
                        <div class="list-group mb-3 text-muted" role="tablist">
                            <a 
                                id="list-personal-information-list" 
                                data-toggle="list" 
                                href="#list-personal-information" 
                                role="tab" 
                                aria-controls="personal-information"
                                class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed active">
                                <div><h6 class="my-0">Personal Information</h6></div>
                            </a>
                            {/* <a 
                                id="list-education-work-history-list" 
                                data-toggle="list" 
                                href="#list-education-work-history" 
                                role="tab" 
                                aria-controls="education-work-history"
                                class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Education and Work History</h6></div>
                            </a> */}
                            {/* <a href="#" class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Skills</h6></div>
                            </a> */}
                            <a 
                                id="list-payroll-list" 
                                data-toggle="list" 
                                href="#list-payroll" 
                                role="tab" 
                                aria-controls="payroll"
                                class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Payroll</h6></div>
                            </a>

                            <a 
                                id="list-leave-management-list" 
                                data-toggle="list" 
                                href="#list-leave-management" 
                                role="tab" 
                                aria-controls="leave-management"
                                class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Leave Management</h6></div>
                            </a>

                            <a 
                                id="list-performance-list" 
                                data-toggle="list" 
                                href="#list-performance" 
                                role="tab" 
                                aria-controls="performance"
                                class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Performance</h6></div>
                            </a>

                            {/* <a href="#" class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Equipment</h6></div>
                            </a> */}
                            {/* <a href="#" class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Separation</h6></div>
                            </a> */}
                            {/* <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Leave Application</h6></div>
                            </li> */}
                        </div>
                    </div>
                    <div class="col-md-9 px-5 tab-content">
                        <div class="tab-pane fade show active" id="list-personal-information" role="tabpanel" aria-labelledby="list-personal-information-list">
                            <EmployeeEditPersonalInformation 
                                currentEmployee={currentEmployee} 
                                departments={this.state.departments} 
                                currentDepartmentID={this.state.currentDepartmentID} 
                                currentDepartmentPositions={this.state.currentDepartmentPositions} 
                                managers={this.state.managers}
                                employeeStatuses={this.state.employeeStatuses}
                                addresses={this.state.addresses} />
                        </div>

                        <div class="tab-pane fade" id="list-payroll" role="tabpanel" aria-labelledby="list-payroll-list">
                            <EmployeeEditPayroll currentEmployee={currentEmployee} />
                        </div>

                        <div class="tab-pane fade" id="list-leave-management" role="tabpanel" aria-labelledby="list-leave-management-list">
                            <EmployeeEditLeaveManagement currentEmployee={currentEmployee} />
                        </div>

                        <div class="tab-pane fade" id="list-performance" role="tabpanel" aria-labelledby="list-performance-list">
                            <EmployeeEditPerformance currentEmployee={currentEmployee} />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeEdit;