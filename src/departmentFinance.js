import React, { Component } from 'react';
import TableTemplate from './tableTemplate.js';

class DepartmentFinance extends Component {

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
        fetch('http://localhost:4000/department-employees/2')
        .then(response => response.json())
        .then(response => this.setState({ employees: response.data }))
        .catch(err => console.error(err));
    }

    getManager = (EmployeeID, ReportingManager) => {
        fetch(`http://localhost:4000/employee/${ReportingManager}`)
        .then(response => response.json())
        .then(response => { 
            let employee = response.data[0];
            document.getElementById(EmployeeID).textContent = `${employee.LastName}, ${employee.FirstName}`;
        })
        .catch(err => console.error(err));
    }

    render() {
        let renderEmployee = this.state.employees.map(({EmployeeID, LastName, FirstName, Position, ReportingManager}) => 
            <tr key={EmployeeID}>
                <td>{EmployeeID}</td>
                <td>{LastName}, {FirstName}</td>
                <td>{Position}</td>
                <td id={EmployeeID}>{this.getManager(EmployeeID, ReportingManager)}</td>
                <td><a href={"/employee/edit/" + EmployeeID} className="text-success">more info</a></td>
            </tr>
        );
        return (
            <>
                <h4 className="mb-4">Finance Department</h4>
                <TableTemplate 
                    tableHeaders={["ID", "Name", "Position", "Manager"]} 
                    renderEmployee={renderEmployee}
                    employees={this.state.employees} />
            </>
        );
    }
}

export default DepartmentFinance;