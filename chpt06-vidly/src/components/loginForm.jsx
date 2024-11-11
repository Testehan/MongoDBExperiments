import React  from "react";
import Joi from 'joi-browser';
import Form from "./common/form.jsx";


// Dan: refs are not recommended as the first solution....use them only in exceptional cases
// const username = React.createRef();

class LoginForm extends Form {
    state = {
        data: {username: '', password: ''},
        errors : {}                                     // this object will store the errors concerning the input fields
    }                                                   // to access an error message we will use something like errors.username

    // joi is an external library used for validations
    schema = {
        username : Joi.string().required().label("Username"),
        password : Joi.string().required().label("Password")

    }

    old_validate = () =>{
        const errors = {}
        const {data} = this.state;

        if (data.username.trim() === ''){
            errors.username = "username is required ";  // we return an object errors that will contain errors object
        }

        if (data.password.trim() === ''){
            errors.password = "password is required ";  // we return an object errors that will contain errors object
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }


    doSubmit = () => {
        // if this line is reached, this is where we will call the server
        console.log("Submitted");
    }


    render() {

        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username','Username')}
                    {this.renderInput('password','Password', 'password')}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    };

}
export default LoginForm;