import React, { Component } from 'react';
import employeePicture from './employeePicture.jpg';
import { Link, NavLink } from "react-router-dom";

class Sidebar extends Component {

    toggleVisibilityDepartments() {
        let departmentsList = document.getElementsByClassName("departments-list");
        for (let i = 0; i < departmentsList.length; i++) {
            departmentsList[i].classList.toggle("d-none");
        }
        let departmentsLink = document.getElementById("list-departments-list");
        departmentsLink.classList.toggle("active");
    }

    toggleVisibilityRecruitment() {
        let recruitmentList = document.getElementsByClassName("recruitment-list");
        for (let i = 0; i < recruitmentList.length; i++) {
            recruitmentList[i].classList.toggle("d-none");
        }
        let recruitmentLink = document.getElementById("list-recruitment-list");
        recruitmentLink.classList.toggle("active");
    }

    render() {
        return (
            <>
                <div className="sticky-top offset-top-56">
                    <div className="media p-3 border-bottom">
                        <img src={employeePicture} className="headshot mr-3" alt="Sample HR Employee Picture" />
                        <div className="media-body align-self-center">
                            <h5 className="m-0">Hello Patricia!</h5>
                            <a href="#" className="small text-secondary">Sign out<i className="fas fa-sign-out-alt ml-1"></i></a>
                        </div>
                    </div>
                    <div id="sidebar" className="list-group list-group-flush" role="tablist">

                        <NavLink to="/employee-information"
                            className="list-group-item list-group-item-action list-group-item-light"
                            role="tab" >
                            <i className="fas fa-users mr-2"></i>
                            Employee Information
                        </NavLink>

                        <Link to="#"
                            id="list-departments-list" 
                            data-toggle="list" 
                            role="tab" 
                            className="list-group-item list-group-item-action list-group-item-light"
                            onClick={this.toggleVisibilityDepartments} >
                                <i className="fas fa-sitemap mr-2"></i>
                                Departments
                                <i className="fas fa-chevron-down float-right pt-1"></i>
                        </Link>

                        <Link to="/departments/administrative"
                            className="list-group-item list-group-item-action list-group-item-light departments-list d-none"
                            role="tab" >
                            <i className="fas fa-copy mr-2 ml-4"></i>
                            Administrative
                        </Link>

                        <Link to="/departments/development"
                            className="list-group-item list-group-item-action list-group-item-light departments-list d-none"
                            role="tab" >
                            <i className="fas fa-code mr-2 ml-4"></i>
                            Development
                        </Link>

                        <Link to="/departments/finance"
                            className="list-group-item list-group-item-action list-group-item-light departments-list d-none"
                            role="tab" >
                            <i className="fas fa-file-invoice-dollar mr-2 ml-4"></i>
                            Finance
                        </Link>

                        <Link to="/departments/human-resources"
                            className="list-group-item list-group-item-action list-group-item-light departments-list d-none"
                            role="tab" >
                            <i className="fas fa-portrait mr-2 ml-4"></i>
                            Human Resources
                        </Link>

                        <Link to="/departments/it-support"
                            className="list-group-item list-group-item-action list-group-item-light departments-list d-none"
                            role="tab" >
                            <i className="fas fa-question-circle mr-2 ml-4"></i>
                            IT Support
                        </Link>

                        <Link to="/departments/quality-assurance"
                            className="list-group-item list-group-item-action list-group-item-light departments-list d-none"
                            role="tab" >
                            <i className="fas fa-list-alt mr-2 ml-4"></i>
                            Quality Assurance
                        </Link>

                        <NavLink to="/payroll"
                            className="list-group-item list-group-item-action list-group-item-light" 
                            role="tab" >
                            <i className="fas fa-money-bill mr-2"></i>
                            Payroll
                        </NavLink>

                        {/* <NavLink to="/leave-management"
                            className="list-group-item list-group-item-action list-group-item-light"
                            role="tab" >
                            <i className="fas fa-bed mr-2"></i>
                            Leave Management
                        </NavLink> */}

                        <NavLink to="/performance"
                            className="list-group-item list-group-item-action list-group-item-light"
                            role="tab" >
                            <i className="fas fa-chart-line mr-2"></i>
                            Performance
                        </NavLink>

                        <Link to="#"
                            id="list-recruitment-list" 
                            data-toggle="list" 
                            role="tab" 
                            className="list-group-item list-group-item-action list-group-item-light"
                            onClick={this.toggleVisibilityRecruitment} >
                                <i className="fas fa-user-graduate mr-2"></i>
                                Recruitment
                                <i className="fas fa-chevron-down float-right pt-1"></i>
                        </Link>

                        <Link to="/candidate/new"
                            role="tab" 
                            aria-controls="candidate-form" 
                            className="list-group-item list-group-item-action list-group-item-light recruitment-list d-none">
                                <i className="fas fa-plus-circle mr-2 ml-4"></i>
                                Add New Candidate
                        </Link>

                        <Link to="/candidate/edit"
                            role="tab" 
                            aria-controls="candidate-edit" 
                            className="list-group-item list-group-item-action list-group-item-light recruitment-list d-none">
                                <i className="fas fa-user-edit mr-2 ml-4"></i>
                                Edit Candidate
                        </Link>
                        

                        {/* <Link to="/employee/edit"
                            role="tab" 
                            aria-controls="employee-edit" 
                            className="list-group-item list-group-item-action list-group-item-light recruitment-list d-none">
                                <i class="fas fa-user-cog mr-2 ml-4"></i>
                                Edit Employee
                        </Link> */}

                        {/* <a 
                            href="#list-employee-form" 
                            id="list-employee-form-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="employee-form" 
                            className="list-group-item list-group-item-action list-group-item-light recruitment-list d-none">
                                <i className="fas fa-suitcase mr-2 ml-4"></i>
                                Add New Employee
                        </a> */}

                        <NavLink to="/equipment"
                            className="list-group-item list-group-item-action list-group-item-light"
                            role="tab" >
                            <i className="fas fa-desktop mr-2"></i>
                            Equipment
                        </NavLink>

                        <NavLink to="/separation"
                            className="list-group-item list-group-item-action list-group-item-light"
                            role="tab" >
                            <i className="fas fa-briefcase mr-2"></i>
                            Separation
                        </NavLink>

                    </div>               
                </div>
            </>
        );
    }
}

export default Sidebar;