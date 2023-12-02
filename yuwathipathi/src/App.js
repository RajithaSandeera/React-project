import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import ServiceGroom from './components/ServiceGroom/ServiceGroom';
import ServiceBride from './components/ServiceBride/ServiceBride';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import axios from 'axios';
import UserDetails from './components/UserDetails/UserDetails';

axios.defaults.withCredentials = true;

function App() {
  const [apiResponse, setAPIResponse] = useState("");

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setAPIResponse(res))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    callAPI();
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <Router>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/service-bride' component={ServiceBride} />
        <Route path='/service-groom' component={ServiceGroom} />
        <Route path='/products' component={Products} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/service' component={UserDetails} />
      </Router>
    </>
  );
}

export default App;
