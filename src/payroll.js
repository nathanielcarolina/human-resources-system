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

    render() {
        let renderEmployee = this.state.employees.map(({EmployeeID, LastName, FirstName, Position, Compensation}) => 
            <tr key={EmployeeID.toString()}>
                <td>{EmployeeID}</td>
                <td>{LastName}, {FirstName}</td>
                <td>{Position}</td>
                <td>{Compensation}</td>
                <td><a href="#" className="text-success">more info</a></td>
            </tr>
        );
        return (
            <>
                <h4 className="mb-4">Payroll Information</h4>
                <TableTemplate 
                    tableHeaders={["ID", "Name", "Position", "Total Compensation"]} 
                    renderEmployee={renderEmployee} />
            </>
        );
    }
}

export default Payroll;