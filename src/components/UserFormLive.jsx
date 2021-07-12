import React, { useState } from 'react';

// Functional Component w/ hook (useState)
const UserFormLive = (props) => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Event Handler for change
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
        }

    // Added validations to all form fields
    return (
        <form>
            <div>
                <label>First Name: </label>
                <input onChange={handleChange} type="text" name="firstName" />
                { (state.firstName.length !== 0 && state.firstName.length < 2) && <p>First Name must be at least 2 characters.</p> }
            </div>
            <div>
                <label>Last Name: </label>
                <input onChange={handleChange} type="text" name="lastName" />
                { (state.lastName.length !== 0 && state.lastName.length < 2) && <p>Last Name must be at least 2 characters.</p> }
            </div>
            <div>
                <label>Email: </label>
                <input onChange={handleChange} type="text" name="email" />
                { (state.email.length !== 0 && state.email.length < 5) && <p>Email must be at least 5 characters.</p> }
            </div>
            <div>
                <label>Password: </label>
                <input onChange={handleChange} type="password" name="password" />
                { (state.password.length !== 0 && state.password.length < 8) && <p>Password must be at least 8 characters.</p> }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input onChange={handleChange} type="password" name="confirmPassword" />
                { (state.confirmPassword !== state.password) && <p>Passwords must match.</p> }
            </div>
            {/* <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div> */}
        </form>
    );
};

export default UserFormLive;