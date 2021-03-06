import React, { Component } from 'react';
const $ = window.$;

class EmployeeInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        this.getEmployees();
        // setTimeout(() => {$.bootstrapSortable({ applyLast: true });}, 3*1000);
    }

    getEmployees = _ => {
        fetch('http://localhost:4000/employees')
        .then(response => response.json())
        .then(response => this.setState({ employees: response.data }))
        .catch(err => console.error(err));
    }

    render() {
        let renderEmployee = this.state.employees.map(({ EmployeeID, Department, LastName, FirstName, Position, Status }) =>
            <tr key={EmployeeID.toString()}>
                <td>{EmployeeID}</td>
                <td>{Department}</td>
                <td>{LastName}, {FirstName}</td>
                <td>{Position}</td>
                <td>{Status}</td>
                <td><a href={"/employee/edit/" + EmployeeID} className="text-success">more info</a></td>
            </tr>
        ); 

        return (
            <>
                <h4 className="mb-4">Employee Information</h4>
                {/* <div className="my-4 p-3 bg-gray rounded">
                    <p className="small text-uppercase text-muted m-0">Filter by:</p>
                    <form className="form-inline"> 

                        <div className="form-group">
                            <label className="mr-2" htmlFor="filterDepartment">Department:</label>
                            <select className="mr-3 form-control" id="filterDepartment">
                                <option defaultValue="None selected">None selected</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="mr-2" htmlFor="filterName">Name:</label>
                            <input type="text" className="form-control mr-3" id="filterName" />
                        </div> 

                        <div className="form-group">
                            <label className="mr-2" htmlFor="filterPosition">Position:</label>
                            <input type="text" className="form-control mr-3" id="filterPosition" />
                        </div>

                        <div className="form-group">
                            <label className="mr-2" htmlFor="filterStatus">Status:</label>
                            <select className="mr-3 form-control" id="filterStatus">
                            <option defaultValue="None selected">None selected</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-secondary mr-2">Apply</button>
                        <button type="submit" className="btn btn-outline-secondary">Reset</button>
                    </form>

                </div> */}

                <div className="row mb-2">
                    <div className="col-6 text-muted"><span>Showing {this.state.employees.length} of {this.state.employees.length}</span></div>
                    {/* <div className="col-6 text-right">
                        <select className="mr-4 text-muted" id="numberRecords">
                            <option value="5">5 per page</option>
                            <option value="10">10 per page</option>
                            <option value="25">25 per page</option>
                            <option value="50">50 per page</option>
                        </select>
                        <select className="mr-2 text-muted" id="currentPage">
                            <option value="1">Page 1</option>
                            <option value="2">Page 2</option>
                        </select>
                        <label className="mr-2 text-muted" htmlFor="currentPage">of 2</label>
                        <div className="btn-group btn-group-sm rounded-lg" role="group" aria-label="Next and previous page">
                            <button type="button" className="btn btn-light py-0"><i className="fas fa-chevron-left text-muted"></i></button>
                            <button type="button" className="btn btn-light border-left py-0"><i className="fas fa-chevron-right text-muted"></i></button>
                        </div>
                    </div> */}
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className='' data-defaultsign='nospan'>ID</th>
                            <th scope="col" className='' data-defaultsign='nospan'>Department</th>
                            <th scope="col" className='' data-defaultsign='nospan'>Name</th>
                            <th scope="col" className='' data-defaultsign='nospan'>Position</th>
                            <th scope="col" className='' data-defaultsign='nospan'>Status</th>
                            <th scope="col" data-defaultsort='disabled'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderEmployee}
                    </tbody>
                </table>
            </>
        );
    }
}

export default EmployeeInformation;