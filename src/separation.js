import React, { Component } from 'react';

class Separation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emps: null,
            dor: null,
            lwd: null,
            fnf: null,
            rol: null,
            eqpreturn: null
        };
    }

    getSeparation = _ => {
        fetch('http://localhost:4000/separation')
        .then(response => response.json())
        .then(response => this.setState({ seperation: response.data }))
        .catch(err => console.error(err));
 
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
        handleSubmitSeparation = (event) => {
            let body = JSON.stringify({
              emps: this.state.emps,
              dor: this.state.dor,
              lwd: this.state.lwd,
              fnf: this.state.fnf,
              rol: this.state.rol,
              eqpreturn: this.state.eqpreturn

            });
            console.log(body);
        fetch('http://localhost:4000/separation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body
        })
        }
    render(){

        return (
            <>
                <div className="row justify-content-md-center">
                <form className="needs-validation form-group mb-5" noValidate>
                    <div className="col text-center">
                        <div className="py-5 ">
                            <h2>Separation</h2>
                            <p className="lead">Below you have to enter the details of the Employee to be seperated .</p>
                        </div>  
                                <div className="row">
                                    <div className="col-6 text-left">
                                        <label htmlFor="emps">Emoloyee ID</label>
                                        <input type="text" className="form-control" id="emps" name="emps"  required="" onChange={this.handleChange} />
                                        <div className="invalid-feedback">
                            Valid first name is required.
                            </div>
                                    </div>
                                </div>
                
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <div className="py-3 ">
                                    <label  htmlFor="start_date">Date of Resignation</label>
                                    <input  type="date" className="form-control mr-3" id="dor" name="dor" onChange={this.handleChange} />
                                    <div className="invalid-feedback">
                                        Valid Date name is required.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 text-left">
                                <div className="py-3 ">
                                    <label htmlFor="end_date">Last Working Date</label>
                                    <input  type="date" className="form-control" id="lwd" name="lwd" onChange={this.handleChange} />
                                    <div className="invalid-feedback">
                                        Valid Date is required.
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <div className="py-3 ">
                                    <label htmlFor="Full and Final Amount">Full and Final Amount</label>
                                    <input type="text" className="form-control" id="fnf" name="fnf"  placeholder=""  required="" onChange={this.handleChange}/>
                                    <div className="invalid-feedback">
                                        Valid Amount is required.
                                    </div>
                                </div>
                            </div>              
                        </div>       
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <div className="py-3 ">
                                    <input type="checkbox" className="form-check-input" id="eqpreturn" value="0" name="eqpreturn"  onChange={this.handleChange} />
                                    <label className="form-check-label" htmlFor="eqpreturn">Equipment Returned</label>
                                    <div className="invalid-feedback">
                                        Equipment Return is required.
                                    </div>
                                </div>
                            </div>  
                        </div>     
                        <div className="form-group text-left py=3 ">
                            <label for="exampleFormControlTextarea1">Reason for Leaving</label>
                            <textarea className="form-control" id="rol " rows="3" onChange={this.handleChange} name="rol"  ></textarea>
                        </div>
                    </div>
                    <input className="btn btn-primary btn-lg btn-block btn-danger" onClick={this.handleSubmitSeparation} type="button" value="SEPARATE" />
                </form>
                </div>
           </> 
        );
    }
}

export default Separation;