import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useGetUserDetailsQuery } from '../../app/services/auth/authService';
import { logout, setCredentials } from '../../features/auth/authSlice';
import './Navbar.css';

function Navbar() {

  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
    pollingInterval: 900000, // 15mins
  })
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    if(data){
      dispatch(setCredentials(data))
      alert('NavData' + JSON.stringify(data))
    }
  }, [data, dispatch]);

  window.addEventListener('resize', showButton);
  var AuthButton = '';
  console.log('fet', userInfo)
  if (userInfo === null) {
    AuthButton = (
      <nav className='navbar'>
        <div className='navbar-container'>
          <li className='nav-ite'>
            <Link to='/Login' className='nav-links' onClick={closeMobileMenu}>Login</Link>
          </li>
        </div>
        <ul />

        {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
     </nav>
    );
  }
  else {
    AuthButton = (
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {button && <Button buttonStyle='btn--outline' onClick={() => dispatch(logout())}>Logout</Button>}
      </ul>
    );
  }
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            YUWATHIPATHI
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/service-bride' className='nav-links' onClick={closeMobileMenu}>
                Brides
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/service-groom'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Grooms
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}  */}

        </div>
        {AuthButton}
      </nav>
    </>
  );
}

export default Navbar;