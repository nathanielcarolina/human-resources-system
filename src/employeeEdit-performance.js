import React, { Component } from 'react';

const EmployeeEditPerformance = (props) => {
    if (props.currentEmployee) {
        let currentEmployee = props.currentEmployee;
        console.log(props.performance);
        let renderPerformances = props.performance.map(({ Performance_ID, Rating_Date, Rating, Comments, Manager_ID }) =>
            <tr key={Performance_ID}>
                <td>{Rating_Date}</td>
                <td>{Rating}</td>
                <td>{Comments}</td>
                {/* <td>{props.getManager(Manager_ID)}</td> */}
            </tr>
        ); 
        return(
            <>
                <h4 class="mb-3">Performance</h4>
                <div class="row mb-4">
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
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Rating Date</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Comments</th>
                            <th scope="col">Rated by</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderPerformances}
                    </tbody>
                </table>
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

export default EmployeeEditPerformance;