import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

const Header = (props) => {
  return (
    <header className="header headernav">
      <Nav />
        <div className="logo">Budget App!!!</div>
    </header>    
  );
};

export default Header;