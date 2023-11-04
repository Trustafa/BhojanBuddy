import React from 'react';

import {FaHome, FaUser, FaCartPlus} from 'react-icons/fa';

export const MainMenu = () => { 
    return (
        <div className="MainMenu">
            <a href="/" className="menuItem" > <FaHome /> </a>
            <a href="/settings" className="menuItem" > <FaUser /> </a>
            <a href="/contact" className="menuItem" > <FaCartPlus /> </a>
            <a href="/basket" className="menuItem" > <FaHome /> </a>
            <a href="/receipes" className="menuItem" > <FaHome /> </a>
        </div>
    );
};


export default MainMenu;