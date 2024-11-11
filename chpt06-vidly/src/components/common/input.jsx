import React from "react";

const Input = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input id={props.name} name={props.name} type={props.type} autoFocus={true}
                   value={props.value}
                // this means that this input field will no longer have its own state.
                // we are using props to set its value..so its value will always come
                // from state.account.username
                   onChange={props.onChange}
                   className="form-control"/>

            {   // means that if an error is present, then the div from below will be displayed
                props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
    );
}

export default Input;