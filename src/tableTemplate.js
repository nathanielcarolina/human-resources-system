import React, { Component } from 'react';
const $ = window.$;

class TableTemplate extends Component {

    // componentDidUpdate() {
    //     $.bootstrapSortable({ applyLast: true });
    // }
        
    render() {        
        let tableHeaders = this.props.tableHeaders.map((tableHeader) =>
            <th scope="col" className='' data-defaultsign='nospan'>{tableHeader}</th>
        );

        return (
            <>
                <div className="row mb-2">
                    <div className="col-6 text-muted"><span>Showing {this.props.employees.length} of {this.props.employees.length}</span></div>
                    {/* <div className="col-6 text-right">
                        <select className="mr-4 text-muted" id="numberRecords">
                            <option value="5">5 per page</option>
                            <option value="10">10 per page</option>
                            <option value="25">25 per page</option>
                            <option value="50">50 per page</option>
                        </select>
                        <select className="mr-2 text-muted" id="currentPage">
                            <option value="1">Page 1</option>
                            <option value="2">Page 2</option>
                        </select>
                        <label className="mr-2 text-muted" htmlFor="currentPage">of 2</label>
                        <div className="btn-group btn-group-sm rounded-lg" role="group" aria-label="Next and previous page">
                            <button type="button" className="btn btn-light py-0"><i className="fas fa-chevron-left text-muted"></i></button>
                            <button type="button" className="btn btn-light border-left py-0"><i className="fas fa-chevron-right text-muted"></i></button>
                        </div>
                    </div> */}
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            {tableHeaders}
                            <th scope="col" data-defaultsort='disabled'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.renderEmployee}
                    </tbody>
                </table>
            </>
        );
    }
}

export default TableTemplate;