import React, { useState } from 'react';
import MainMenu from './MainMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login} from './Routes/Auth'; // Import your Login component
import {Signup} from './Routes/Auth'; // Import your Signup component
import Home from './Routes/Home';
import UserSettings from './Routes/UserSettings';
import Support from './Routes/Support';
import Recipes from './Routes/Recipes';
import Basket from './Routes/Basket';
import './App.css';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleLogout = () => {
    // Simulate a user logout
    setUserLoggedIn(false);
  
  };
  return (
    <div className="tab-container">
      {userLoggedIn && 
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
          <Router>
            <MainMenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<UserSettings />} />
              <Route path="/contact" element={<Support />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/basket" element={<Basket />} />
            </Routes>
          </Router>
        </div>

        }
<ShowForm userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      
    </div>
  );
}


const ShowForm = (props) => {
  console.log("Called in ShowForm");
  const { userLoggedIn, setUserLoggedIn } = props;
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

const [isLoginForm, setIsLoginForm] = useState(true);

const handleLogin = () => {
  console.log('User logged in successfully');
  // Simulate a successful login (replace with your actual authentication logic)
  setUserLoggedIn(true);
};

if (userLoggedIn) return (<></>)
return (
    <div className='formContainer'>
      <button className={`tab-button ${isLoginForm ? 'active' : ''}`} onClick={toggleForm}>
        Login
      </button>
      <button className={`tab-button ${!isLoginForm ? 'active' : ''}`} onClick={toggleForm}>
        Signup
      </button>
      <div className={`tab-content ${isLoginForm ? 'visible' : 'hidden'}`}>
        <Login onLogin={handleLogin} /> {/* Pass the handleLogin function */}
      </div>
      <div className={`tab-content ${!isLoginForm ? 'visible' : 'hidden'}`}>
        <Signup />
      </div>
  </div>
)
};
export default App;
