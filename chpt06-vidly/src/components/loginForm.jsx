import React, { Component } from "react";
import Input from "./common/input.jsx";

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
                    <Input name="username"
                           value={this.state.account.username}
                        // this value means that this input field will no longer have its own state.
                        // we are using props to set its value..so its value will always come
                        // from state.account.username

                           label="Username"
                           onChange={this.handleChange}/>

                    <Input name="password"
                           value={this.state.account.password}
                           label="Password"
                           onChange={this.handleChange}/>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    };

}
export default LoginForm;