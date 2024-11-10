import React, { Component } from "react";

// Dan: refs are not recommended as the first solution....use them only in exceptional cases
// const username = React.createRef();

class LoginForm extends Component {
    state = {
        account: {username: '', password: ''}
    }

    handleSubmit = event => {
        event.preventDefault();
        // const user = username.current.value;
        // console.log("Submitted " + user);
    }

    handleChange = event => {
        const account = {...this.state.account}
        account[event.currentTarget.name] = event.currentTarget.value;  // event.currentTarget.name WILL be the value of the name field..
        this.setState({account});
    }

    render() {

        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input autoFocus={true}
                               value={this.state.account.username}  // this means that this input field will no longer have its own state.
                                                                    // we are using props to set its value..so its value will always come
                                                                    // from state.account.username
                               onChange={this.handleChange}
                               name="username"
                               type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"
                               value={this.state.account.password}
                               onChange={this.handleChange}
                               name="password"
                               className="form-control" id="exampleInputPassword1"
                               placeholder="Password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    };

}
export default LoginForm;