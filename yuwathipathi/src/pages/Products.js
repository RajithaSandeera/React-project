import React, { useEffect } from 'react'
import { logout, setCredentials, setUserToken } from '../features/auth/authSlice'
import { userProfile } from '../features/auth/authAction'
import { useGetUserDetailsQuery } from '../app/services/auth/authService'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import style from './Products.module.css'

const Products = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const { loggedUserInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { data, isFetching, refetch } = useGetUserDetailsQuery('loggedUserDetails', {
    pollingInterval: 900000,
  });
console.log('loggedUserInfo', loggedUserInfo)
  const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

  useEffect(() => {
    if (data) {  
      dispatch(setCredentials(data))
    }else{
      
    }
    refetch()
    dispatch(userProfile())
    dispatch(setUserToken(userToken))

  }, [data, dispatch, userToken])
  const loggedInUserName = data !== undefined ? data.user.name : '';

  return (
    <header>
      <div className={style.headerStatus}>
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