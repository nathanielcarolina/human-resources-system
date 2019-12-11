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
                    <div className="col text-center">
                    <div className="py-5 ">
                        <h2>Separation !!!</h2>
                        <p className="lead">Below you have to enter the details of the Employee to be seperated .</p>
                    </div>     
                    </div>
                </div>

           </> 
        );
    }
}
export default Separation;