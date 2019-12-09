import React, { Component } from 'react';
import TableTemplate from './tableTemplate.js';

class Performance extends Component {

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
        let renderEmployee = this.state.employees.map(({Emp_ID, LName, FName, Rating_Date, Rating}) => 
            <tr key={Emp_ID}>
                <td>{Emp_ID}</td>
                <td>{LName}, {FName}</td>
                <td>{Rating_Date}</td>
                <td>{Rating}</td>
                <td><a href="#" className="text-success">more info</a></td>
            </tr>
        );
        return (
            <>
                <h4 className="mb-4">Performance Information</h4>
                <TableTemplate 
                    tableHeaders={["ID", "Name", "Rating Date", "Rating"]} 
                    renderEmployee={renderEmployee} />
            </>
        );
    }
}

export default Performance;