import React, { useState } from 'react';
import { login } from '../services/auth';
import RANDON_LANDSCAPE from '../assets/randon_landscape.jpg'
import { useNavigate } from "react-router-dom"




function Login_form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const isLogged = await login(username, password)
      if (isLogged) { 
        console.log('Login successful');
        navigate("home") }
      else {
        
      }
      
    } catch (error) {
      console.error('Login error:', error);

    }
  };

  const newUser = () => {
    navigate("registration")
  }

  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
          <h1 className='text-4xl text-white font-extrabold my-4'></h1>
        </div>
        <img src={RANDON_LANDSCAPE} alt="randon_landscape" className='w-full h-full object-cover' />
      </div>
      
      <div className='w-1/2 h-full bg-[#E0E0E0] flex flex-col p-20 justify-between'>
        <h1 className='text-xl text-[#060606] font-semibold'></h1>

        <div className='w-full flex flex-col max-w-[500px]'>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-3xl font-semibold mb-4'>Login</h3>
            <p className='text-base mb-2'>Welcome back! Please enter your details.</p>
          </div>
              

          <div className='w-full flex flex-col'>
            <div>
            {/* Username Input */}
            <input
              className='w-full text-black py-2 my-2 bg-none bg-transparent border-b border-black outline-none focus:outline-none'
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* Password Input */}
            <input
              className='w-full text-black py-2 my-2 bg-none bg-transparent border-b border-black outline-none focus:outline-none'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
              <div className='w-full flex items-center justify-between'>
                <div className='w-full flex'>
                  <input 
                  type='checkbox' 
                  className='w-4 h-4 mr-2' />
                  <p className='text-sm'>Remember Me</p>
                </div>

                <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password ?</p>
              </div>   

              <div className='w-full flex flex-col'>
                {/* Login Button */}
                <button 
                className='w-full text-white bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'
                onClick={handleLogin}>Login
                </button>
                {/* Render fetched data */}
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[#060606]'>Dont have a account? <span onClick={newUser} className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login_form;