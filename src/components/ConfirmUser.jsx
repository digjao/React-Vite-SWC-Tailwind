import React from 'react'
import { useState } from 'react';
import RANDON_LANDSCAPE from '../assets/randon_landscape.jpg'
import { confirmation, resend } from '../services/auth';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom"



const ConfirmUser = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [formData, setFormData] = useState({
        username: '',
        confirmationCode: ''
      });

      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [success, setSuccess] = useState(false);
      const [ResendSuccess, setResendSuccess] = useState(false);
      
      
      React.useEffect(() => {
        if (location.state && location.state.email) {
          setFormData({ 
            ...formData, email: location.state.email,  username: location.state.username });
        }
      }, [location.state]);

    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    

      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
        
          const response = await confirmation(formData);
          console.log(response);
          setSuccess(true);
          setError(null); 
        } catch (error) {
          setError(error.response.data.message);
          setSuccess(false);
        }

    }


    const handleResendCode = async () => {

    try {
        setLoading(true);
        await resend(location.state.username);
        setResendSuccess(true);
        setError(null);
    }
    catch(error) {
        setError(error.message);
        setResendSuccess(false);
    } finally {
        setLoading(false)
    }
    }
    

    const backLoginPage = () => {
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
            <h3 className='text-3xl font-semibold mb-4'>Confirmation Step</h3>
            <p className='text-base mb-2'>
                Enter the confirmation code we sent to <strong>{formData.email}</strong>.  
                <button onClick={handleResendCode} className='font-semibold underline text-blue-600 underline-offset-2 cursor-pointer'>                  {loading ? 'Resending...' : 'Resend Confirmation'}
                 </button> 
                 {error && <div>Error: {error}</div>}
                {ResendSuccess && <div style={{ color: 'green' }}>Confirmation code resent successfully!</div>}
            </p>
          </div>

 
           {error && <div style={{ color: 'red' }}>{error}</div>}
          {success && <div style={{ color: 'green' }}>Confirmation successful!</div>}   

          <div className='w-full flex flex-col'>
            <form onSubmit={handleSubmit}>
                {/* <input
                className='w-full text-black py-2 my-2 bg-none bg-transparent border-b border-black outline-none focus:outline-none'
                name='username'
                type="text"
                placeholder='Username'
                value={formData.username}
                onChange={handleChange}
                /> */}
            
                <input
                className='w-full text-black py-2 my-2 bg-none bg-transparent border-b border-black outline-none focus:outline-none'
                name='confirmationCode'
                type='text'
                placeholder='Number code'
                value={formData.confirmationCode}
                onChange={handleChange}
                />
                
                <div className='w-full flex items-center justify-between'>
                    {/* <div className='w-full flex'>
                    <input 
                    type='checkbox' 
                    className='w-4 h-4 mr-2' />
                    <p className='text-sm'>Remember Me</p>
                    </div>

                    <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'></p> */}
                </div>   

                <div className='w-full flex flex-col'>
                   
                    <button 
                    onClick={handleSubmit}
                    className='w-full text-white bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>Confirm
                    </button>

                    <button 
                    onClick={backLoginPage}
                    className='w-full font-semibold underline underline-offset-2 cursor-pointer mt-6  flex items-center justify-center'>Back to login page
                    </button>
                    


                </div>
            </form>
          </div>
        </div>

        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[#060606]'>Dont have a account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</span></p>
        </div>
      </div>
    </div>
  )
}

export default ConfirmUser