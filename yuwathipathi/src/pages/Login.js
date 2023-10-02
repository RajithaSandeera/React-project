import React,{useState} from 'react';
import '../../App.css';
import './css/Login.css';
import axios from 'axios';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';

 function Login() {
  
  const history = useHistory();
  const [loginInput, setLogin] = useState({
    email:'',
    password:'',
    error_list:[],
  });

  const handleInput = (e) =>{
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});
  }
  const loginSubmit = (e) => {
    e.preventDefault();
  }  
  const data = {
    email: loginInput.email,
    password: loginInput.password,
  }
  axios.get('/sanctum/csrf-cookie').then(response => {
  axios.post(`/api/login`, data).then(res=> {

      if(res.data.status ===200)
      {
        localStorage.setItem('auth_token',res.data.token);
        localStorage.setItem('auth_name',res.data.username);
        swal("Success",res.data.message,"sucess");
        history.push('/'); 
      }
      else if(res.data.status === 401)
      {
      //  swal("warning",res.data.message,"warning");
      }
      else
      {
        
        // setLogin({...loginInput, error_list: res.data.validation_errors }); 
      }
    });
  });

return(
  <section>         
  <div className='loginForm'>
    <div className='login'>
     <div className='col'> 
     <h2>Sign In</h2>
     <span>Provide Valid Details and Enjoy our service</span>
    
     <form  id='form' className="flex flex-col"  onSubmit={loginSubmit}  >
        <input type="email" name="email" onChange={handleInput} value={loginInput.email} placeholder='email'/>
        {/* <span>{loginInput.error_list.email}</span> */}
        <input type="password" name="password" onChange={handleInput} value={loginInput.password}  placeholder='password'/>
        {/* <span>{loginInput.error_list.password}</span> */}
        <button type="button" className='btn btn-primary'>Login In</button>
     </form>
     </div>
      
    
    </div>
    </div>
</section>
  
  )}
  export default Login;