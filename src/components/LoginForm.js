import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'

function LoginForm({ setUser }) {

  const [loginName, setLoginName] = useState("");

  function handleLoginSubmit(e) {
    e.preventDefault();
    console.log('success');

    // post request //login
    // response -> save user to state
    fetch('http://[::1]:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: loginName}),
    })
      .then(response => response.json())
      .then(user => setUser(user))
  }

  return (
    <div className="login-form">
      <form onSubmit={handleLoginSubmit}>
        <input type="text" name="name" placeholder="Name" value={loginName} onChange={e => setLoginName(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;