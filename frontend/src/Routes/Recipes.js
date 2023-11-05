import React, { useState } from 'react';
import './Recipes.css'
import {AiOutlineClockCircle} from 'react-icons/ai';
import {AiOutlineFire} from 'react-icons/ai';
import {PiPersonArmsSpreadDuotone} from 'react-icons/pi';

const Recipes = () => {
    return (
      <div>
        <RecipePic/ >
        <TitleInfo/ >
        <Description/ >
        <Tabs/ >
      </div>
    );
};

const RecipePic = () => {
  return (
    <div className="GroupHeader">
        <img id='foodimg' src={require ("./RecipesImgs/FoodBowl.jpg")} alt="Tab Group Image" />
    </div>
  )
}

const TitleInfo = () => {
  return (
    <div className="titleinfo">
        <h1>Tab Group Title</h1>
        <ul id='icons' >
          <li>
            <AiOutlineClockCircle className="iconsimg"/>
            <p>35 min</p>
          </li>
          <li>
            <AiOutlineFire className="iconsimg"/>
            <p>117 kcal</p>
          </li>
          <li>
            <PiPersonArmsSpreadDuotone className="iconsimg"/>
            <p>Serves 1</p>
          </li>
        </ul>
    </div>
  )
}

const Description = () => {
  return (
    <div className="description">
      <h4>Description</h4>
      <p>Super creamy dairy-free pumpkin soup, 
        with a little help from coconut milk or cream. 
        It would be a welcome addition to your holiday table.</p>
    </div>
  )
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTab1 = () => {
    setActiveTab('tab1');
  };

  const handleTab2 = () => {
    setActiveTab('tab2');
  };

  const handleTab3 = () => {
    setActiveTab('tab3');
  };

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={handleTab1}
        >
          Ingredients
        </li>
        <li
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={handleTab2}
        >
          Instructions
        </li>
        <li
          className={activeTab === 'tab3' ? 'active' : ''}
          onClick={handleTab3}
        >
          Nutrition
        </li>
      </ul>
      <div className="outlet">
        {activeTab === 'tab1' ? <FirstTab /> : null}
        {activeTab === 'tab2' ? <SecondTab /> : null}
        {activeTab === 'tab3' ? <ThirdTab /> : null}
      </div>
    </div>
  );
};

const FirstTab = () => {
  return (
    <div className="FirstTab">
      <p>First Tab!! Hurray!!</p>
      {/* First tab content will go here */}
    </div>
  );
};

const SecondTab = () => {
  return (
    <div className="SecondTab">
      <p>Second Tab!! Hurray!!</p>
      {/* Second tab content will go here */}
    </div>
  );
};

const ThirdTab = () => {
  return (
    <div className="ThirdTab">
      <p>Third Tab!! Hurray!!</p>
      {/* Third tab content will go here */}
    </div>
  );
};

export default Recipes; 