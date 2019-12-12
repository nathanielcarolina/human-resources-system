import React, { Component } from 'react';

class EmployeeEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <h4 className="mb-4">Edit Employee</h4>
                <div class="row">
                    <div class="col-md-3 mb-4">
                        <h5 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Select a section to edit</span>
                        </h5>
                        <div class="list-group mb-3 text-muted" role="tablist">
                            <a 
                                id="list-personal-information-list" 
                                data-toggle="list" 
                                href="#list-personal-information" 
                                role="tab" 
                                aria-controls="personal-information"
                                class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed active">
                                <div><h6 class="my-0">Personal Information</h6></div>
                            </a>
                            {/* <a 
                                id="list-education-work-history-list" 
                                data-toggle="list" 
                                href="#list-education-work-history" 
                                role="tab" 
                                aria-controls="education-work-history"
                                class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Education and Work History</h6></div>
                            </a> */}
                            <a href="#" class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Skills</h6></div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Payroll</h6></div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Leave Management</h6></div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Performance</h6></div>
                            </a>
                            {/* <a href="#" class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Equipment</h6></div>
                            </a> */}
                            {/* <a href="#" class="list-group-item list-group-item-light list-group-item-action d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Separation</h6></div>
                            </a> */}
                            {/* <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div><h6 class="my-0">Leave Application</h6></div>
                            </li> */}
                        </div>
                    </div>
                    <div class="col-md-9 px-5 tab-content">
                        <div class="tab-pane fade show active" id="list-personal-information" role="tabpanel" aria-labelledby="list-personal-information-list">
                            <h4 class="mb-3">Personal Information</h4>
                            <form class="needs-validation mb-5" novalidate="">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="empID">Employee ID</label>
                                        <input class="form-control" id="empID" type="text" placeholder="000001" readOnly />
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="email">Work Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="you@snars.com" readOnly />
                                        <div class="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName">First Name</label>
                                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                                        <div class="invalid-feedback">
                                        Valid first name is required.
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName">Last Name</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                                        <div class="invalid-feedback">
                                        Valid last name is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray rounded-lg px-3 py-2 mb-4">
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
                                        <div class="col-md-4 mb-3">
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
                                        <div class="col-md-5 mb-3">
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
                                <button class="btn btn-success" type="submit">Save Changes</button>
                            </form>
                        </div>

                        <div class="tab-pane fade" id="list-education-work-history" role="tabpanel" aria-labelledby="list-education-work-history-list">
                            <p>list-education-work-history-list</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeEdit;