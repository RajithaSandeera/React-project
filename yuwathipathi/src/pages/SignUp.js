import React, {useState} from 'react';
import styles from './'
import bgImg from '../assets/img1.jpg';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';



export default function SignUp(){

   const history = useHistory();

    
    const [registerInput, setRegister] = useState({
        name:'',
        email:'',
        password:'',
       
        error_list:[],

    });
    const handleInput = (e) =>{
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) =>{
        e.preventDefault();
    }

    const data = {
        name: registerInput.name,
        email:registerInput.email,
        password: registerInput.password,
        
    }
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/register`, data).then(res =>{
            if(res.data.status === 200)
                {
                    localStorage.setItem('auth_token',res.data.token);
                    localStorage.setItem('auth_name',res.data.username);
                    swal("Success",res.data.message,"success");
                    history.push('/');
                }   
            else{
                    setRegister({...registerInput,error_list: res.data.validation_errors});
                }
        });
    });


    return(
        <section>         
          <div className='registerForm'>
            <div className='register'>
             <div className='col-1'> 
             <h2>Sign Up</h2>
             <span>Register and Enjoy our service</span>
            
             <form  id='form' className="flex flex-col" onSubmit={registerSubmit}>

                <input type="text" name="name" onChange={handleInput} value={registerInput.name} placeholder='username'/>
                <span>{registerInput.error_list.name}</span>
                <input type="text" name="email" onChange={handleInput} value={registerInput.email} placeholder='email'/>
                <span>{registerInput.error_list.email}</span>
                <input type="text" name="password" onChange={handleInput} value={registerInput.password} placeholder='password'/>
                <span>{registerInput.error_list.password}</span>
                {/* <input type="text" name="confirmpassword" onChange={handleInput} value={registerInput.confirmPassword} placeholder='confirm password'/> */}
                {/* <input type="text" name="mobile" onChange={handleInput} value={registerInput.mobile} placeholder='mobile'/> */}
                <span>{registerInput.error_list.password}</span>

                <button className='btn'>Sign In</button>
             </form>
             </div>
                <div className='col-2'>

                <a ><img alt="stack overflow" src={bgImg}></img></a>
                </div>
     
            
            </div>
            </div>
        </section>
       
    )
    }