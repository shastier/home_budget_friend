import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

const Header = (props) => {
  return (
    <header className="header headernav">
      <Nav auth={props.auth}/>
        <div className="logo">Budget App!!!</div>
    </header>    
  );
};

export default Header;