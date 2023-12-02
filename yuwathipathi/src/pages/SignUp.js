import React, { useEffect } from 'react';
import './css/SignUp.css';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import bgImg from '../assets/img1.jpg';

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

    useEffect(() => {
        if (success) navigate('/login')
        if (userInfo) navigate('/user-profile')
    }, [navigate, userInfo, success])

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
                        {/* {error && <Error>{error}</Error>} */}
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-input'
                                placeholder='Username'
                                {...register('name')}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='email'
                                className='form-input'
                                placeholder='Email'
                                {...register('email')}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='password'
                                className='form-input'
                                placeholder='Password'
                                {...register('password')}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='password'
                                className='form-input'
                                placeholder='Password'
                                {...register('confirmPassword')}
                                required
                            />
                        </div>
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