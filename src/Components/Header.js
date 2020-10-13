import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li id="logo"><Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>BookADoctor</Link></li>
            <li className='log-reg'><Link style={{textDecoration: 'none'}} to='/login'>Login/Register</Link></li>
          </ul>
        </nav>
      </header>
    </>
  ) 
}

export default Header;