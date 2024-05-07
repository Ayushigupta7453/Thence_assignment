import React from 'react';
import './App.css';
// import Footer from './components/footer/footer.js';
// import Middle from './components/body/middlepart.js';
// import Navbar from './components/navbar/navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/login.js';
import Home from './components/pages/home.js';
import Register from './components/register/registered.js';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          {/* Add more routes here if needed */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
