import React from 'react';
import { useState } from "react";
import { FcNext, FcPrevious } from 'react-icons/fc';
const FoodOptions = ["Lunch", "Dinner", "Breakfast", "Snacks", "Dessert", "Brunch", "Drinks", "All"];
const optionsPerPage = 2;

const Home = () => {
    return (
        <div className="Home">
            <TopUserBar />
            <Search />

            <OptionDisplay />
        </div>
    );
};




const Search =  () => {
    return (
        <div className="search">
            <h2>What do you want to cook today?</h2>
           <input type="text" className="searchBox" placeholder="Search" />
        </div>
    );
}



const TopUserBar = () => {
    return (
        <div className="topUserBar">
            <div className='userText'>
                <h3>Welcome back</h3>
                <h2>John Doe</h2>
            </div>
            <div className='userImage'>
                 <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="user" />
            </div>
        </div>
    )
};    




function displayOptions(options, optionsPerPage, currentPage) {
  const startIndex = (currentPage - 1) * optionsPerPage;
  const endIndex = startIndex + optionsPerPage;
  const visibleOptions = options.slice(startIndex, endIndex);
  return visibleOptions;
}

const OptionDisplay = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const visibleOptions = displayOptions(FoodOptions, optionsPerPage, currentPage);

  return (
    <div className='optionsContainer'>
        <div className='optionNav'>
        <button  onClick={handlePrevious} disabled={currentPage === 1}>
          <FcPrevious />
        </button>
        </div>
      <div className='optionsHolder'>
        {visibleOptions.map((option, index) => (
          <div className = "optionsDiv" key={index}>{option}</div>
        ))}
      </div>
      <div className='optionNav'>
        <button  onClick={handleNext} disabled={currentPage * optionsPerPage >= FoodOptions.length}>
           <FcNext />
        </button>
      </div>
    </div>
  );
};

export default Home;
