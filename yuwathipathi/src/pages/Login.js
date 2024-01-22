import React, { useEffect } from 'react';
import './css/Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { userLogin } from '../features/auth/authAction'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { alertActions } from '../features/auth/alertSlice'
import Alert from '../helpers/alertBox'
import ErrorBoundary from '../helpers/errorBound'

const Login = () => {
  const { loading, userInfo, error,success } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (success === true) {
      navigate('/service')
    }
    if(error !== null){
      dispatch(
        alertActions.createAlert({
          message: error,
          type: "warning"
        })
      );  
    }
    
  }, [navigate, userInfo,success, error])
  const submitLogin = (data) => {
    dispatch(userLogin(data))
  }
  return (
    <div className='loginForm'>
      <div className='login'>
        <div className='col'>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Alert />
          </ErrorBoundary>
          <h2>Sign In</h2>
          <span>Provide Valid Details and Enjoy our service</span>
          <form id='form' onSubmit={handleSubmit(submitLogin)} className="flex flex-col">
            <FormControl sx={{ mb: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size='small'
                      defaultValue="Small"
                    >
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                {...register('email')} 
              />
            </FormControl>
            <FormControl sx={{ mb: 1}} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size='small'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                {...register('password')} 
              />
            </FormControl>
            <button type="submit" className='btn btn-primary' disabled={loading}>Sign In</button>
          </form>
        </div>
      </div>
    </div>

  )
}
export default Login;