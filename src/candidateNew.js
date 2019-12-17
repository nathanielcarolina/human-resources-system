import React, { Component } from 'react';

class CandidateNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            departments: null, 
            currentDepartmentPositions: null, 
            currentDepartmentID: null, 
            employeeStatuses: null, 
            FName: null,
            LName: null,
            // MName: null,
            PersonalEmail: null,
            PersonalContact: null,
            DOB: null,
            SSN: null,
            Address1: null,
            Address2: null,
            City: null,
            State: null,
            Zip: null,
            Country: "Deutschland",
            Department: null,
            Position: null,
            EmployeeStatus: null,
            School: null,
            School_Degree: null,
            School_StartDate: null,
            School_EndDate: null,
            Company: null,
            Company_Position: null,
            Company_StartDate: null,
            Company_EndDate: null,
            Remarks: null
            // educationNumFields: [1],
            // workNumFields: [1],
            // addressNumFields: [1]
        };
    }

    componentDidMount() {
        this.getDepartments();
        this.getEmployeeStatuses();
    }

    getDepartments = _ => {
        fetch('http://localhost:4000/departments')
        .then(response => response.json())
        .then(response => this.setState({ departments: response.data }))
        .catch(err => console.error(err));
    }

    getCurrentDepartmentPositions = _ => {
        fetch(`http://localhost:4000/department/${this.state.currentDepartmentID}`)
        .then(response => response.json())
        .then(response => this.setState({ currentDepartmentPositions: response.data }))
        .catch(err => console.error(err));
    }

    getEmployeeStatuses = _ => {
        fetch('http://localhost:4000/employee-statuses')
        .then(response => response.json())
        .then(response => this.setState({ employeeStatuses: response.data }))
        .catch(err => console.error(err));
    }

    setDepartmentID = (currentDepartmentID) => {
        this.setState({ currentDepartmentID: currentDepartmentID }, () => {
            this.getCurrentDepartmentPositions();
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleChangeDepartment = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.setDepartmentID(event.target.value);
    }

    handleSubmitCandidateNew = (event) => {
        let body = JSON.stringify({ 
            FName: this.state.FName,
            LName: this.state.LName,
            // MName: this.state.MName,
            PersonalEmail: this.state.PersonalEmail,
            PersonalContact: this.state.PersonalContact,
            DOB: this.state.DOB,
            SSN: this.state.SSN,
            Address1: this.state.Address1,
            Address2: this.state.Address2,
            City: this.state.City,
            State: this.state.State,
            Zip: this.state.Zip,
            Country: this.state.Country,
            Department: this.state.Department,
            Position: this.state.Position,
            EmployeeStatus: this.state.EmployeeStatus,
            School: this.state.School,
            School_Degree: this.state.School_Degree,
            School_StartDate: this.state.School_StartDate,
            School_EndDate: this.state.School_EndDate,
            Company: this.state.Company,
            Company_Position: this.state.Company_Position,
            Company_StartDate: this.state.Company_StartDate,
            Company_EndDate: this.state.Company_EndDate,
            Remarks: this.state.Remarks
        });
        console.log(body);
        fetch('http://localhost:4000/candidate/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body
        })
        .then(response => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            window.alert(`Candidate ${this.state.LName}, ${this.state.FName} successfully added.`);
        })
    }

    // addEducation = () => {
    //     let educationNumFields = [...this.state.educationNumFields];
    //     educationNumFields.push(educationNumFields.slice(-1)[0] + 1);
    //     this.setState({educationNumFields});
    // }

    // addWork = () => {
    //     let workNumFields = [...this.state.workNumFields];
    //     workNumFields.push(workNumFields.slice(-1)[0] + 1);
    //     this.setState({workNumFields});
    // }

    // addAddress = () => {
    //     let addressNumFields = [...this.state.addressNumFields];
    //     addressNumFields.push(addressNumFields.slice(-1)[0] + 1);
    //     this.setState({addressNumFields});
    // }

    render(){

        if ( this.state.departments && this.state.employeeStatuses ) {

            let departments = this.state.departments;
            let currentDepartmentPositions = this.state.currentDepartmentPositions;
            let employeeStatuses = this.state.employeeStatuses;

            let renderDepartments = departments.map(({ Dept_ID, Dept_Name }) =>
                <option key={Dept_ID.toString()} value={Dept_ID} >
                    {Dept_Name}
                </option>
            ); 

            let renderEmployeeStatuses = employeeStatuses.map(({ Emp_Status_ID, Employee_Status_Name }) =>
                <option key={Emp_Status_ID.toString()} value={Emp_Status_ID} >
                    {Employee_Status_Name}
                </option>
            ); 

            let renderCurrentDepartmentPositions;

            if ( currentDepartmentPositions ) {
                renderCurrentDepartmentPositions = currentDepartmentPositions.map(({ Position_ID, Position_Name }) =>
                    <option key={Position_ID.toString()} value={Position_ID} >
                        {Position_Name}
                    </option>
                ); 
            } 

        // let { educationNumFields } = this.state;
        // let { workNumFields } = this.state;
        // let { addressNumFields } = this.state;

            return (
                <>
                    <div className="row justify-content-md-center">
                        <div className="col text-center">
                        <div className="py-4">
                            <h2>Add New Candidate</h2>
                        </div>     
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-7 order-md-1">
                            <h4 className="mb-3">Personal Information</h4>
                            <form className="needs-validation form-group mb-5" noValidate>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="FName">First Name</label>
                                        <input name="FName" type="text" className="form-control" id="FName" placeholder="" required="" onChange={this.handleChange} />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="LName">Last Name</label>
                                        <input name="LName" type="text" className="form-control" id="LName" placeholder="" required="" onChange={this.handleChange} />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                    {/* <div className="col-md-4 mb-3">
                                        <label htmlFor="MName">Middle Name</label>
                                        <input name="MName" type="text" className="form-control" id="MName" placeholder="" required="" onChange={this.handleChange} />
                                    </div> */}
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="PersonalEmail">Personal Email</label>
                                        <input name="PersonalEmail" type="email" className="form-control" id="PersonalEmail" placeholder="you@example.com" onChange={this.handleChange} />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="PersonalContact">Contact Number</label>
                                        <input name="PersonalContact" type="email" className="form-control" id="PersonalContact" placeholder="+49-XXX-XXXX" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="mr-2" htmlFor="DOB">Date of Birth</label>
                                        <input name="DOB" type="date" className="form-control" id="DOB" onChange={this.handleChange} />
                                        </div>
                                     <div className="col-md-6 mb-3">
                                        <label className="mr-2" htmlFor="SSN">ID Number</label>
                                        <input name="SSN" type="text" className="form-control" id="SSN" onChange={this.handleChange} />
                                    </div>
                                </div>
    
                                <div className="bg-gray rounded-lg px-3 py-2 mb-4">
    
                                    {/* <div class="form-group">
                                        <label for="AddressType">Address Type</label>
                                        <select class="form-control" id="AddressType">
                                            <option 
                                                key="Permanent" 
                                                value="Permanent" 
                                                selected={Dept_ID === currentEmployee.Dept_ID ? 'true' : ''} >
                                                    {Dept_Name}
                                            </option>
                                        </select>
                                    </div> */}
    
                                    {/* <fieldset class="form-group">
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
                                    </fieldset> */}
    
                                    <div class="mb-3 mt-2">
                                        <label for="Address1">Address Line 1</label>
                                        <input 
                                            type="text" 
                                            name="Address1"
                                            class="form-control" 
                                            id="Address1"
                                            onChange={this.handleChange} 
                                            placeholder="1234 Main St" 
                                            required="" />
                                    </div>
    
                                    <div class="mb-3">
                                        <label for="Address2">Address Line 2<span class="text-muted ml-2">(Optional)</span></label>
                                        <input 
                                            type="text" 
                                            name="Address2"
                                            class="form-control" 
                                            id="Address2" 
                                            onChange={this.handleChange} 
                                            placeholder="Apartment or suite" />
                                    </div>
    
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="City">City</label>
                                            <input 
                                                type="text" 
                                                name="City"
                                                class="form-control" 
                                                id="City" 
                                                onChange={this.handleChange} 
                                                placeholder="" 
                                                required="" />
                                            <div class="invalid-feedback">
                                                City required.
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="State">State</label>
                                            <select name="State" onChange={this.handleChange} class="custom-select d-block w-100" id="State" required="">
                                                <option>Select State</option>
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
                                    </div>
    
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="Zip">Zip</label>
                                            <input 
                                                type="text" 
                                                name="Zip"
                                                class="form-control" 
                                                id="Zip" 
                                                onChange={this.handleChange} 
                                                placeholder="" 
                                                required="" />
                                            <div class="invalid-feedback">
                                                Zip code required.
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="Country">Country</label>
                                            <select name="Country" class="custom-select d-block w-100" id="Country" required="">
                                                <option>Deutschland</option>
                                            </select>
                                        </div>
                                    </div>
    
                                    {/* <div class="custom-control custom-checkbox mb-2">
                                        <input type="checkbox" class="custom-control-input" id="same-address" />
                                        <label class="custom-control-label" for="same-address">Permanent address is the same as correspondence address</label>
                                    </div> */}
                                </div>
                                
                                <hr className="mb-4" />
    
                                <h4 className="mb-3">Applying For</h4>
                                <div className="mb-3">
                                    <div class="form-group">
                                        <label for="Department">Department</label>
                                        <select name="Department" class="form-control" id="Department" onChange={this.handleChangeDepartment} >
                                            <option>Select Department</option>
                                            {renderDepartments}
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-7 mb-3">
                                        <div class="form-group">
                                            <label for="Position">Position</label>
                                            <select name="Position" class="form-control" id="Position" onChange={this.handleChange} >
                                                <option>Select Position</option>
                                                {renderCurrentDepartmentPositions}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-5 mb-3">
                                        <div class="form-group">
                                            <label for="EmployeeStatus">Employee Status</label>
                                            <select name="EmployeeStatus" class="form-control" id="EmployeeStatus" onChange={this.handleChange} >
                                                <option>Select Status</option>
                                                {renderEmployeeStatuses}
                                            </select>
                                        </div>
                                    </div>
                                </div>
    
                                <hr className="mb-4"/>
    
                                <h4 className="mb-3">Educational Background</h4>
                                <div className="bg-gray rounded-lg px-3 py-3 mb-4">
                                    <div className="mb-3">
                                        <label htmlFor="School">School Name</label>
                                        <input name="School" type="text" className="form-control" id="School" placeholder="" required="" onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="School_Degree">Degree Name</label>
                                        <input name="School_Degree" type="text" className="form-control" id="School_Degree" placeholder="" required="" onChange={this.handleChange} />
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label className="mr-2" htmlFor="School_StartDate">Start Date</label>
                                            <input name="School_StartDate" type="date" className="form-control mr-3" id="School_StartDate" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-6">
                                            <label className="mr-2" htmlFor="School_EndDate">End Date</label>
                                            <input name="School_EndDate" type="date" className="form-control" id="School_EndDate" onChange={this.handleChange} />
                                        </div>
                                    </div>                
                                </div>    
    
                                {/* <div onClick={this.addEducation} className="btn btn-secondary">
                                    Add More Education
                                </div> */}
                            
                                <hr className="mb-4"/>
    
                                <h4 className="mb-3">Work Experience</h4>
                                <div className="bg-gray rounded-lg px-3 py-3 mb-4">
                                    <div className="mb-3">
                                        <label htmlFor="Company">Company Name</label>
                                        <input name="Company" type="text" className="form-control" id="Company" placeholder="" required="" onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Company_Position">Position</label>
                                        <input name="Company_Position" type="text" className="form-control" id="Company_Position" placeholder="" required="" onChange={this.handleChange} />
                                    </div>
                                    <div className="row">
                                        <div className="col-6 mb-3">
                                            <label className="mr-2" htmlFor="Company_StartDate">Start Date</label>
                                            <input name="Company_StartDate" type="date" className="form-control mr-3" id="Company_StartDate" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label className="mr-2" htmlFor="Company_EndDate">End Date</label>
                                            <input name="Company_EndDate" type="date" className="form-control mr-3" id="Company_EndDate" onChange={this.handleChange} />
                                        </div>                            
                                    </div>
                                </div>
    
                                {/* <div onClick={this.addWork} className="btn btn-secondary">
                                    Add More Work Experience
                                </div> */}    
                                {/* <div class="form-group mb-4">
                                    <label class="mr-3">Upload your CV:</label>
                                    <input type="file" name="file"/>
                                </div> */}
    
                                <div class="form-group mb-4">
                                    <label for="Remarks">Remarks</label>
                                    <textarea name="Remarks" className="form-control" id="Remarks" placeholder="Enter remarks regarding the candidate" rows="3" onChange={this.handleChange}></textarea>
                                </div>
                                                               
                                <input type="button" onClick={this.handleSubmitCandidateNew} class="btn btn-success" value="Submit" />
                            </form>
                        </div>  
                    </div>
                </>
            );
        } else {
            return(
                <>
                    <div className="text-center">
                        <div className="mb-3">Loading...</div>
                        <div class="spinner-border text-secondary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </>
            ) 
        }
    } 
}

export default CandidateNew;