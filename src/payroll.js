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
        let renderEmployee = this.state.employees.map(({Emp_ID, LName, FName, Position_Name, Total_Compensation}) => 
            <tr key={Emp_ID}>
                <td>{Emp_ID}</td>
                <td>{LName}, {FName}</td>
                <td>{Position_Name}</td>
                <td>{Total_Compensation}</td>
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