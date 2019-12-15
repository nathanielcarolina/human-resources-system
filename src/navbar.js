import React, { Component } from 'react';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedEmployeeID: null
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {
        window.history.pushState({}, null, `/employee/edit/${this.state.searchedEmployeeID}`);
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-dark bg-success">
                <a className="navbar-brand" href="#">SNARS Human Resources System</a>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit} >
                    <span className="navbar-text text-white small text-uppercase mr-3">Employee Search:</span>
                    <input 
                        name="searchedEmployeeID" 
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Enter Employee ID" 
                        aria-label="Search"
                        onChange={this.handleChange} />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default Navbar;