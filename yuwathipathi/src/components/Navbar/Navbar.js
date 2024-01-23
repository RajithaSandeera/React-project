import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Style } from '@mui/icons-material';
import style from './Navbar.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useGetUserDetailsQuery } from '../../app/services/auth/authService';
import { logout, setCredentials } from '../../features/auth/authSlice';

const drawerWidth = 220;
const Navbar = (props) => {
  
  // const { userToken } = useSelector((state) => state.auth);
  const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null
  const dispatch = useDispatch();
  const { data, isFetching } = useGetUserDetailsQuery('loggedUserDetails', {
    pollingInterval: 900000, // 15mins
  })
  useEffect(() => {
    if (data) {
      dispatch(setCredentials(data))
    }
    
  }, [data]);
 
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <NavLink to="/" style={{ color: 'black', textDecoration: 'none' }}>
        <Typography variant="h6" sx={{ my: 2, textDecoration: 'none' }}>
          YUWATHIPATHI
        </Typography>
      </NavLink >
      <Divider />
      <List>
        {[
          { text: 'Grooms', link: '/service-groom' },
          { text: 'Bride', link: '/service-bride' },
          { text: 'About Us', link: '/products' },
          { text: userToken !== null ? '' : 'Login', link: '/Login' },
          {
            text: userToken === null ? 'SignUp' : 'Logout',
            link: !userToken === null && ('/SignUp'),
            onClick: userToken ? () => {
              handleLogout()
            } : null,
          },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
                <NavLink style={{ color: 'black', textDecoration: 'none' }} to={item.link}>
                  {item.text}
                </NavLink>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>


    </Box >
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const darkTheme = createTheme({
    palette: {
      custom: {
        main: '#1C1B1B',
      },
    },
  });
  console.log('values', userToken)

  const conditionalClassName = userToken === null ? style.navItemDesignSignUp : style.anotherClassName;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <AppBar color="custom" component="nav" sx={{ p: 2 }}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon style={{ color: 'white' }} />
            </IconButton>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit', width: '60%' }}>
              <Typography
                variant="h6"
                component="div"
                className={style.homeButton}
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'block' },
                  color: 'white',
                  fontSize: '1.8rem',
                }}
              >
                YUWATHIPATHI
              </Typography>
            </NavLink>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            <NavLink className={style.navItemDesign} to='/service-groom'>
                <span className={style.navItemText}>Grooms</span>
              </NavLink>
              <NavLink className={style.navItemDesign} to='/service-bride'>Brides</NavLink>
              <NavLink className={style.navItemDesign} to='/products'>About Us</NavLink>
              {!userToken && <NavLink className={style.navItemDesign} to='/Login'>Login</NavLink>}
              {userToken === null ? (
                <NavLink className={style.navItemDesignSignUp} to='/SignUp'>SignUp</NavLink>
              ) : (
              <NavLink className={conditionalClassName} to='/Login' onClick={() => handleLogout()}>Logout</NavLink>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <Toolbar id="back-to-top-anchor" />
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;