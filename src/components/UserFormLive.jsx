import React, { useState } from 'react';

const UserFormLive = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </form>
    );
};

export default UserFormLive;