import React,{useState} from 'react'
import './login.css';
import { Link } from 'react-router-dom';
    

const Login = () =>{
    // State to store user inputs
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
   
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can add code to validate the username and password
      // For simplicity, let's just log the values to the console
      console.log('Username:', username);
      console.log('Email:', email);
      // After processing, you can redirect the user or perform other actions
      
    };

    return (
        <div className='main'>
           <div className='brunel'>
               <p> Brunel</p> 
           </div>
           <div className='form-container'>
               <div className='headn1'>
                  Registration from
               </div>
               <div className='headn2'>
                Start your success Journey here!
               </div>
               <div className='form-input'>
               <form onSubmit={handleSubmit}>
        <div>
          
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='enter your name'
            required
          />
        </div>
        <div>
          
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='enter your email'
            required
          />
        </div>
       <Link to="/register">Submit</Link>
      </form>
               </div>
           </div>
        </div>
    )
}
export default Login;