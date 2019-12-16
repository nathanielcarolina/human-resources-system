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
                <td id={Performance_ID}>{props.getManager(Performance_ID, Manager_ID)}</td>
            </tr>
        ); 

        let renderManagers = props.state.managers.map(({ EmployeeID, LastName, FirstName }) =>
            <option key={EmployeeID.toString()} value={EmployeeID} >
                {LastName}, {FirstName}
            </option>
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
                <hr className="mb-4" />
                <h4 className="mb-3">Add New Performance Rating for {currentEmployee.LastName}, {currentEmployee.FirstName}</h4>

                <div className="bg-gray rounded-lg px-3 py-2 pt-3 mb-4">
                    <form className="needs-validation form-group" noValidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="RatingDate">Rating Date</label>
                                <input name="RatingDate" type="date" className="form-control" value={props.RatingDate} id="RatingDate" placeholder="" required="" onChange={props.handleChange} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <div class="form-group">
                                    <label htmlFor="RatedBy">Rated by</label>
                                    <select name="RatedBy" class="form-control" id="RatedBy" value={props.RatedBy} onChange={props.handleChange}>
                                        <option>Select Manager</option>
                                        {renderManagers}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="Rating">Numerical Rating</label>
                                <input name="Rating" type="text" className="form-control" value={props.Rating} id="Rating" placeholder="" required="" onChange={props.handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label htmlFor="Comments">Comments</label>
                                <textarea name="Comments" className="form-control" value={props.Comments} id="Comments" placeholder="" required="" onChange={props.handleChange} rows="3"></textarea>
                            </div>
                        </div>
                        <input type="button" onClick={props.handleSubmit} class="btn btn-success" value="Submit" />
                    </form>
                </div> 
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