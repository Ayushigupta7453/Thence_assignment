import React from 'react';
import './registered.css';

const Registered = () =>{
    return (
        <div className="congratulations">
      <div className="success-message">
        <p>Congratulations!</p>
        <p>Your request has been successfully submitted to us. We will validate your information and reach out to you shortly with updates.</p>
      </div>
      <div className="redirect-message">
        <p>Redirecting you to Homepage in 5 Seconds</p>
        <div className="counter">5</div>
      </div>
    </div>
    )
}
export default Registered;
