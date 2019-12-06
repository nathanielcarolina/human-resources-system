import React, { Component } from 'react';
import employeePicture from './employeePicture.jpg';

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
                        <a 
                            href="#list-employee-information" 
                            id="list-employee-information-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="employee-information" 
                            className="list-group-item list-group-item-action list-group-item-light active">
                                <i className="fas fa-users mr-2"></i>
                                Employee Information
                        </a>
                        <a 
                            href="#list-departments" 
                            id="list-departments-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="departments" 
                            className="list-group-item list-group-item-action list-group-item-light"
                            onClick={this.toggleVisibilityDepartments} >
                                <i className="fas fa-sitemap mr-2"></i>
                                Departments
                                <i className="fas fa-chevron-down float-right pt-1"></i>
                        </a>
                        <a 
                            href="#list-department-admin" 
                            id="list-department-admin-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="department-admin" 
                            className="list-group-item list-group-item-action list-group-item-light departments-list d-none">
                                <i className="fas fa-copy mr-2 ml-4"></i>
                                Administrative
                        </a>
                        <a 
                            href="#list-department-development" 
                            id="list-department-development-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="department-development" 
                            className="list-group-item list-group-item-action list-group-item-light departments-list d-none">
                                <i className="fas fa-code mr-2 ml-4"></i>
                                Development
                        </a>
                        <a 
                            href="#list-department-finance" 
                            id="list-department-finance-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="department-finance" 
                            className="list-group-item list-group-item-action list-group-item-light departments-list d-none">
                                <i className="fas fa-file-invoice-dollar mr-2 ml-4"></i>
                                Finance
                        </a>
                        <a 
                            href="#list-department-hr" 
                            id="list-department-hr-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="department-hr" 
                            className="list-group-item list-group-item-action list-group-item-light departments-list d-none">
                                <i className="fas fa-portrait mr-2 ml-4"></i>
                                Human Resources
                        </a>
                        <a 
                            href="#list-department-itSupport" 
                            id="list-department-itSupport-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="department-itSupport" 
                            className="list-group-item list-group-item-action list-group-item-light departments-list d-none">
                                <i className="fas fa-question-circle mr-2 ml-4"></i>
                                IT Support
                        </a>
                        <a 
                            href="#list-department-qualityAssurance" 
                            id="list-department-qualityAssurance-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="department-qualityAssurance" 
                            className="list-group-item list-group-item-action list-group-item-light departments-list d-none">
                                <i className="fas fa-list-alt mr-2 ml-4"></i>
                                Quality Assurance
                        </a>
                        <a 
                            href="#list-payroll" 
                            id="list-payroll-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="payroll" 
                            className="list-group-item list-group-item-action list-group-item-light">
                                <i className="fas fa-money-bill mr-2"></i>
                                Payroll
                        </a>
                        <a 
                            href="#list-leave-management" 
                            id="list-leave-management-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="leave-management" 
                            className="list-group-item list-group-item-action list-group-item-light">
                                <i className="fas fa-bed mr-2"></i>
                                Leave Management
                        </a>
                        <a 
                            href="#list-performance" 
                            id="list-performance-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="performance" 
                            className="list-group-item list-group-item-action list-group-item-light">
                                <i className="fas fa-chart-line mr-2"></i>
                                Performance
                        </a>
                        <a 
                            href="#list-recruitment" 
                            id="list-recruitment-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="recruitment" 
                            className="list-group-item list-group-item-action list-group-item-light"
                            onClick={this.toggleVisibilityRecruitment} >
                                <i className="fas fa-user-graduate mr-2"></i>
                                Recruitment
                                <i className="fas fa-chevron-down float-right pt-1"></i>
                        </a>
                        <a 
                            href="#list-candidate-form" 
                            id="list-candidate-form-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="candidate-form" 
                            className="list-group-item list-group-item-action list-group-item-light recruitment-list d-none">
                                <i className="fas fa-plus-circle mr-2 ml-4"></i>
                                Add New Candidate
                        </a>
                        <a 
                            href="#list-candidate-edit" 
                            id="list-candidate-edit-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="candidate-edit" 
                            className="list-group-item list-group-item-action list-group-item-light recruitment-list d-none">
                                <i className="fas fa-user-edit mr-2 ml-4"></i>
                                Edit Candidate
                        </a>
                        <a 
                            href="#list-employee-form" 
                            id="list-employee-form-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="employee-form" 
                            className="list-group-item list-group-item-action list-group-item-light recruitment-list d-none">
                                <i className="fas fa-suitcase mr-2 ml-4"></i>
                                Add New Employee
                        </a>
                        <a 
                            href="#list-equipment" 
                            id="list-equipment-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="equipment" 
                            className="list-group-item list-group-item-action list-group-item-light">
                                <i className="fas fa-desktop mr-2"></i>
                                Equipment
                        </a>
                        <a 
                            href="#list-separation" 
                            id="list-separation-list" 
                            data-toggle="list" 
                            role="tab" 
                            aria-controls="separation" 
                            className="list-group-item list-group-item-action list-group-item-light">
                                <i className="fas fa-briefcase mr-2"></i>
                                Separation
                        </a>
                    </div>               
                </div>
            </>
        );
    }
}

export default Sidebar;