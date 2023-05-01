import React, { useState } from 'react';

function RegisterForm() {
  const [name, setName] = useState('');

  function handleRegister(event) {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name })
    };

    fetch('/api/register-employer', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // Do something with the response data
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  return (
    <form onSubmit={handleRegister}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
