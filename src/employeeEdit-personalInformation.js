import React, { Component } from 'react';

const EmployeeEditPersonalInformation = (props) => {

    if (props.state.currentEmployee && 
        props.state.departments && 
        props.state.currentDepartmentID && 
        props.state.currentDepartmentPositions && 
        props.state.managers &&
        props.state.employeeStatuses &&
        props.state.addresses) {
        
        let currentEmployee = props.state.currentEmployee;
        let departments = props.state.departments;
        let managers = props.state.managers;
        let employeeStatuses = props.state.employeeStatuses;
        let currentDepartmentPositions = props.state.currentDepartmentPositions;
        let addresses = props.state.addresses;

        let renderDepartments = departments.map(({ Dept_ID, Dept_Name }) =>
            <option key={Dept_ID.toString()} value={Dept_ID} >
                {Dept_Name}
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

        let renderEmployeeStatuses = employeeStatuses.map(({ Emp_Status_ID, Employee_Status_Name }) =>
            <option key={Emp_Status_ID.toString()} value={Emp_Status_ID} >
                {Employee_Status_Name}
            </option>
        ); 

        let renderManagers = managers.map(({ EmployeeID, LastName, FirstName }) =>
            <option key={EmployeeID.toString()} value={EmployeeID} >
                {LastName}, {FirstName}
            </option>
        ); 

        return(
            <>
                <h4 class="mb-3">Personal Information</h4>
                <form class="needs-validation mb-5" novalidate="">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label htmlFor="empID">Employee ID</label>
                            <input class="form-control" id="empID" type="text" placeholder={currentEmployee.EmployeeID} readOnly />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" class="form-control" id="lastName" placeholder={currentEmployee.LastName} value="" required="" readOnly />
                            <div class="invalid-feedback">
                            Valid last name is required.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" class="form-control" id="firstName" placeholder={currentEmployee.FirstName} value="" required="" readOnly />
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                        {/* <div class="col-md-4 mb-3">
                            <label htmlFor="firstName">Middle Name</label>
                            <input type="text" class="form-control" id="middleName" placeholder={currentEmployee.MiddleName} value="" required="" readOnly />
                            <div class="invalid-feedback">
                            Valid middle name is required.
                            </div>
                        </div> */}
                    </div>
                    <hr className="my-4" />
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label htmlFor="Department">Department</label>
                                <select name="Department" class="form-control" id="Department" value={props.Department} onChange={props.handleChangeDepartment}>
                                    {renderDepartments}
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label htmlFor="Position">Position</label>
                                <select name="Position" class="form-control" id="Position" value={props.Position} onChange={props.handleChange}>
                                    <option>Select Position</option>
                                    {renderCurrentDepartmentPositions}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label htmlFor="Manager">Manager</label>
                                <select name="Manager" class="form-control" id="Manager" value={props.Manager} onChange={props.handleChange}>
                                    {renderManagers}
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label htmlFor="EmployeeStatus">Employee Status</label>
                                <select name="EmployeeStatus" class="form-control" id="EmployeeStatus" value={props.EmployeeStatus} onChange={props.handleChange}>
                                    {renderEmployeeStatuses}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label htmlFor="WorkEmail">Work Email</label>
                            <input type="email" class="form-control" id="WorkEmail" placeholder={currentEmployee.WorkEmail} readOnly />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label htmlFor="PersonalContact">Contact Number</label>
                            <input name="PersonalContact" class="form-control" id="PersonalContact" type="text" value={props.PersonalContact} onChange={props.handleChange} />
                        </div>
                    </div>

                    <hr className="my-4" />
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
                            <label htmlFor="Address1">Address Line 1</label>
                            <input 
                                type="text" 
                                name="Address1"
                                class="form-control" 
                                id="Address1"
                                value={props.Address1} onChange={props.handleChange} 
                                placeholder="1234 Main St" 
                                required="" />
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label htmlFor="Address2">Address Line 2<span class="text-muted ml-2">(Optional)</span></label>
                            <input 
                                type="text" 
                                name="Address2"
                                class="form-control" 
                                id="Address2" 
                                value={props.Address2} onChange={props.handleChange} 
                                placeholder="Apartment or suite" />
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label htmlFor="City">City</label>
                                <input 
                                    type="text" 
                                    name="City"
                                    class="form-control" 
                                    id="City" 
                                    value={props.City} onChange={props.handleChange} 
                                    placeholder="" 
                                    required="" />
                                <div class="invalid-feedback">
                                    City required.
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label htmlFor="State">State</label>
                                <select name="State" value={props.State} onChange={props.handleChange} class="custom-select d-block w-100" id="State" required="">
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
                                <label htmlFor="Zip">Zip</label>
                                <input 
                                    type="text" 
                                    name="Zip"
                                    class="form-control" 
                                    id="Zip" 
                                    value={props.Zip} onChange={props.handleChange} 
                                    placeholder="" 
                                    required="" />
                                <div class="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label htmlFor="Country">Country</label>
                                <select class="custom-select d-block w-100" id="Country" required="">
                                    <option>Deutschland</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                        </div>

                        {/* <div class="custom-control custom-checkbox mb-2">
                            <input type="checkbox" class="custom-control-input" id="same-address" />
                            <label class="custom-control-label" for="same-address">Permanent address is the same as correspondence address</label>
                        </div> */}
                    </div>
                    <input type="button" onClick={props.handleSubmit} class="btn btn-success" value="Save Changes" />
                </form>
            </>
        )
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

export default EmployeeEditPersonalInformation;