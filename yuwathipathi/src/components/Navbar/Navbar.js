import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link , useHistory } from 'react-router-dom';

import './Navbar.css';
import axios from 'axios';
import swal from 'sweetalert';


function Navbar() {

  const history = useHistory();
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


  const logoutButton = (e) =>{
    e.preventDefault();

    axios.post(`/api/logout`).then(res =>{
      if(res.data.status == 200)
      {

        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        swal("Success",res.data.message,"success");
        history.push('/'); 
      }
    
    });
  }

  var AuthButton = '';
  if(!localStorage.getItem('auth_token'))
  {
    AuthButton = (
      <nav className='navbar'>
    <div className='navbar-containe'>
        <li className='nav-ite'>
        <Link to='/Login' className='nav-links' onClick={closeMobileMenu}>Login</Link> 
      </li>
      </div>
      <ul/>
      
      {button && <Button buttonStyle='btn--outline'>SignUp</Button>}
      
    
      </nav>
    ); 
  }
  else
  {
    AuthButton = (
      
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      {button && <Button  onClick={logoutButton} buttonStyle='btn--outline'>Logout</Button>}
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