import React, { Component } from 'react';

const EmployeeEditPersonalInformation = (props) => {
    if (props.currentEmployee && 
        props.departments && 
        props.currentDepartmentID && 
        props.currentDepartmentPositions && 
        props.managers &&
        props.employeeStatuses &&
        props.addresses) {
        
        let currentEmployee = props.currentEmployee;
        let departments = props.departments;
        let managers = props.managers;
        let employeeStatuses = props.employeeStatuses;
        let currentDepartmentPositions = props.currentDepartmentPositions;
        let addresses = props.addresses;

        console.log(departments);

        let renderDepartments = departments.map(({ Dept_ID, Dept_Name }) =>
            <option 
                key={Dept_ID.toString()} 
                value={Dept_ID} 
                selected={Dept_ID === currentEmployee.Dept_ID ? 'true' : ''} >
                    {Dept_Name}
            </option>
        ); 

        let renderCurrentDepartmentPositions = currentDepartmentPositions.map(({ Position_ID, Position_Name }) =>
            <option 
                key={Position_ID.toString()} 
                value={Position_ID} 
                selected={Position_Name === currentEmployee.Position ? 'true' : ''} >
                    {Position_Name}
            </option>
        ); 

        let renderEmployeeStatuses = employeeStatuses.map(({ Emp_Status_ID, Employee_Status_Name }) =>
            <option 
                key={Emp_Status_ID.toString()} 
                selected={Employee_Status_Name === currentEmployee.Status ? 'true' : ''} >
                    {Employee_Status_Name}
            </option>
        ); 

        let renderManagers = managers.map(({ EmployeeID, LastName, FirstName }) =>
            <option 
                key={EmployeeID.toString()} 
                selected={EmployeeID === currentEmployee.ReportingManager ? 'true' : ''} >
                    {LastName}, {FirstName}
            </option>
        ); 

        return(
            <>
                <h4 class="mb-3">Personal Information</h4>
                <form class="needs-validation mb-5" novalidate="">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="empID">Employee ID</label>
                            <input class="form-control" id="empID" type="text" placeholder={currentEmployee.EmployeeID} readOnly />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="lastName">Last Name</label>
                            <input type="text" class="form-control" id="lastName" placeholder={currentEmployee.LastName} value="" required="" readOnly />
                            <div class="invalid-feedback">
                            Valid last name is required.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="firstName">First Name</label>
                            <input type="text" class="form-control" id="firstName" placeholder={currentEmployee.FirstName} value="" required="" readOnly />
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="firstName">Middle Name</label>
                            <input type="text" class="form-control" id="middleName" placeholder={currentEmployee.MiddleName} value="" required="" readOnly />
                            <div class="invalid-feedback">
                            Valid middle name is required.
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="Department">Department</label>
                                <select class="form-control" id="Department">
                                    {renderDepartments}
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="Position">Position</label>
                                <select class="form-control" id="Position">
                                    {renderCurrentDepartmentPositions}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="Manager">Manager</label>
                                <select class="form-control" id="Manager">
                                    {renderManagers}
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="EmployeeStatus">Employee Status</label>
                                <select class="form-control" id="EmployeeStatus">
                                    {renderEmployeeStatuses}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="WorkEmail">Work Email</label>
                            <input type="email" class="form-control" id="WorkEmail" placeholder={currentEmployee.WorkEmail} readOnly />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="WorkContact">Work Contact Number</label>
                            <input class="form-control" id="WorkContact" type="text" defaultValue={currentEmployee.WorkContact} />
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
                            <label for="address">Address Line 1</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="address1"
                                defaultValue={addresses[0] ? addresses[0].Address_Line1 : ''} 
                                placeholder="1234 Main St" 
                                required="" />
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address2">Address Line 2<span class="text-muted ml-2">(Optional)</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="address2" 
                                defaultValue={addresses[0] ? addresses[0].Address_Line2 : ''} 
                                placeholder="Apartment or suite" />
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="City">City</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="City" 
                                    defaultValue={addresses[0] ? addresses[0].City : ''} 
                                    placeholder="" 
                                    required="" />
                                <div class="invalid-feedback">
                                    City required.
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="state">State</label>
                                <select class="custom-select d-block w-100" id="state" required="">
                                    <option selected={addresses[0] ? (addresses[0].State === 'Bavaria' ? 'true' : '') : ''}>Bavaria</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Lower Saxony' ? 'true' : '') : ''}>Lower Saxony</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Baden-Württemberg' ? 'true' : '') : ''}>Baden-Württemberg</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'North Rhine-Westphalia' ? 'true' : '') : ''}>North Rhine-Westphalia</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Brandenburg' ? 'true' : '') : ''}>Brandenburg</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Mecklenburg-Vorpommern' ? 'true' : '') : ''}>Mecklenburg-Vorpommern</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Hesse' ? 'true' : '') : ''}>Hesse</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Saxony-Anhalt' ? 'true' : '') : ''}>Saxony-Anhalt</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Rhineland-Palatinate' ? 'true' : '') : ''}>Rhineland-Palatinate</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Saxony' ? 'true' : '') : ''}>Saxony</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Thuringia' ? 'true' : '') : ''}>Thuringia</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Schleswig-Holstein' ? 'true' : '') : ''}>Schleswig-Holstein</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Saarland' ? 'true' : '') : ''}>Saarland</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Berlin' ? 'true' : '') : ''}>Berlin</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Hamburg' ? 'true' : '') : ''}>Hamburg</option>
                                    <option selected={addresses[0] ? (addresses[0].State === 'Bremen' ? 'true' : '') : ''}>Bremen</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="zip">Zip</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="zip" 
                                    defaultValue={addresses[0] ? addresses[0].Zipcode : ''}
                                    placeholder="" 
                                    required="" />
                                <div class="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="country">Country</label>
                                <select class="custom-select d-block w-100" id="country" required="">
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
                    <input type="button" class="btn btn-success" type="submit" value="Save Changes" />
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