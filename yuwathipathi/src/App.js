import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ServiceGroom from './components/ServiceGroom/ServiceGroom';
import ServiceBride from './components/ServiceBride/ServiceBride';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import  Login from './pages/Login';
import  Dashboard from './pages/Dashboard';
import axios from 'axios';
import UserDetails from './components/UserDetails/UserDetails';
axios.defaults.withCredentials = true;

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;

});

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route>
          <Route path='/' exact component={Home} />
          <Route path='/service-bride' component={ServiceBride} />
          <Route path='/service-groom' component={ServiceGroom} />
          <Route path='/products' component={Products} /> 
          <Route path='/signUp' component={SignUp} /> 
          <Route path='/login' component={Login} />  
          <Route path='/Dashboard' component={Dashboard} />  
          <Route path='/service' component={UserDetails} />  

        </Route>
      </Router>
    </>
  );
}

export default App;