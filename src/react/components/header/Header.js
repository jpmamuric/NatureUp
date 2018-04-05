import React from 'react';

import './Header.scss';
import logo from '../../../assets/img/logo-white.png'

const Header = () => (
  <header className='header' id='header'>
    <div className='header__logo-container'>
      <img src={logo} alt='logo' className='header__logo'/>
    </div>
    <div className='header__heading-container'>
      <h1 className='heading'>
        <span className='heading-main'>Nature Up</span>
        <span className='heading-sub'>rediscover your nature</span>
      </h1>
      <a href='#about' className='btn btn--white'>Discover</a>
    </div>

  </header>
)

export default Header;
