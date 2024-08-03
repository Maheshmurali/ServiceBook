import React from 'react'
import { useForm } from 'react-hook-form'


function LoginPage() {
  const form = useForm();
  const {register} = form;

  return (
    <div className='grid mt-8 p-2 gap-4 md:grid-cols-2'>
      <div className='min-h-[350px] hidden md:block'>
        <img src="https://i.postimg.cc/3wpCcprm/OIP.jpg" className='w-full min-h-[350px] opacity-75 rounded-2xl shadow-lg' alt="" />
      </div>
      <div className='rounded-2xl flex justify-center px-2 mx-2'>
        <div className='border-2 rounded-md shadow-lg min-h-[400px] md:min-h-[350px] md:w-3/4 p-2 relative'>
            <h2 className='font-bold p-2 md:text-center md:mt-2 md:mb-4 text-center'>WELCOME BACK !</h2>
            <div id='username' className='grid grid-rows-1 md:4/3 m-4 '>
              <span className='my-2'>Username</span>
              <input type="text" placeholder='Username'  className='p-1 rounded-md bg-slate-200'/>
            </div>
            <div id='password' className='grid grid-rows-1 md:w-4/3 m-4'>
              <span className='my-2'>Password</span>
              <input type="text" placeholder='Password'  className='p-1 rounded-md bg-slate-200'/>
            </div>
            <div className='flex justify-between'>
              <div><input type="checkbox" checked className='cursor-pointer' /><span className='text-blue-500'> Remember Me</span></div>
              <div><p className='text-blue-600 cursor-pointer'>Forgot Password ?</p></div>
            </div>
            <button className='lg:mx-44 mx-24 mt-8 md:mt-8 p-2 px-4 rounded-md text-white bg-blue-500 hover:bg-blue-700'>LogIn</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
