import React, { useEffect } from 'react';
import './css/SignUp.css';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import bgImg from '../assets/img1.jpg';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// import Error from '../components/Error'
// import Spinner from '../components/Spinner'
import { registerUser } from '../features/auth/authAction'

const RegisterScreen = () => {
    const { loading, userInfo, error, success } = useSelector(
        (state) => state.auth
    )
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()
    const [showPassword, setShowPassword] = React.useState(false);


    useEffect(() => {
        if (success) navigate('/login')
        if (userInfo) navigate('/service')
    }, [navigate, userInfo, success])

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const submitForm = (data) => {
        if (data.password !== data.confirmPassword) {
            alert('Password mismatch')
        }
        data.email = data.email.toLowerCase()
        console.log(data)
        dispatch(registerUser(data))
    }
    return (
        <div className='registerForm'>
            <div className='register'>
                <div className='col-1'>
                    <h2>Sign Up</h2>
                    <span>Register and Enjoy our service</span>
                    <form id='form' className="flex flex-col" onSubmit={handleSubmit(submitForm)}>
                        <FormControl sx={{ mb: 0.9 }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            size='small'
                                            defaultValue="Small"
                                        >
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Username"
                                {...register('name')}
                            />
                        </FormControl>
                        <FormControl sx={{ mb: 1 }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            size='small'
                                            defaultValue="Small"
                                        >
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Email"
                                {...register('email')}
                            />
                        </FormControl>
                        <FormControl sx={{ mb: 1 }} variant="outlined">
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
                                            defaultValue="Small"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                {...register('password')}
                            />
                        </FormControl>
                        <FormControl sx={{ mb: 1 }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
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
                                            defaultValue="Small"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="confirmPassword"
                                {...register('confirmPassword')}
                            />
                        </FormControl>
                        <button type='submit' className='btn' disabled={loading}>
                            {/* {loading ? <Spinner /> : 'Register'} */}
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className='col-2'>
                    <a ><img alt="stack overflow" src={bgImg}></img></a>
                </div>

            </div>
        </div>


    )
}
export default RegisterScreen