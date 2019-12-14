import React, { Component } from 'react';

const EmployeeEditPayroll = (props) => {
    if (props.Compensation && 
        props.Bonus && 
        props.Increment && 
        props.BankName && 
        props.IBAN && 
        props.BIC &&
        props.currentEmployee) {
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
                            <label for="Compensation">Compensation</label>
                            <input name="Compensation" class="form-control" id="Compensation" type="text" value={props.Compensation} onChange={props.handleChange} />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="Bonus">Bonus</label>
                            <input name="Bonus" class="form-control" id="Bonus" type="text" value={props.Bonus} onChange={props.handleChange} />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="Increment">Increment</label>
                            <input name="Increment" class="form-control" id="Increment" type="text" value={props.Increment} onChange={props.handleChange} />
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="BankName">Bank Name</label>
                            <input name="BankName" class="form-control" id="BankName" type="text" value={props.BankName} onChange={props.handleChange} />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="IBAN">IBAN</label>
                            <input name="IBAN" class="form-control" id="IBAN" type="text" value={props.IBAN} onChange={props.handleChange} />
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="BIC">BIC</label>
                            <input name="BIC" class="form-control" id="BIC" type="text" value={props.BIC} onChange={props.handleChange} />
                        </div>
                    </div>
                    <input type="button" onClick={props.handleSubmit} class="btn btn-success" value="Save Changes" />
                </form>
            </>
        )
      } else {
        return(
            <>
                <div className="text-center">
                    <div className="mb-3">Loading...</div>
                    <div class="spinner-border text-secondary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </>
        )
      
    }
}

export default EmployeeEditPayroll;