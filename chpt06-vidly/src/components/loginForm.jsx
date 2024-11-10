import React, { Component } from "react";
import Input from "./common/input.jsx";

// Dan: refs are not recommended as the first solution....use them only in exceptional cases
// const username = React.createRef();

class LoginForm extends Component {
    state = {
        account: {username: '', password: ''},
        errors : {}                                     // this object will store the errors concerning the input fields
    }                                                   // to access an error message we will use something like errors.username

    validate = () =>{
        const errors = {}
        const {account} = this.state;

        if (account.username.trim() === ''){
            errors.username = "username is required ";  // we return an object errors that will contain errors object
        }

        if (account.password.trim() === ''){
            errors.password = "password is required ";  // we return an object errors that will contain errors object
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = event => {
        event.preventDefault();

        const errors = this.validate();
        console.log(errors);

        this.setState({errors : errors || {} });    // set the state errors to the validate errors object, and if that one is null, to an empty object
        if (errors) return;

        // if this line is reached, this is where we will call the server
        console.log("Submitted");
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
                    <Input name="username"
                           value={this.state.account.username}
                        // this value means that this input field will no longer have its own state.
                        // we are using props to set its value..so its value will always come
                        // from state.account.username

                           label="Username"
                           onChange={this.handleChange}
                           error={this.state.errors.username} />

                    <Input name="password"
                           value={this.state.account.password}
                           label="Password"
                           onChange={this.handleChange}
                           error={this.state.errors.password} />

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    };

}
export default LoginForm;