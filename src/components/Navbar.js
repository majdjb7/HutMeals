import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IoHome } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { MdRestaurant } from 'react-icons/md'

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
            <i class='fas fa-igloo' />
            &nbsp; HutMeals
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <IoHome> </IoHome> &nbsp; Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/business'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <MdRestaurant></MdRestaurant> &nbsp; Add Your Business
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up or Login &nbsp; <FaUser></FaUser>
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'> SIGN UP or LOGIN <FaUser></FaUser></Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
