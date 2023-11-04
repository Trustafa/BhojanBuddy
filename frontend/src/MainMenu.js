import React from 'react';

import { FaHome, FaUser, FaCartPlus } from 'react-icons/fa';

export const MainMenu = () => {
  return (
    <div className="mainMenu">
      <MenuItem Icons={<FaHome />} link="/" />
      <MenuItem Icons={<FaUser />} link="/settings" />
      <MenuItem Icons={<FaCartPlus />} link="/contact" />
      <MenuItem Icons={<FaHome />} link="/basket" />
      <MenuItem Icons={<FaHome />} link="/recipes" />
    </div>
  );
};

const MenuItem = (props) => {
  const { Icons, link } = props;
  return (
    <div className="menuItem">
      <a href={link} className="menuItemLink">
        {Icons}
      </a>
    </div>
  );
};

export default MainMenu;
