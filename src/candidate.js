import React, { Component } from 'react';

class Candidate extends Component {
    


    addEducation = (event) => {
        event.preventDefault();
        console.log("works");
        let addEducationButton = document.querySelector("#addEducationButton");
        addEducationButton.appendChild("<p>test</p>");
    }

    renderAddEducation = () =>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="SchoolName">School name</label>
                <input type="text" class="form-control" id="SchoolName" placeholder="" value="" required=""/>
                <label class="mr-2" for="start_date">Start Date:</label>
                <input type="date" class="form-control mr-3" id="start_date" />
                <div class="invalid-feedback">
                Valid School name is required.
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <label for="Degree">Degree name</label>
                <input type="text" class="form-control" id="Degree" placeholder="" value="" required=""/>
                <label class="mr-2" for="end_date">End Date:</label>
                <input type="date" class="form-control mr-3" id="End_date" />
                <div class="invalid-feedback">
                Valid Degree is required.
                </div>
            </div>
        </div>

    render(){

        return (
        <>
            <div class="row justify-content-md-center">
                <div class="col text-center">
                <div class="py-5 ">
                    
                    <h2>Candidate From Input</h2>
                    <p class="lead">Below you have to enter the details of the candidate.</p>
                </div>     
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class=" col-6 order-md-1  text-center">
                    <h4 class="mb-3">Personal Details</h4>
                    <form class="needs-validation form-group" novalidate="">
                    <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
                        <div class="invalid-feedback">
                        Valid first name is required.
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""/>
                        <div class="invalid-feedback">
                        Valid last name is required.
                        </div>
                    </div>
                    </div>

                    <div class="mb-3">
                    <label for="email">Email <span class="text-muted"></span></label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                    <div class="invalid-feedback">
                        Please enter a valid email address.
                    </div>
                    </div>

                    <div class="mb-3">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""/>
                    <div class="invalid-feedback">
                        Please enter address.
                    </div>
                    </div>

                    <div class="mb-3">
                    <label for="address2">Address 2 <span class="text-muted"></span></label>
                    <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
                    </div>

                    <div class="row">

                    <div class="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select class="custom-select d-block w-100" id="state" required="">
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
                        <div class="invalid-feedback">
                        Please provide a valid state.
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input type="text" class="form-control" id="zip" placeholder="" required=""/>
                        <div class="invalid-feedback">
                        Zip code required.
                        </div>
                    </div>
                    <div class="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select class="custom-select d-block w-100" id="country" required="">
                        <option value="">Choose...</option>
                        <option>Deutschland</option>
                        </select>
                        <div class="invalid-feedback">
                        Please select a valid country.
                        </div>
                    </div>
                    </div>
                    <hr class="mb-4"/>
                    <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="same-address"/>
                    <label class="custom-control-label" for="same-address">This is same as the correspondance address </label>
                    </div>
                    
                    <hr class="mb-4"/>

                    <h4 class="mb-3"> Applying for</h4>
                    <div class="row">
                    <div class="col-md-4 mb-3">
                        <label for="status">Status</label>
                        <select class="custom-select d-block w-100" id="status" required="">
                            <option value="">Choose...</option>
                            <option>Contract</option>
                            <option>Consultant</option>
                            <option>Permanent</option>
                            <option>Trainee</option>
                            <option>Working Student</option>
                            
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid Status
                        </div>
                        </div>
                        <div class="col-md-3 mb-3">
                        <label for="status">Department</label>
                        <select class="custom-select d-block w-100" id="Department" required="">
                            <option value="">Choose...</option>
                            <option>Admin</option>
                            <option>QualityAssurance-Technology</option>
                            <option>Finance</option>
                            <option>Human Resources </option>
                            <option>Development-Technology</option>
                            <option> IT - Support</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid Status
                        </div>
                        </div>
                        <div class="col-md-5 mb-3">
                        <label for="status">Position</label>
                        <select class="custom-select d-block w-100" id="Department" required="">
                            <option value="">Choose...</option>
                            <option>Assistant Vice President </option>
                            <option>Junior Associate</option>
                            <option>Manager</option>
                            <option>Senior Associate</option>
                            <option>Senior-Manager</option>
                            <option> Working Student</option>
                            <option> Trainee</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid Status
                        </div>
                        </div>
                    </div>
                    <hr class="mb-4"/>
                    <h4 class="mb-4">Educational Background</h4>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="SchoolName">School name</label>
                            <input type="text" class="form-control" id="SchoolName" placeholder="" value="" required=""/>
                            <label class="mr-2" for="start_date">Start Date:</label>
                            <input type="date" class="form-control mr-3" id="start_date" />
                            <div class="invalid-feedback">
                            Valid School name is required.
                            </div>

                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="Degree">Degree name</label>
                            <input type="text" class="form-control" id="Degree" placeholder="" value="" required=""/>
                            <label class="mr-2" for="end_date">End Date:</label>
                            <input type="date" class="form-control mr-3" id="End_date" />
                            <div class="invalid-feedback">
                            Valid Degree is required.
                        </div>
                    </div>
                    <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="same-Add-education"  id="same-Add-education" onclick="addFields()" />
                    <button 
                        onClick={this.addEducation} 
                        id="addEducationButton"
                        class="btn btn-secondary" for="same-Add-education">
                            Add More Details
                    </button>
                    
                    </div>
                    </div>
                   
                    <hr class="mb-4"/>
                    <hr class="mb-4"/>
                    <h4 class="mb-4">Work History</h4>
                    <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="CompanyName">Comapny</label>
                        <input type="text" class="form-control" id="CompanyName" placeholder="" value="" required=""/>
                        <label class="mr-2" for="start_date">Start Date:</label>
                        <input type="date" class="form-control mr-3" id="start_date" />

                        <div class="invalid-feedback">
                        Valid Company name is required.
                        </div>

                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="PositionName">Position</label>
                        <input type="text" class="form-control" id="Position" placeholder="" value="" required=""/>
                        <label class="mr-2" for="end_date">End Date:</label>
                        <input type="date" class="form-control mr-3" id="End_date" />
                        <div class="invalid-feedback">
                        Valid position name is required.
                        </div>
                    </div>

                        
                      
                            
                        
                    </div>
                    <hr class="mb-4"/>
                    <button class="btn btn-primary btn-lg btn-block btn-success" type="submit">Submit</button>
                </form>
                </div>  
                
            </div>

        </>
        );

    
    } 
}
export default Candidate;