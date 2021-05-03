import React, { useState } from 'react'
import Profile from './Profile';

function SignUpForm({setUser}) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [lifestyle, setLifestyle] = useState("");

    const newUser = {
        name: name,
        age: age,
        lifestyle: lifestyle
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch('http://[::1]:3001/users', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
    }

    return (
        <div className="signup-form">
            <h2>New User</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" name="age" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
                <input type="text" name="lifestyle" placeholder="Lifestyle" value={lifestyle} onChange={e => setLifestyle(e.target.value)} />
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default SignUpForm;