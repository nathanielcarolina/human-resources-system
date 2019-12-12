import React, { Component } from 'react';

class CandidateNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            educationNumFields: [1],
            workNumFields: [1],
            addressNumFields: [1]
        };
    }

    addEducation = () => {
        let educationNumFields = [...this.state.educationNumFields];
        educationNumFields.push(educationNumFields.slice(-1)[0] + 1);
        this.setState({educationNumFields});
    }

    addWork = () => {
        let workNumFields = [...this.state.workNumFields];
        workNumFields.push(workNumFields.slice(-1)[0] + 1);
        this.setState({workNumFields});
    }

    addAddress = () => {
        let addressNumFields = [...this.state.addressNumFields];
        addressNumFields.push(addressNumFields.slice(-1)[0] + 1);
        this.setState({addressNumFields});
    }

    render(){

        let { educationNumFields } = this.state;
        let { workNumFields } = this.state;
        let { addressNumFields } = this.state;

        const renderEducation = educationNumFields.map((fieldNumber) => 
            <div key={fieldNumber.toString()} className="bg-gray rounded-lg px-3 py-3 mb-4">
                <div className="mb-3">
                    <label htmlFor="SchoolName">School Name</label>
                    <input type="text" className="form-control" id="SchoolName" placeholder="" value="" required="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Degree">Degree Name</label>
                    <input type="text" className="form-control" id="Degree" placeholder="" value="" required="" />
                </div>
                <div className="row">
                    <div className="col-6">
                        <label className="mr-2" htmlFor="start_date">Start Date</label>
                        <input type="date" className="form-control mr-3" id="start_date" />
                        <div className="invalid-feedback">
                            Valid School name is required.
                        </div>
                    </div>
                    <div className="col-6">
                        <label className="mr-2" htmlFor="end_date">End Date</label>
                        <input type="date" className="form-control" id="End_date" />
                        <div className="invalid-feedback">
                            Valid Degree is required.
                        </div>
                    </div>
                </div>                
            </div>    
        );

        const renderWork = workNumFields.map((fieldNumber) =>
            <div key={fieldNumber.toString()} className="bg-gray rounded-lg px-3 py-3 mb-4">
                <div className="mb-3">
                    <label htmlFor="CompanyName">Company Name</label>
                    <input type="text" className="form-control" id="CompanyName" placeholder="" value="" required="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="PositionName">Position</label>
                    <input type="text" className="form-control" id="Position" placeholder="" value="" required="" />
                </div>
                <div className="row">
                    <div className="col-6 mb-3">
                        <label className="mr-2" htmlFor="start_date">Start Date</label>
                        <input type="date" className="form-control mr-3" id="start_date" />
                    </div>
                    <div className="col-6 mb-3">
                        <label className="mr-2" htmlFor="end_date">End Date</label>
                        <input type="date" className="form-control mr-3" id="End_date" />
                    </div>                            
                </div>
            </div>
        );

        const renderAddress = addressNumFields.map((fieldNumber) =>
            <div key={fieldNumber.toString()} className="bg-gray rounded-lg px-3 py-3 mb-4">
                <fieldset class="form-group">
                    <legend class="col-form-label">Address Type</legend>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="addressType" id="addressPermanent" value="Permanent" />
                        <label class="form-check-label" for="addressPermanent">
                            Permanent Address
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="addressType" id="addressCorrespondence" value="Correspondence" />
                        <label class="form-check-label" for="addressCorrespondence">
                            Correspondence Address
                        </label>
                    </div>
                </fieldset>

                <div class="mb-3">
                    <label for="address">Address Line 1</label>
                    <input type="text" class="form-control" id="address1" placeholder="1234 Main St" required="" />
                    <div class="invalid-feedback">
                        Please enter your shipping address.
                    </div>
                </div>

                <div class="mb-3">
                    <label for="address2">Address Line 2<span class="text-muted ml-2">(Optional)</span></label>
                    <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                </div>

                <div class="row">
                    <div class="col-md-3 mb-3">
                        <label for="state">State</label>
                        <select class="custom-select d-block w-100" id="state" required="">
                            <option value="">Choose...</option>
                            <option>California</option>
                        </select>
                        <div class="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input type="text" class="form-control" id="zip" placeholder="" required="" />
                        <div class="invalid-feedback">
                            Zip code required.
                        </div>
                    </div>
                    <div class="col-md-2 mb-3">
                        <label for="city">City</label>
                        <input type="text" class="form-control" id="city" placeholder="" required="" />
                        <div class="invalid-feedback">
                            City Name required.
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="country">Country</label>
                        <select class="custom-select d-block w-100" id="country" required="">
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid country.
                        </div>
                    </div>
                </div>

                <div class="custom-control custom-checkbox mb-2">
                    <input type="checkbox" class="custom-control-input" id="same-address" />
                    <label class="custom-control-label" for="same-address">Permanent address is the same as correspondence address</label>
                </div>
            </div>
        );

        return (
            <>
                <div className="row justify-content-md-center">
                    <div className="col text-center">
                    <div className="py-3">
                        <h2>Add New Candidate</h2>
                    </div>     
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-6 order-md-1">
                        <h4 className="mb-3">Personal Information</h4>
                        <form className="needs-validation form-group mb-5" noValidate>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                                    <div className="invalid-feedback">
                                    Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="middleName">Middle Name</label>
                                    <input type="text" className="form-control" id="middleName" placeholder="" value="" required=""/>
                                    <div className="invalid-feedback">
                                    Valid middle name is required.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email">Personal Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone_no">Personal Phone</label>
                                    <input type="email" className="form-control" id="phone_no" placeholder="(+01)######"/>
                                    <div className="invalid-feedback">
                                        Please enter a valid Phone No.
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="mr-2" htmlFor="end_date">Date of Birth</label>
                                    <input type="date" className="form-control" id="dob" />
                                    <div className="invalid-feedback">
                                        Date of Birth
                                    </div>
                                    </div>
                                 <div className="col-md-6 mb-3">
                                    <label className="mr-2" htmlFor="Identity">Identity</label>
                                    <input type="text" className="form-control" id="identiy" />
                                    <div className="invalid-feedback">
                                        National Identity
                                    </div>
                                    
                                    

                                </div>

                            </div>

                            {renderAddress}
                            <div onClick={this.addAddress} className="btn btn-secondary">
                                Add Additional Address
                            </div>

                            {/* <div className="mb-3">
                                <label htmlFor="address">Address Line 1</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                                <div className="invalid-feedback">
                                    Please enter address.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address2">Address Line 2<span className="text-muted"></span></label>
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
                            </div> */}
                            
                            <hr className="mb-4" />

                            <h4 className="mb-3">Applying For</h4>

                            <div className="mb-3">
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
                            <div className="row">
                                <div className="col-md-7 mb-3">
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
                                <div className="col-md-5 mb-3">
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
                            </div>
                            <hr className="mb-4"/>

                            <h4 className="mb-3">Educational Background</h4>
                            {/* display a number of education fields based on the 
                            number of entries in the educationNumFields state */}
                            {renderEducation} 
                            <div onClick={this.addEducation} className="btn btn-secondary">
                                Add More Education
                            </div>
                        
                            <hr className="mb-4"/>

                            <h4 className="mb-3">Work Experience</h4>
                            {renderWork}
                            <div onClick={this.addWork} className="btn btn-secondary">
                                Add More Work Experience
                            </div>

                            <hr className="mb-4"/>
                           
                            <div class="form-group mb-4">
                                <label class="mr-3">Upload your CV:</label>
                                <input type="file" name="file"/>
                            </div>

                            <div class="form-group">
                                <label for="Review">Review</label>
                                <textarea class="form-control" id="Review" rows="3"></textarea>
                            </div>
                            <button className="btn btn-primary btn-lg btn-block btn-success" type="submit">Submit</button>
                        </form>
                    </div>  
                </div>
            </>
        );
    } 
}

export default CandidateNew;