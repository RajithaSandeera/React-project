import React from 'react';
import '../../App.css';
import './css/Login.css';
import {useState} from 'react';



 function Login() {
return(
  <div className='Login'>
  <div className='container py-5'>
    <div className='row justify-content-center'>
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-header'>
            <h4>Login</h4>
          </div>
          <div className='card-body'>
            <form>
              <div className='form-group mb-3'>
                <label>Email ID</label>
                <input type="text" name="email" className='form-control' value=''></input>
              </div>
              <div className='form-group mb-3'>
                <label>Password</label>
                <input type="text" name="Password" className='form-control' value=''></input>
              </div>
              <div className='form-group mb-3'>
                <button type="submit" className='btn btn-primary'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>
  )}
  export default Login;