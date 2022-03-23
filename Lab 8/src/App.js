import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Booking from './pages/booking';
import FAQ from './pages/faq';
import Rooms from './pages/rooms';
import TeamBuilding from './pages/team-building';
import Contact from './pages/contact';
import Admin from './pages/admin';

function App() {
  return (
    <Router>
    <Navbar defaultActiveKey="/home"/>
    <img src={require('./logo.png')} alt="logo" className="Nav-logo" />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/rooms' element={<Rooms/>} />
        <Route path='/team-building' element={<TeamBuilding/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </Router>
  );
}

export default App;