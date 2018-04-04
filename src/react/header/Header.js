import React from 'react';

import './Header.scss';
import logo from '../../assets/img/logo-white.png'

const Header = () => (
  <header className='header'>
    <div className='logo-container'>
      <img src={logo} alt='logo' className='logo'/>
    </div>
    <div className='heading-container'>
      <h1 className='heading'>
        <span className='heading-main'>Nature Up</span>
        <span className='heading-sub'>rediscover your nature</span>
      </h1>
    </div>

  </header>
)

export default Header;
