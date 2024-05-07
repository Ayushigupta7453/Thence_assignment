import React from 'react';
import Footer from '../footer/footer.js';
import Middle from '../body/middlepart.js';
import Navbar from '../navbar/navbar.js';


function home() {
  return (
    
      <div className="App">
        <Navbar />
        
        <Middle />
        <Footer />
      </div>
    
  );
}

export default home;
