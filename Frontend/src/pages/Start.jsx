import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../assets/logo2.png'

const Start = () => {
  return (
    <div className='min-h-screen h-[100dvh] w-full overflow-hidden'>
      {/* Mobile background image */}
      <div className='absolute inset-0 bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] md:hidden' />
      
      {/* Desktop background image */}
      <div className='absolute inset-0 bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop)] hidden md:block' />
      
      {/* Overlay for better text readability */}
      <div className='absolute inset-0 bg-black/20' />
      
      {/* Content */}
      <div className='relative h-full flex flex-col justify-between'>
        {/* Logo */}
        <div className='pt-8 px-8'>
          <img className='w-28 drop-shadow-lg' src={logo2} alt="Zeno Logo" />
        </div>
        
        {/* Bottom card */}
        <div className='text-center bg-white rounded-t-3xl shadow-2xl p-8 md:mx-auto md:mb-12 md:rounded-3xl md:max-w-md md:w-full'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
            Get Started with Zeno
          </h2>
          <p className='text-gray-600 mb-6'>
            Your journey begins here
          </p>
          <Link 
            to='/login' 
            className='flex items-center justify-center w-full border-2 bg-black text-white py-3.5 rounded-xl font-medium hover:bg-white hover:text-black hover:border-black hover:border-2 transition-colors duration-200 shadow-lg'
          >
            Continue
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Start