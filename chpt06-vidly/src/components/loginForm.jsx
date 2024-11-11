import React, { Component } from "react";
import Joi from 'joi-browser';

import Input from "./common/input.jsx";


// Dan: refs are not recommended as the first solution....use them only in exceptional cases
// const username = React.createRef();

class LoginForm extends Component {
    state = {
        account: {username: '', password: ''},
        errors : {}                                     // this object will store the errors concerning the input fields
    }                                                   // to access an error message we will use something like errors.username

    // joi is an external library used for validations
    schema = {
        username : Joi.string().required().label("Username"),
        password : Joi.string().required().label("Password")

    }

    validate_v2 = () =>{
        const validationOptions = {abortEarly : false};
        const validationResult = Joi.validate(this.state.account, this.schema, validationOptions);
        console.log(validationResult);

        if (!validationResult.error) return null;       // no errors

        const errors = {};  // below we extract information from the joi validation and map it into our errors object that we will use to update the ui with the error messages
        for (let item of validationResult.error.details){
            errors[item.path[0]] = item.message;
        }

        return errors;
    }

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

        const errors = this.validate_v2();
        console.log(errors);

        this.setState({errors : errors || {} });    // set the state errors to the validate errors object, and if that one is null, to an empty object
        if (errors) return;

        // if this line is reached, this is where we will call the server
        console.log("Submitted");
    }

    validateProperty = ({name, value}) => {
        const obj = {[name] : value}        // we use this approach because we want to have an object that looks like
                                                // {username : "abc"} and by using [name] we set the field name dynamically

        const schema = {[name] : this.schema[name]}     // here we extract the schema for the current property that is about to be
                                                            // validated from the big schema. we need to do this because otherwise we will
                                                            // get validation errors for all fields, not only for the one that is
                                                            // currently under test
        const validationOptions = {abortEarly : true};
        const {error} = Joi.validate(obj, schema, validationOptions);
        if (error){
            console.log(error);
            console.log(error.details[0].message);
            return error.details[0].message;
        } else {
            return null;
        }
    }

    handleChange = event => {

        console.log("Something changed");
        const account = {...this.state.account}
        const errors = {...this.state.errors}

        const errorMessage = this.validateProperty(event.currentTarget);
        if (errorMessage) {
            errors[event.currentTarget.name] = errorMessage;
        } else {
            delete errors[event.currentTarget.name];
        }


        account[event.currentTarget.name] = event.currentTarget.value;  // event.currentTarget.name WILL be the value of the name field..
        this.setState({account, errors});
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