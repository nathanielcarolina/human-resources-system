import React, { Component } from 'react';

class Separation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            separation: []
        };
    }

   

    getSeparation = _ => {
        fetch('http://localhost:4000/separation')
 
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
                                
                                    <label htmlFor="Emp_ID">Emoloyee ID</label>
                                    <input type="text" className="form-control" id="Emp_ID" placeholder="" value="" required=""/>
                                    <div className="invalid-feedback">
                                    Valid first name is required.
                                    </div>
                                
                                </div>
                                </div>
               
                    <div className="row">
                        <div className="col-md-6 text-left">
                        <div className="py-3 ">
                            <label  htmlFor="start_date">Date of Resignation</label>
                            <input type="date" className="form-control mr-3" id="Date_of_Resignation" />
                            <div className="invalid-feedback">
                                Valid Date name is required.
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-left">
                        <div className="py-3 ">
                            <label htmlFor="end_date">Last Working Date</label>
                            <input type="date" className="form-control" id="Last_Working_Date" />
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
                            <input type="text" className="form-control" id="fnf" placeholder="" value="" required=""/>
                            <div className="invalid-feedback">
                                Valid Amount is required.
                            </div>
                            </div>
                        </div>              
                    </div>       
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <div className="py-3 ">
                                    <input type="checkbox" class="form-check-input" id="eqp_ret"/>
                                    <label class="form-check-label" for="eqp_ret">Equipment Returned</label>
                                    <div className="invalid-feedback">
                                            Return is required.
                                    </div>
                                </div>
                            </div>  
                            
                        </div>     
                        <div class="form-group text-left py=3 ">
                        <label for="exampleFormControlTextarea1">Reason for Leaving </label>
                        <textarea class="form-control" id="Leaving Reason" rows="3"></textarea>
                    </div>
                        
                </div>
                

                <button className="btn btn-primary btn-lg btn-block btn-danger" type="submit">SEPARATE</button>
                
                </form>
                </div>
           </> 
        );
    }
}
export default Separation;