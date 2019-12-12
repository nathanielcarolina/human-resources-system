import React, { Component } from 'react';

const EmployeeEditPayroll = (props) => {
    if (props.currentEmployee) {
        let currentEmployee = props.currentEmployee;
        return(
            <>
                <h4 class="mb-3">Payroll</h4>
                <form class="needs-validation mb-5" novalidate="">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="empID">Employee ID</label>
                            <input class="form-control" id="empID" type="text" placeholder={currentEmployee.EmployeeID} readOnly />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="lastName">Last Name</label>
                            <input type="text" class="form-control" id="lastName" placeholder={currentEmployee.LastName} value="" required="" readOnly />
                            <div class="invalid-feedback">
                            Valid last name is required.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="firstName">First Name</label>
                            <input type="text" class="form-control" id="firstName" placeholder={currentEmployee.FirstName} value="" required="" readOnly />
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />

                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="shiftDetails">Shift Details</label>
                            <input class="form-control" id="shiftDetails" type="text" placeholder={currentEmployee.Status} />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="compensation">Compensation</label>
                            <input class="form-control" id="compensation" type="text" placeholder={currentEmployee.Status} />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="bonus">Bonus</label>
                            <input class="form-control" id="bonus" type="text" placeholder={currentEmployee.ReportingManager} />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="increment">Increment</label>
                            <input class="form-control" id="increment" type="text" placeholder={currentEmployee.ReportingManager} />
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="bankName">Bank Name</label>
                            <input class="form-control" id="bankName" type="text" placeholder={currentEmployee.Status} />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="IBAN">IBAN</label>
                            <input class="form-control" id="IBAN" type="text" placeholder={currentEmployee.Status} />
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="BIC">BIC</label>
                            <input class="form-control" id="BIC" type="text" placeholder={currentEmployee.ReportingManager} />
                        </div>
                    </div>
                    <button class="btn btn-success" type="submit">Save Changes</button>
                </form>
            </>
        )
      } else {
        return(
            <div>Loading...</div>
        )
      
    }
}

export default EmployeeEditPayroll;