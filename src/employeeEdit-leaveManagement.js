import React, { Component } from 'react';

const EmployeeEditLeaveManagement = (props) => {
    if (props.currentEmployee) {
        let currentEmployee = props.currentEmployee;
        return(
            <>
                <h4 class="mb-3">Leave Management</h4>
                <form class="needs-validation mb-5" novalidate="">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label htmlFor="empID">Employee ID</label>
                            <input class="form-control" id="empID" type="text" placeholder={currentEmployee.EmployeeID} readOnly />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" class="form-control" id="lastName" placeholder={currentEmployee.LastName} value="" required="" readOnly />
                            <div class="invalid-feedback">
                            Valid last name is required.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" class="form-control" id="firstName" placeholder={currentEmployee.FirstName} value="" required="" readOnly />
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label htmlFor="sick-leaves-availed">Sick Leaves Availed</label>
                            <input class="form-control" id="sick-leaves-availed" type="text" placeholder={currentEmployee.Status} readOnly />
                        </div>
                        <div class="col-md-6 mb-4">
                            <label htmlFor="casual-leaves-availed">Casual Leaves Availed</label>
                            <input class="form-control" id="casual-leaves-availed" type="text" placeholder={currentEmployee.ReportingManager} readOnly />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label htmlFor="sick-leaves-remaining">Sick Leaves Remaining</label>
                            <input class="form-control" id="sick-leaves-remaining" type="text" placeholder={currentEmployee.Status} readOnly />
                        </div>
                        <div class="col-md-6 mb-4">
                            <label htmlFor="casual-leaves-remaining">Casual Leaves Remaining</label>
                            <input class="form-control" id="casual-leaves-remaining" type="text" placeholder={currentEmployee.ReportingManager} readOnly />
                        </div>
                    </div>
                </form>
            </>
        )
      } else {
        return(
            <div>Loading...</div>
        )
      
    }
}

export default EmployeeEditLeaveManagement;