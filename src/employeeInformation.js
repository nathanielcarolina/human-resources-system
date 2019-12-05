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

    renderEmployee = ({ Emp_ID, department, LName, FName, Position_Name }) =>
        <tr key={Emp_ID}>
            <td>{Emp_ID}</td>
            <td>{department}</td>
            <td>{LName}, {FName}</td>
            <td>{Position_Name}</td>
            <td><a href="#" className="text-success">more info</a></td>
        </tr>        

    render() {

        let { employees } = this.state;

        return (
            <>
                <h2 className="display-6">Employee Information</h2>
                <div className="my-4 p-3 bg-gray rounded">
                    <p className="small text-uppercase text-muted m-0">Filter by:</p>
                    <form class="form-inline"> 
                        <label class="mr-2" for="filterDepartment">Department:</label>
                        <select class="mr-3" id="filterDepartment">
                        <option selected>Select Department</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>

                        <label class="mr-2" for="filterStatus">Status:</label>
                        <select class="mr-3" id="filterStatus">
                        <option selected>Select Status</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>

                        <label class="mr-2" for="filterPosition">Position:</label>
                        <input type="text" class="form-control mr-3" id="filterPosition" />
                        
                        <label class="mr-2" for="filterName">Name:</label>
                        <input type="text" class="form-control mr-3" id="filterName" />
                        
                        <button type="submit" class="btn btn-secondary mr-2">Apply</button>
                        <button type="submit" class="btn btn-outline-secondary">Reset</button>
                    </form>

                </div>

                <table class="table table-hover sortable">
                    <thead>
                        <tr>
                            <th scope="col" data-defaultsign='nospan'>Employee ID</th>
                            <th scope="col" data-defaultsign='nospan'>Department</th>
                            <th scope="col" data-defaultsign='nospan'>Name</th>
                            <th scope="col" data-defaultsign='nospan'>Position</th>
                            <th scope="col" data-defaultsort='disabled'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(this.renderEmployee)}
                    </tbody>
                </table>

                <div className="row">
                    <div className="col-6">
                        <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link text-success" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link text-success" href="#">1</a></li>
                            <li class="page-item"><a class="page-link text-success" href="#">2</a></li>
                            <li class="page-item"><a class="page-link text-success" href="#">3</a></li>
                            <li class="page-item"><a class="page-link text-success" href="#">Next</a></li>
                        </ul>
                        </nav>
                    </div>

                    <div className="col-6 text-right">
                        <label class="mr-2" for="numberRecords">Number of records per page:</label>
                        <select class="mr-4" id="numberRecords">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        </select>
                    </div>
                </div>
            </>
        );
    }
}

export default EmployeeInformation;