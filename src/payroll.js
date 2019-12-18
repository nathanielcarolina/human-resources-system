import React, { Component } from 'react';
import TableTemplate from './tableTemplate.js';

class Payroll extends Component {

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

    getPayroll = (EmployeeID) => {
        fetch(`http://localhost:4000/payroll/${EmployeeID}`)
        .then(response => response.json())
        .then(response => { 
            let employee = response.data[0];
            document.getElementById(EmployeeID).textContent = `${employee.Compensation.toLocaleString("en", {style: "currency", currency: 'USD'})}`;
        })
        .catch(err => console.error(err));
    }
        
    render() {
        let renderEmployee = this.state.employees.map(({EmployeeID, LastName, FirstName, Position}) => 
            <tr key={EmployeeID}>
                <td>{EmployeeID}</td>
                <td>{LastName}, {FirstName}</td>
                <td>{Position}</td>
                <td id={EmployeeID}>{this.getPayroll(EmployeeID)}</td>
                <td><a href={"/employee/edit/" + EmployeeID} className="text-success">more info</a></td>
            </tr>
        );
        return (
            <>
                <h4 className="mb-4">Payroll Information</h4>
                <TableTemplate 
                    tableHeaders={["ID", "Name", "Position", "Total Compensation"]} 
                    renderEmployee={renderEmployee}
                    employees={this.state.employees} />
            </>
        );
    }
}

export default Payroll;