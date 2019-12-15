import React, { Component } from 'react';

class Candidatestatus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            candidates: []
        };
    }

    componentDidMount() {
        this.getCandidates();
    }

    getCandidates = _ => {
        fetch('http://localhost:4000/candidatestatus')
        .then(response => response.json())
        .then(response => this.setState({ candidates: response.data }))
        .catch(err => console.error(err));
    }

    handleHireCandidate = (Candidate_ID, LName, FName) => {
        fetch(`http://localhost:4000/candidatestatus/edit/${Candidate_ID}/2`, { method: 'POST' })
        .then(response => {
            window.alert(`Candidate ${LName}, ${FName} successfully hired.`);
        })
    }

    handleRejectCandidate = (Candidate_ID, LName, FName) => {
        fetch(`http://localhost:4000/candidatestatus/edit/${Candidate_ID}/3`, { method: 'POST' })
        .then(response => {
            window.alert(`Candidate ${LName}, ${FName} rejected.`);
        })
    }

    render() {

        let renderCandidate = this.state.candidates.map(({ Candidate_ID, FName, LName, Hiring_Status, Position_Name}) =>
            <tr key={Candidate_ID.toString()}>
                <td>{Candidate_ID}</td>
                <td>{LName}, {FName}</td>
                <td>{Position_Name}</td>
                <td>{Hiring_Status}</td>
                <td>
                    <div onClick={ () => this.handleHireCandidate(Candidate_ID, LName, FName) } className="btn btn-success mr-4 w-40">Hire</div>
                    <div onClick={ () => this.handleRejectCandidate(Candidate_ID, LName, FName) } className="btn btn-danger w-40">Reject</div>
                </td>
            </tr>
        ); 

        return (
            <>
                <h4 className="mb-4">Candidate Status</h4>
                {/* <div className="my-4 p-3 bg-gray rounded">
                    <p className="small text-uppercase text-muted m-0">Filter by:</p>
                    <form className="form-inline"> 

                       

                        <div className="form-group">
                            <label className="mr-2" htmlFor="filterName">Name:</label>
                            <input type="text" className="form-control mr-3" id="filterName" />
                        </div> 

                        <div className="form-group">
                            <label className="mr-2" htmlFor="filterPosition">Position:</label>
                            <input type="text" className="form-control mr-3" id="filterPosition" />
                        </div>

                        <div className="form-group">
                            <label className="mr-2" htmlFor="filterStatus">Status:</label>
                            <select className="mr-3 form-control" id="filterStatus">
                            <option defaultValue="None selected">None selected</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-secondary mr-2">Apply</button>
                        <button type="submit" className="btn btn-outline-secondary">Reset</button>
                    </form> */}

                {/* </div> */}

                <div className="row mb-2">
                    <div className="col-6 text-muted"><span>Showing {this.state.candidates.length} of {this.state.candidates.length}</span></div>
                    {/* <div className="col-6 text-right">
                        <select className="mr-4 text-muted" id="numberRecords">
                            <option value="5">5 per page</option>
                            <option value="10">10 per page</option>
                            <option value="25">25 per page</option>
                            <option value="50">50 per page</option>
                        </select>
                        <select className="mr-2 text-muted" id="currentPage">
                            <option value="1">Page 1</option>
                            <option value="2">Page 2</option>
                        </select>
                        <label className="mr-2 text-muted" htmlFor="currentPage">of 2</label>
                        <div className="btn-group btn-group-sm rounded-lg" role="group" aria-label="Next and previous page">
                            <button type="button" className="btn btn-light py-0"><i className="fas fa-chevron-left text-muted"></i></button>
                            <button type="button" className="btn btn-light border-left py-0"><i className="fas fa-chevron-right text-muted"></i></button>
                        </div>
                    </div> */}
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className='nosort'>ID</th>
                            <th scope="col" className='nosort'>Name</th>
                            <th scope="col" className='nosort'>Position</th>
                            <th scope="col" className='nosort'>Status</th>
                            <th scope="col" className='nosort'>Decision</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCandidate}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Candidatestatus;