import React, { Component } from 'react';

class loginpage extends Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col text-center">
                    <form className="form-signin">
              
                        <img className="mb-4" src={logo} alt="" width="100" height="100"/>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
                        <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
              // candidate form //
        )
    
    }
}

export default loginpage;