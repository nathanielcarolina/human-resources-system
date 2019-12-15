import React, { Component } from 'react';
import TableTemplate from './tableTemplate.js';

class DepartmentQualityAssurance extends Component {

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
        fetch('http://localhost:4000/department-employees/4')
        .then(response => response.json())
        .then(response => this.setState({ employees: response.data }))
        .catch(err => console.error(err));
    }

    getManager = (id) => {
        fetch(`http://localhost:4000/employee/${id}`)
        .then(response => response.json())
        .then(response => { return response.data })
        .catch(err => console.error(err));
    }

    render() {
        let renderEmployee = this.state.employees.map(({EmployeeID, LastName, FirstName, Position, ReportingManager}) => 
            <tr key={EmployeeID}>
                <td>{EmployeeID}</td>
                <td>{LastName}, {FirstName}</td>
                <td>{Position}</td>
                <td>{this.getManager(ReportingManager) ? this.getManager(ReportingManager).LastName + ", " : ''}{this.getManager(ReportingManager) ? this.getManager(ReportingManager).FirstName : ''}</td>
                <td><a href={"/employee/edit/" + EmployeeID} className="text-success">more info</a></td>
            </tr>
        );
        return (
            <>
                <h4 className="mb-4">Quality Assurance Department</h4>
                <TableTemplate 
                    tableHeaders={["ID", "Name", "Position", "Manager"]} 
                    renderEmployee={renderEmployee}
                    employees={this.state.employees} />
            </>
        );
    }
}

export default DepartmentQualityAssurance;