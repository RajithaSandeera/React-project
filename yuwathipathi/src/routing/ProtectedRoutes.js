import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import Login from '../pages/Login'
import style from './ProtectedRoutes.module.css'
import Unauthorize from '../assets/Unauthorize.jpg'


const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') :  null
  const loggedUser = useSelector((state) => state.authApi.queries)
// const [authorization, setAuthorization] = useState(false);
  // useEffect(() =>{
  //   if(userInfo !== null && userInfo.status !== 'fail'){
  //     setAuthorization(true)
  //   }
  // },[userInfo !== null && userInfo.status])
  console.log('loggedUser', loggedUser)
  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
      <div className={style.unauthorized} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e9ff', borderRadius: '0.4rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Unauthorized</h1>
          <p>
            <NavLink to='/login'>Login</NavLink> to gain access
          </p>
          <img src={Unauthorize} alt="Unauthorized" width="500" height="" style={{ paddingTop:'2rem'}}/>
        </div>
      </div>
    )
  }

  // returns child route elements
  return <Outlet />
}
export default ProtectedRoute