import React, { useEffect } from 'react'
import { logout, setCredentials, setUserToken } from '../features/auth/authSlice'
import { useGetUserDetailsQuery } from '../app/services/auth/authService'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Products = () => {
  const { userInfo } = useSelector((state) => state.authApi)
  const dispatch = useDispatch()

  const { data, isFetching, refetch } = useGetUserDetailsQuery('userDetails', {
    pollingInterval: 900000,
  });

  const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

  useEffect(() => {
    if (data) {  
      dispatch(setCredentials(data))
    }
    refetch()
    dispatch(setUserToken(userToken))

  }, [data, dispatch, userToken])
  const loggedInUserName = data !== undefined ? data.user.name : '';

  return (
    <header>
      <div className='header-status'>
        <span>
          {isFetching
            ? `Fetching your profile...`
            : userInfo !== null
              ? `Logged in as ${loggedInUserName}`
              : "You're not logged in"}
        </span>
        <div className='cta'>
          {userInfo ? (
            <button className='button' onClick={() => dispatch(logout())}>
              Logout
            </button>
          ) : (
            <NavLink className='button' to='/login'>
              Login
            </NavLink>
          )}
        </div>
      </div>
      <nav className='container navigation'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/user-profile'>Profile</NavLink>
      </nav>
    </header>
  )
}
export default Products