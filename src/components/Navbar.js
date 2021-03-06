import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            An Oasis Project
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <div className ='right-side'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/pastTrips'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Past Trips
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/trips'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Current Trips
              </Link>
            </li>


            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            
          </ul>
          
          {button && <Button buttonStyle='btn--outline'>Login</Button>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
