import React from 'react'

function NewRegistration() {
  return (
    <div className='col-span-7 md:col-span-8 row-span-7'>
      <div className='text-center md:text-2xl text-lg mt-8 underline font-medium'>
        <h1>Complaint Registration</h1>
      </div>
      <form action="">
      <div className='grid grid-rows-2 md:grid-cols-3 row-span-3 mt-2' id='head'>
        <div className='grid grid-rows-2 w-25 pl-8'>
        <span className='mt-2'>Complaint Type</span>
        <select name="" id="" className='border-1 rounded-lg'>
            <option value="">Select</option> 
            <option value="CCTV">C C T V</option>
            <option value="Inverter">INVERTER</option>
            <option value="Solar">SOLAR</option>
            <option value="Gate">GATE</option>
            <option value="Computer&printer">COMPUTER&PRINTERS</option>
        </select>
        </div>
        <div className='w-25 ml-8 mt-2'>
          <span>Date</span>
          <input className='rounded-lg border-1 p-1'
          type="Date"
            
           />
        </div>
        <div className='w-25 ml-8 mt-2'>
          <span>Job_Id</span>
          <input className='rounded-lg border-1 p-1 bg-gray-200 md:w-62 w-36'
          type="text"
            value={'K-1234567'}
            readOnly
           />
        </div>
      </div>
      <div>
        <div>
          
        </div>
      </div>
      </form>
    </div>
  )
}

export default NewRegistration
