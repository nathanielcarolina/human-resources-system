import React, { Component } from 'react';
import TableTemplate from './tableTemplate.js';
import moment from 'moment';


class Performance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            performances: []
        };
    }

    componentDidMount() {
        this.getPerformances();
    }

    getPerformances = _ => {
        fetch('http://localhost:4000/performances')
        .then(response => response.json())
        .then(response => this.setState({ performances: response.data }))
        .catch(err => console.error(err));
    }

    getEmployee = (Performance_ID, Emp_ID) => {
        fetch(`http://localhost:4000/employee/${Emp_ID}`)
        .then(response => response.json())
        .then(response => { 
            let employee = response.data[0];
            document.getElementById(Performance_ID).textContent = `${employee.LastName}, ${employee.FirstName}`;
        })
        .catch(err => console.error(err));
    }

    render() {
        let renderPerformances = this.state.performances.map(({Performance_ID, Emp_ID, Rating_Date, Rating}) => 
            <tr key={Performance_ID}>
                <td>{Emp_ID}</td>
                <td id={Performance_ID}>{this.getEmployee(Performance_ID, Emp_ID)}</td>
                <td>{moment(Rating_Date).format("MM/DD/YYYY")}</td>
                <td>{Rating}</td>
                <td><a href={"/employee/edit/" + Emp_ID} className="text-success">more info</a></td>
            </tr>
        );
        return (
            <>
                <h4 className="mb-4">Performance Information</h4>
                <TableTemplate 
                    tableHeaders={["ID", "Name", "Rating Date", "Rating"]} 
                    renderEmployee={renderPerformances}
                    employees={this.state.performances} />
            </>
        );
    }
}

export default Performance;