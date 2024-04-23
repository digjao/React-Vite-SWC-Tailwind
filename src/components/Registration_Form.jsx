import React, { useState } from 'react';
import { registration } from '../services/auth';
import RANDON_LANDSCAPE from '../assets/randon_landscape.jpg'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, setError, setSuccess } from '../features/userSlice';



const Registration_Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const formData = useSelector((state) => state.registration.formData);  
  const error = useSelector((state) => state.registration.error);  
  const success = useSelector((state) => state.registration.success);


  const handleChange = (e) => {
    dispatch(setFormData({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const cleanedCPF = formData.document.replace(/[^\d]/g, '');


    try {
      const response = await registration({...formData, document: cleanedCPF});
      // console.log(Object.keys(response)); 
      console.log(response);

      dispatch(setSuccess(true));
      navigate("/confirmuser", { state: { email: formData.email, username: response.data.username }})
    } catch (error) {
      dispatch(setError(error.response.data.message));
      
    }
  };

  const alreadyHave = () => {
    navigate("/")
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
            <h3 className='text-3xl font-semibold mb-4'>Create New User</h3>
            <p className='text-base mb-2'>Welcome to the ...</p>
          </div>

          {error && <div style={{ color: 'red' }}>{error}</div>}
          {success && <div style={{ color: 'green' }}>Registration successful!</div>}

          <div className='w-full flex flex-col'>
            <form onSubmit={handleSubmit}>
              {/* Fullname Input */}
                <input
                  className='w-full text-black py-2 my-2 bg-none bg-transparent border-b border-black outline-none focus:outline-none'
                  name="name"
                  type="text"
                  value={formData.name}
                  placeholder='Full name'
                  onChange={handleChange}
                />
              {/* Email Input */}
              <input
                className='w-full text-black py-2 my-2 bg-none bg-transparent border-b border-black outline-none focus:outline-none'
                name="email"
                type="email"
                value={formData.email}
                placeholder='Email'
                onChange={handleChange}
              />
              {/* Phone Input */}
              <input
                className='w-full text-black py-2 my-2 bg-none bg-transparent border-b border-black outline-none focus:outline-none'
                name='phone'
                type="text"
                value={formData.phone}
                placeholder='Mobile Phone Number'
                onChange={handleChange}
              />
              {/* Document Input */}
              <input
                className='w-full text-black py-2 my-2 bg-none bg-transparent border-b border-black outline-none focus:outline-none'
                name='document'
                type="text"
                value={formData.document}
                placeholder='CPF'
                onChange={handleChange}
              />
              {/* Password Input */}
              <input
                className='w-full text-black py-2 my-2 bg-none bg-transparent border-b border-black outline-none focus:outline-none'
                name='password'
                type="password"
                value={formData.password}
                placeholder='Create a password'
                onChange={handleChange}
              />

              <div className='w-full flex flex-col'>
                <button
                  className='w-full text-white bg-[#060606] rounded-md p-4 mt-4 text-center flex items-center justify-center'
                  >Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[#060606]'>Already have an account?<span onClick={alreadyHave} className='font-semibold underline underline-offset-2 cursor-pointer'>Sign in</span></p>
        </div>
      </div>
    </div>
  );
};

export default Registration_Form;
