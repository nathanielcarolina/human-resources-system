import React, { Component } from 'react';

const EmployeeEditPerformance = (props) => {
    if (props.currentEmployee) {
        let currentEmployee = props.currentEmployee;
        return(
            <>
                <h4 class="mb-3">Performance</h4>
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
                        <div class="col-md-6 mb-3">
                            <label for="ratingDate">Rating Date</label>
                            <input class="form-control" id="ratingDate" type="text" placeholder={currentEmployee.Status} readOnly />
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="rater">Rater</label>
                            <input class="form-control" id="rater" type="text" placeholder={currentEmployee.ReportingManager} readOnly />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="rating">Rating</label>
                            <input class="form-control" id="rating" type="text" placeholder={currentEmployee.Status} readOnly />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <label for="remarks">Remarks</label>
                            <textarea class="form-control" id="remarks" type="text" rows="3" placeholder={currentEmployee.Status} readOnly></textarea>
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

export default EmployeeEditPerformance;