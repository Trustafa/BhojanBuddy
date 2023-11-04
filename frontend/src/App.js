import logo from './logo.svg';
import './App.css';
import Basket from "./Routes/Basket";
import Home from "./Routes/Home";
import Recipes from './Routes/Recipes';
import Support from './Routes/Support';
import UserSettings from './Routes/UserSettings';
import MainMenu from "./MainMenu"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
    return (
    <div className="app">
        <Router>
            <MainMenu />
            <Routes>
            <Route exact path='/' element={<Home />} />
              <Route path='/settings' element={<UserSettings />} />
              <Route path='/contact' element={<Support />} />
              <Route path='/recipes' element={<Recipes />} />
              <Route path='/basket' element={<Basket />} />
            </Routes>
        </Router>
    </div>
  );

}





export default App;
