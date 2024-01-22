import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ServiceGroom from './components/ServiceGroom/ServiceGroom';
import ServiceBride from './components/ServiceBride/ServiceBride';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserDetails from './components/UserDetails/UserDetails';
import ProtectedRoute from './routing/ProtectedRoutes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path='/service-bride' element={<ServiceBride />} />
        {/* </Route> */}
        <Route path='/service-groom' element={<ServiceGroom />} />
        <Route element={<ProtectedRoute/> } >
        <Route path='/products' element={<Products />} />
        </Route>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/service' element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
