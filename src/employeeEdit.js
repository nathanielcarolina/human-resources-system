import React, { Component } from 'react';
import EmployeeEditPersonalInformation from './employeeEdit-personalInformation.js';
import EmployeeEditPayroll from './employeeEditPayroll.js';
import EmployeeEditLeaveManagement from './employeeEdit-leaveManagement.js';
import EmployeeEditPerformance from './employeeEdit-performance.js';


class EmployeeEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeNotFound: false,
            currentEmployee: null,
            currentDepartmentID: null,
            currentDepartmentPositions: [],
            currentManager: null,
            departments: null,
            employeeStatuses: null,
            managers: [],
            addresses: [],
            Department: null,
            Position: null,
            Manager: null,
            EmployeeStatus: null,
            WorkContact: null, 
            PersonalContact: null,
            Address1: null,
            Address2: null,
            City: null,
            State: null,
            Zip: null,
            //////Payroll
            Compensation: null,
            Bonus: null,
            Increment: null,
            BankName: null,
            IBAN: null,
            BIC: null,
            performance: []
        };
    }

    componentDidMount() {
        this.getEmployee();
    }

    handleSubmitPersonalInformation = (event) => {
        // console.log(
        //     this.state.Department, 
        //     this.state.Position, 
        //     this.state.Manager, 
        //     this.state.EmployeeStatus, 
        //     this.state.PersonalContact,
        //     this.state.Address1,
        //     this.state.Address2,
        //     this.state.City,
        //     this.state.State,
        //     this.state.Zip
        //     );

        let body = JSON.stringify({ 
            Department: this.state.Department, 
            Position: this.state.Position, 
            Manager: this.state.Manager, 
            EmployeeStatus: this.state.EmployeeStatus, 
            WorkContact: this.state.WorkContact, 
            PersonalContact: this.state.PersonalContact,
            Address1: this.state.Address1,
            Address2: this.state.Address2,
            City: this.state.City,
            State: this.state.State,
            Zip: this.state.Zip,
            EmployeeID: this.state.currentEmployee.EmployeeID
          });

        console.log(body);
        fetch('http://localhost:4000/employee/edit/personal-information', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'X-CSRF-Token': document.querySelector('head > meta[name="csrf-token"]').getAttribute('content')
            },
            body: body
        })
        .then(response => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            window.alert(`Employee ${this.state.currentEmployee.LastName}, ${this.state.currentEmployee.FirstName} successfully edited.`);
        })
        // .then((response) => {
        //     return response.json()
        //     .then(json => {
        //         if (response.ok) {
        //             return json;
        //         } else {
        //             return Promise.reject(json);
        //         }
        //     })
        // })
    }

    handleSubmitPayroll = (event) => {
        let body = JSON.stringify({ 
            Compensation: this.state.Compensation,
            Bonus: this.state.Bonus,
            Increment: this.state.Increment,
            BankName: this.state.BankName,
            IBAN: this.state.IBAN,
            BIC: this.state.BIC,
            EmployeeID: this.state.currentEmployee.EmployeeID
        });

        console.log(body);
        fetch('http://localhost:4000/employee/edit/payroll', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body
        })
        .then(response => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            window.alert(`Employee ${this.state.currentEmployee.LastName}, ${this.state.currentEmployee.FirstName} successfully edited.`);
        })
    }

    getEmployee = _ => {
        let id = this.props.match.params.id;
        fetch(`http://localhost:4000/employee/${id}`)
        .then(response => response.json())
        .then(response => {
            if (response.data[0]) {
                this.setState({ currentEmployee: response.data[0] }, () => {
                this.setDepartmentID(this.state.currentEmployee.Dept_ID);
                this.getDepartments();
                this.getManagers();
                this.getEmployeeStatuses();
                this.getAddresses();
                this.getPerformances();
                this.setState({ Department: this.state.currentEmployee.Dept_ID });
                this.setState({ Position: this.state.currentEmployee.Position_ID });
                this.setState({ Manager: this.state.currentEmployee.ReportingManager });
                this.setState({ EmployeeStatus: this.state.currentEmployee.Emp_Status_ID });
                this.setState({ WorkContact: this.state.currentEmployee.WorkContact }); 
                this.setState({ PersonalContact: this.state.currentEmployee.PersonalContact }); 
                //////Payroll
                this.setState({ Compensation: this.state.currentEmployee.Compensation });
                this.setState({ Bonus: this.state.currentEmployee.Bonus });
                this.setState({ Increment: this.state.currentEmployee.Increment });
                this.setState({ BankName: this.state.currentEmployee.BankName });
                this.setState({ IBAN: this.state.currentEmployee.IBAN });
                this.setState({ BIC: this.state.currentEmployee.BIC });                
                }); 
            } else {
                this.setState({ employeeNotFound: true });
            }
        })
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
        .then(response => {
            console.log(response.data);
            console.log(this.state.Position);
            this.setState({ currentDepartmentPositions: response.data });
        } )
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

    getPerformances = _ => {
        fetch(`http://localhost:4000/performance/${this.state.currentEmployee.EmployeeID}`)
        .then(response => response.json())
        .then(response => this.setState({ performance: response.data }))
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
        .then(response => this.setState({ addresses: response.data }, () => {
            if (this.state.addresses[0]) {
                this.setState({ Address1: this.state.addresses[0].Address_Line1 });
                this.setState({ Address2: this.state.addresses[0].Address_Line2 });
                this.setState({ City: this.state.addresses[0].City });
                this.setState({ State: this.state.addresses[0].State });
                this.setState({ Zip: this.state.addresses[0].Zipcode });    
            }
        }))
        .catch(err => console.error(err));
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    }

    handleChangeDepartment = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.setDepartmentID(event.target.value);
    }

    render() {
        let { currentEmployee } = this.state;
        console.log(currentEmployee);

        if (this.state.employeeNotFound === true) {
            return (
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-6 bg-gray rounded-lg text-center">
                            <h2 className="my-4"><i class="far fa-frown-open mr-3"></i>Employee {this.props.match.params.id} does not exist.</h2>
                            <h4 className="my-4">Try searching using another Employee ID.</h4>
                        </div>
                    </div>
                </div>
            )
        }

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
                                state={this.state} 
                                Department={this.state.Department}
                                Position={this.state.Position}
                                Manager={this.state.Manager}
                                EmployeeStatus={this.state.EmployeeStatus} 
                                WorkContact={this.state.WorkContact} 
                                PersonalContact={this.state.PersonalContact} 
                                Address1={this.state.Address1}
                                Address2={this.state.Address2}
                                City={this.state.City}
                                State={this.state.State}
                                Zip={this.state.Zip}
                                handleSubmit={this.handleSubmitPersonalInformation}
                                handleChange={this.handleChange}
                                handleChangeDepartment={this.handleChangeDepartment} />
                        </div>

                        <div class="tab-pane fade" id="list-payroll" role="tabpanel" aria-labelledby="list-payroll-list">
                            <EmployeeEditPayroll 
                                currentEmployee={this.state.currentEmployee}
                                Compensation={this.state.Compensation}
                                Bonus={this.state.Bonus}
                                Increment={this.state.Increment}
                                BankName={this.state.BankName}
                                IBAN={this.state.IBAN}
                                BIC={this.state.BIC}
                                handleSubmit={this.handleSubmitPayroll}
                                handleChange={this.handleChange} />
                        </div>

                        <div class="tab-pane fade" id="list-leave-management" role="tabpanel" aria-labelledby="list-leave-management-list">
                            <EmployeeEditLeaveManagement currentEmployee={currentEmployee} />
                        </div>

                        <div class="tab-pane fade" id="list-performance" role="tabpanel" aria-labelledby="list-performance-list">
                            <EmployeeEditPerformance 
                                currentEmployee={currentEmployee}
                                performance={this.state.performance} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeEdit;