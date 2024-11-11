import React  from "react";
import Joi from 'joi-browser';
import Form from "./common/form.jsx";
import LoginForm from "./loginForm.jsx";

class RegisterForm extends Form {
    state = {
        data: {username: '', password: '', name:''},
        errors : {}                                     // this object will store the errors concerning the input fields
    }                                                   // to access an error message we will use something like errors.username

    // joi is an external library used for validations
    schema = {
        username : Joi.string().required().email().label("Username"),
        password : Joi.string().required().min(6).label("Password"),
        name : Joi.string().required().label("Name")

    }

    doSubmit = () => {
        // if this line is reached, this is where we will call the server
        console.log("Submitted");
    }


    render() {

        return (
            <div>
                <h1>Registration Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username','Username')}
                    {this.renderInput('password','Password', 'password')}
                    {this.renderInput('name','Name')}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    };

}

export default RegisterForm;