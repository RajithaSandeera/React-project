import React, { useEffect } from 'react';
import './css/Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { userLogin } from '../features/auth/authAction'

const Login = () => {
  const { loading, userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    if (userInfo) {
      navigate('/service')
    }
  }, [navigate, userInfo])
  const submitLogin = (data) => {
    dispatch(userLogin(data))
  }
  return (
    <div className='loginForm'>
      <div className='login'>
        <div className='col'>
          <h2>Sign In</h2>
          <span>Provide Valid Details and Enjoy our service</span>

          <form id='form' onSubmit={handleSubmit(submitLogin)} className="flex flex-col">
            <input type="email" name='email' {...register('email')} placeholder='Email' required />
            <input type="password" name="password"  {...register('password')} placeholder='Password' required />
            <button type="submit" className='btn btn-primary' disabled={loading}>Sign In</button>
          </form>
        </div>
      </div>
    </div>

  )
}
export default Login;