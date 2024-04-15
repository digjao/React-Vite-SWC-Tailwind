import React from 'react'
import { logout } from '../services/auth'
import { useNavigate } from "react-router-dom"



const Home = ({ onLogout}) => {
  
  const navigate = useNavigate()
  const hangleLogout = async () => {
    try {
      const isLoggedOut = await logout()
      console.log('logged-out');
      if (isLoggedOut) {
        navigate("/")
      }

      onLogout()
    } catch(error) {

      
    }
  }
  
  return (
    <div className='flex flex-col items-center mt-60'>
        <div className='flex text-3xl font-extrabold'>
            Home
        </div>
        <div>
            <button onClick={hangleLogout} className='text-white bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>Log out</button>
        </div>
    </div>
  )
}


export default Home