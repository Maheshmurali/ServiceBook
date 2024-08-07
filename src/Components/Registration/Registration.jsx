import React from 'react'
import {  Link } from "react-router-dom";
function Registration() {
  return (
    <div className='col-span-7 md:col-span-8 row-span-8'>
      <form action="">
<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Technician Registration
        </h1>
        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="FirstName"
              name="first_name"
              className="mt-1 p-1 w-full rounded-md border-gray-200  bg-gray-200 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              className="mt-1 p-1 w-full rounded-md border-gray-300  bg-gray-200 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 p-1 w-full rounded-md border-gray-200  bg-gray-200 text-sm text-gray-700 shadow-sm"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="mobilenumber" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              id="Mobilenumber"
              name="mobilenumber"
              className="mt-1 p-1 w-full rounded-md border-gray-200  bg-gray-200 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="employcode" className="block text-sm font-medium text-gray-700">
              Employ Code
            </label>

            <input
              type="number"
              id="employcode"
              name="employ_code"
              className="mt-1 p-1 w-full rounded-md border-gray-300  bg-gray-200 text-sm text-gray-700 shadow-sm"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

            <input
              type="password"
              id="Password"
              name="password"
              className="mt-1 p-1 w-full rounded-md border-gray-200  bg-gray-200 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
              Password Confirmation
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              className="mt-1 p-1 w-full rounded-md border-gray-700 bg-gray-200 text-sm text-gray-700 shadow-sm"
            />
          </div>
          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition  hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Create an account
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <Link className='text-blue-800' to='/login'>LogIn</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
      </form>
    </div>
  )
}

export default Registration
