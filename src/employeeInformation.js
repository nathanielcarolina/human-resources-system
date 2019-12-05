import React, { Component } from 'react';

class EmployeeInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = _ => {
        fetch('http://localhost:4000/employees')
        .then(response => response.json())
        .then(response => this.setState({ employees: response.data }))
        .catch(err => console.error(err));
    }

    renderEmployee = ({ Emp_ID, department, LName, FName, Position_Name, Emp_Status }) =>
        <tr key={Emp_ID}>
            <td>{Emp_ID}</td>
            <td>{department}</td>
            <td>{LName}, {FName}</td>
            <td>{Position_Name}</td>
            <td>{Emp_Status}</td>
            <td><a href="#" className="text-success">more info</a></td>
        </tr>

    render() {

        let { employees } = this.state;

        return (
            <>
                <h4 className="">Employee Information</h4>
                <div className="my-4 p-3 bg-gray rounded">
                    <p className="small text-uppercase text-muted m-0">Filter by:</p>
                    <form class="form-inline"> 

                        <div className="form-group">
                            <label class="mr-2" for="filterDepartment">Department:</label>
                            <select class="mr-3 form-control" id="filterDepartment">
                                <option selected>None selected</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label class="mr-2" for="filterName">Name:</label>
                            <input type="text" class="form-control mr-3" id="filterName" />
                        </div> 

                        <div className="form-group">
                            <label class="mr-2" for="filterPosition">Position:</label>
                            <input type="text" class="form-control mr-3" id="filterPosition" />
                        </div>

                        <div className="form-group">
                            <label class="mr-2" for="filterStatus">Status:</label>
                            <select class="mr-3 form-control" id="filterStatus">
                            <option selected>None selected</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>

                        <button type="submit" class="btn btn-secondary mr-2">Apply</button>
                        <button type="submit" class="btn btn-outline-secondary">Reset</button>
                    </form>

                </div>

                <div className="row mb-2">
                    <div className="col-6 text-muted"><span>Showing 1-5 of 10</span></div>
                    <div className="col-6 text-right">
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
                        <label className="mr-2 text-muted" for="currentPage">of 2</label>
                        <div class="btn-group btn-group-sm border border-secondary rounded-lg" role="group" aria-label="Next and previous page">
                            <button type="button" class="btn btn-light py-0"><i class="fas fa-chevron-left text-muted"></i></button>
                            <button type="button" class="btn btn-light border-left py-0"><i class="fas fa-chevron-right text-muted"></i></button>
                        </div>
                    </div>
                </div>

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className='nosort'>ID</th>
                            <th scope="col" className='nosort'>Department</th>
                            <th scope="col" className='nosort'>Name</th>
                            <th scope="col" className='nosort'>Position</th>
                            <th scope="col" className='nosort'>Status</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(this.renderEmployee)}
                    </tbody>
                </table>
            </>
        );
    }
}

export default EmployeeInformation;