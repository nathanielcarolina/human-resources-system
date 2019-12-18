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
        let renderEquipment = this.state.equipment.map(({Employee_ID, Employee_Name, Equipment}) => 
            <tr key={Equipment}>
                <td>{Equipment}</td>
                <td>{Employee_Name}</td>
                <td>{Employee_ID}</td>
                {/* <td>{Equiptment_Return}</td> */}
                {/* <td><a href="#" className="text-success">edit assignment</a></td> */}
            </tr>
        );
        return (
            <>
                <h4 className="mb-4">Equipment Information</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className=''>Equipment Name</th>
                            <th scope="col" className=''>Assigned To</th>
                            <th scope="col" className=''>Employee ID</th>
                            {/* <th scope="col" className=''>Equipment Returned?</th> */}
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