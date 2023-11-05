import React, { useState } from 'react';

const Signup = () => {
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation (you should add more thorough validation)
    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Make an API request to your signup endpoint with signupData
      const response = await fetch('https://api.bishalbhandari.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (response.status === 201) {
        // Successful signup
        console.log('User registered successfully');
      } else {
        const responseData = await response.json();
        setError(responseData.message || 'Error creating user');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Signup failed. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignupSubmit} className='form'>
        <input
          type="text"
          placeholder="Name"
          value={signupData.name}
          onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={signupData.email}
          onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={signupData.password}
          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={signupData.confirmPassword}
          onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
        />
        <button type="submit">Signup</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};



const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API request to your login endpoint with loginData
      const response = await fetch('https://api.bishalbhandari.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.status === 200) {
        // Successful login
        const data = await response.json();
        onLogin(); // Call the onLogin function to set the user as logged in
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit} className='form'>
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export { Login, Signup };


