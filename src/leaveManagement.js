import React, { Component } from 'react';
import TableTemplate from './tableTemplate.js';

class LeaveManagement extends Component {

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
        let renderEmployee = this.state.employees.map(({EmployeeID, LastName, FirstName, Total_Availed_Leaves, Total_Remaining_Leaves}) => 
            <tr key={EmployeeID.toString()}>
                <td>{EmployeeID}</td>
                <td>{LastName}, {FirstName}</td>
                <td>{Total_Availed_Leaves}</td>
                <td>{Total_Remaining_Leaves}</td>
                <td><a href="#" className="text-success">more info</a></td>
            </tr>
        );
        return (
            <>
                <h4 className="mb-4">Leave Management</h4>
                <TableTemplate 
                    tableHeaders={["ID", "Name", "Total Availed Leaves", "Total Remaining Leaves"]} 
                    renderEmployee={renderEmployee} />
            </>
        );
    }
}

export default LeaveManagement;