import React, {Component} from "react";
import Joi from "joi-browser";
import Input from "./input.jsx";
import Select from "./select.jsx";

class Form extends Component {
    state = {
        data : {},
        errors : {}
    }

    validate = () =>{
        const validationOptions = {abortEarly : false};
        const validationResult = Joi.validate(this.state.data, this.schema, validationOptions);
        console.log(validationResult);

        if (!validationResult.error) return null;       // no errors

        const errors = {};  // below we extract information from the joi validation and map it into our errors object that we will use to update the ui with the error messages
        for (let item of validationResult.error.details){
            errors[item.path[0]] = item.message;
        }

        return errors;
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

    handleSubmit = event => {
        event.preventDefault();

        const errors = this.validate();
        console.log(errors);

        this.setState({errors : errors || {} });    // set the state errors to the validate errors object, and if that one is null, to an empty object
        if (errors) return;

        this.doSubmit();
    }

    handleChange = event => {

        console.log("Something changed");
        const data = {...this.state.data}
        const errors = {...this.state.errors}

        const errorMessage = this.validateProperty(event.currentTarget);
        if (errorMessage) {
            errors[event.currentTarget.name] = errorMessage;
        } else {
            delete errors[event.currentTarget.name];
        }


        data[event.currentTarget.name] = event.currentTarget.value;  // event.currentTarget.name WILL be the value of the name field..
        this.setState({data, errors});
    }

    renderButton(label){
        return (
            <button disabled={this.validate()} type="submit" className="btn btn-primary">{label}</button>
        );
    }

    renderInput(name, label, type = 'text' ) {      // default for input is type text..
        const {data, errors } = this.state;

        return (
            <Input name={name}
                type={type}
                value={data[name]}
                // this value means that this input field will no longer have its own state.
                // we are using props to set its value..so its value will always come
                // from state.account.username
               label={label}
               onChange={this.handleChange}
               error={errors[name]} />
        );
    }

    renderSelect(name, label, options) {
        const { data, errors } = this.state;

        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }


}


export default Form;