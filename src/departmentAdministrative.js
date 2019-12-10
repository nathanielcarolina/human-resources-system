import React, { Component } from 'react';

class DepartmentAdministrative extends Component {

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

    render() {
        let renderEmployee = this.state.employees.map(({Emp_ID, LName, FName, Position_Name, Manager_LName, Manager_FName}) => 
            <tr key={Emp_ID}>
                <td>{Emp_ID}</td>
                <td>{LName}, {FName}</td>
                <td>{Position_Name}</td>
                <td>{Manager_LName}, {Manager_FName}</td>
                <td><a href="#" className="text-success">more info</a></td>
            </tr>
        );
        return (
            <>
                <h4 className="mb-4">Administrative Department</h4>

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
                        <label className="mr-2 text-muted" htmlFor="currentPage">of 2</label>
                        <div className="btn-group btn-group-sm rounded-lg" role="group" aria-label="Next and previous page">
                            <button type="button" className="btn btn-light py-0"><i className="fas fa-chevron-left text-muted"></i></button>
                            <button type="button" className="btn btn-light border-left py-0"><i className="fas fa-chevron-right text-muted"></i></button>
                        </div>
                    </div>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className='nosort'>ID</th>
                            <th scope="col" className='nosort'>Name</th>
                            <th scope="col" className='nosort'>Position</th>
                            <th scope="col" className='nosort'>Manager</th>
                            <th scope="col">Details</th>
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

export default DepartmentAdministrative;