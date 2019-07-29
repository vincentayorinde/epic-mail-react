import React from 'react';
import './header.scss';

const Header = () => (
  <header data-test="headerComponent">
    <div className="wrapper">
      <div className="logo">
        <h5 data-test="logoText">Epic MAIL</h5>
      </div>
    </div>
  </header>
);

export default Header;
