import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Servicegroom from './components/pages/Service-groom';
import Servicebride from './components/pages/Service-bride';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import  Login from './components/pages/Login';
import  Dashboard from './components/pages/Dashboard';
import axios from 'axios';
axios.defaults.withCredentials = true;

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route>
          <Route path='/' exact component={Home} />
          <Route path='/service-bride' component={Servicebride} />
          <Route path='/service-groom' component={Servicegroom} />
          <Route path='/products' component={Products} /> 
          <Route path='/signUp' component={SignUp} /> 
          <Route path='/login' component={Login} />  
          <Route path='/Dashboard' component={Dashboard} />  
        </Route>
      </Router>
    </>
  );
}

export default App;