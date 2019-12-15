import React, { Component } from 'react';

class Equipment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            equipment: []
        };
    }

    componentDidMount() {
        this.getEquipment();
    }

    getEquipment = _ => {
        fetch('http://localhost:4000/equipment')
        .then(response => response.json())
        .then(response => this.setState({ equipment: response.data }))
        .catch(err => console.error(err));
    }

    render() {
        let renderEquipment = this.state.equipment.map(({Equipment_ID, Equipment_Name, Assigned_To, Emp_ID}) => 
            <tr key={Equipment_ID}>
                <td>{Equipment_ID}</td>
                <td>{Equipment_Name}</td>
                <td>{Assigned_To}</td>
                {/* <td><a href="#" className="text-success">edit assignment</a></td> */}
            </tr>
        );
        return (
            <>
                <h4 className="mb-4">Equipment Information</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className='nosort'>Equipment ID</th>
                            <th scope="col" className='nosort'>Equipment Name</th>
                            <th scope="col" className='nosort'>Assigned To</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderEquipment}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Equipment;