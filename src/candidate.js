import React, { Component } from 'react';

class Candidate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            educationNumFields: [1]
        };
    }

    addEducation = () => {
        let educationNumFields = [...this.state.educationNumFields];
        educationNumFields.push(educationNumFields.slice(-1)[0] + 1);
        this.setState({educationNumFields});
    
    }


    render(){

        let { educationNumFields } = this.state;

        const renderEducation = educationNumFields.map((fieldNumber) => 
            <div key={fieldNumber.toString()} className="row mb-4">
                <div className="col-md-6 mb-3">
                    <label htmlFor="SchoolName">School name</label>
                    <input type="text" className="form-control" id="SchoolName" placeholder="" value="" required=""/>
                    <label className="mr-2" htmlFor="start_date">Start Date:</label>
                    <input type="date" className="form-control mr-3" id="start_date" />
                    <div className="invalid-feedback">
                        Valid School name is required.
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="Degree">Degree name</label>
                    <input type="text" className="form-control" id="Degree" placeholder="" value="" required=""/>
                    <label className="mr-2" htmlFor="end_date">End Date:</label>
                    <input type="date" className="form-control mr-3" id="End_date" />
                    <div className="invalid-feedback">
                    Valid Degree is required.
                    </div>
                </div>
            </div>    
        );

        return (
            <>
                <div className="row justify-content-md-center">
                    <div className="col text-center">
                    <div className="py-5 ">
                        <h2>Candidate From Input</h2>
                        <p className="lead">Below you have to enter the details of the candidate.</p>
                    </div>     
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className=" col-6 order-md-1  text-center">
                        <h4 className="mb-3">Personal Details</h4>
                        <form className="needs-validation form-group" noValidate>
                            <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                                <div className="invalid-feedback">
                                Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                                <div className="invalid-feedback">
                                Valid last name is required.
                                </div>
                            </div>
                            </div>

                            <div className="mb-3">
                            <label htmlFor="email">Email <span className="text-muted"></span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                            <div className="invalid-feedback">
                                Please enter a valid email address.
                            </div>
                            </div>

                            <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                            <div className="invalid-feedback">
                                Please enter address.
                            </div>
                            </div>

                            <div className="mb-3">
                            <label htmlFor="address2">Address 2 <span className="text-muted"></span></label>
                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                            </div>

                            <div className="row">

                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">State</label>
                                <select className="custom-select d-block w-100" id="state" required="">
                                <option value="">Choose...</option>
                                <option>Bavaria</option>
                                <option>Lower Saxony</option>
                                <option>Baden-Württemberg</option>
                                <option>North Rhine-Westphalia</option>
                                <option>Brandenburg</option>
                                <option>Mecklenburg-Vorpommern</option>
                                <option>Hesse</option>
                                <option>Saxony-Anhalt</option>
                                <option>Rhineland-Palatinate</option>
                                <option>Saxony</option>
                                <option>Thuringia</option>
                                <option>Schleswig-Holstein</option>
                                <option>Saarland</option>
                                <option>Berlin</option>
                                <option>Hamburg</option>
                                <option>Bremen</option>
                                </select>
                                <div className="invalid-feedback">
                                Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                                <div className="invalid-feedback">
                                Zip code required.
                                </div>
                            </div>
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Country</label>
                                <select className="custom-select d-block w-100" id="country" required="">
                                <option value="">Choose...</option>
                                <option>Deutschland</option>
                                </select>
                                <div className="invalid-feedback">
                                Please select a valid country.
                                </div>
                            </div>
                            </div>
                            <hr className="mb-4"/>
                            <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address"/>
                            <label className="custom-control-label" htmlFor="same-address">This is same as the correspondance address </label>
                            </div>
                            
                            <hr className="mb-4"/>

                            <h4 className="mb-3">Applying for</h4>
                            <div className="row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="status">Status</label>
                                <select className="custom-select d-block w-100" id="status" required="">
                                    <option value="">Choose...</option>
                                    <option>Contract</option>
                                    <option>Consultant</option>
                                    <option>Permanent</option>
                                    <option>Trainee</option>
                                    <option>Working Student</option>
                                    
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid Status
                                </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                <label htmlFor="status">Department</label>
                                <select className="custom-select d-block w-100" id="Department" required="">
                                    <option value="">Choose...</option>
                                    <option>Admin</option>
                                    <option>QualityAssurance-Technology</option>
                                    <option>Finance</option>
                                    <option>Human Resources </option>
                                    <option>Development-Technology</option>
                                    <option>IT - Support</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid Status
                                </div>
                                </div>
                                <div className="col-md-5 mb-3">
                                <label htmlFor="status">Position</label>
                                <select className="custom-select d-block w-100" id="Department" required="">
                                    <option value="">Choose...</option>
                                    <option>Assistant Vice President </option>
                                    <option>Junior Associate</option>
                                    <option>Manager</option>
                                    <option>Senior Associate</option>
                                    <option>Senior-Manager</option>
                                    <option>Working Student</option>
                                    <option>Trainee</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid Status
                                </div>
                                </div>
                            </div>
                            <hr className="mb-4"/>

                            <h4 className="mb-4">Educational Background</h4>

                            {/* display a number of education fields based on the 
                            number of entries in the educationNumFields state */}
                            {renderEducation} 

                            <div onClick={this.addEducation} className="btn btn-secondary">
                                Add More Details
                            </div>
                        
                            <hr className="mb-4"/>
                            <hr className="mb-4"/>
                            <h4 className="mb-4">Work History</h4>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="CompanyName">Comapny</label>
                                    <input type="text" className="form-control" id="CompanyName" placeholder="" value="" required=""/>
                                    <label className="mr-2" htmlFor="start_date">Start Date:</label>
                                    <input type="date" className="form-control mr-3" id="start_date" />

                                    <div className="invalid-feedback">
                                    Valid Company name is required.
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="PositionName">Position</label>
                                    <input type="text" className="form-control" id="Position" placeholder="" value="" required=""/>
                                    <label className="mr-2" htmlFor="end_date">End Date:</label>
                                    <input type="date" className="form-control mr-3" id="End_date" />
                                    <div className="invalid-feedback">
                                    Valid position name is required.
                                    </div>
                                </div>                            
                            </div>
                            <hr className="mb-4"/>
                           
                            <div class="form-group mt-4">
                                <label class="mr-3">Upload your CV:</label>
                                <input type="file" name="file"/>
                            </div>
                                                
                                                
                          
 
                            <button className="btn btn-primary btn-lg btn-block btn-success" type="submit">Submit</button>
                        </form>
                    </div>  
                </div>
            </>
        );
    } 
}

export default Candidate;