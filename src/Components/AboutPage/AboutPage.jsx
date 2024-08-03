import React from 'react'
import { IoPaperPlaneOutline } from "react-icons/io5";

function AboutPage() {
  return (
    <div className='grid md:grid-cols-2 m-2'>
      <div id='self' className='shadow-xl rounded-md md:min-h-[600px] min-h-[300px] m-2 md:m-8 relative'>
        <div className='text-center'>
          <div className=' w-24 h-24 md:w-36 md:h-36 absolute inset-x-28 lg:inset-x-72 md:top-28 rounded-full border-2 border-blue-600'></div>
          <div className='absolute inset-x-0 top-28 md:top-72 md:px-2'>
            <p className='font-edu text-base md:text-2xl'><span className='md:text-4xl'>"</span> Founded 8 years ago, Yasha Innovation specializes in CCTV 
              and automation equipment installation. We deliver top-notch 
              security solutions and advanced automation systems to enhance 
              your safety and convenience. Trust us for professional, reliable service and innovative technology <span className='md:text-4xl'>"</span></p>
          </div>
        </div>
        
      </div>
      <div id='enquiry-form' className='border-2 shadow-xl rounded-lg md:min-h-[600px] min-h-[700px] m-2 md:m-8 grid-rows-5'>
        <div className='grid grid-cols-2 gap-2 p-2'>
          <input type="text" placeholder='FirsNmae' className='w-6/2 p-1 rounded-md overflow-hidden mt-4 border-2' />
          <input type="text" placeholder='LastNmae' className='w-3/4 p-1 rounded-md overflow-hidden mt-4 border-2'/>
        </div>
        <div className='grid grid-cols-2 gap-2 p-2'>
          <input type="Tel" placeholder='Contact Number' className='w-6/2 p-1 rounded-md mt-2  border-2' />
          <input type="Tel" placeholder='WhatsApp Number' className='w-6/2 p-1 rounded-md mt-2 border-2' />
        </div>
        <div className='grid md:grid-cols-2 gap-2 p-2 mt-2'>
          <input type="text" placeholder='House Name' className='w-6/2 p-2 rounded-md overflow-hidden  border-2' />
          <input type="text" placeholder='Street' className='w-6/2 p-2 rounded-md overflow-hidden mt-2 border-2'/>
        </div>
        <div className='grid md:grid-cols-2 gap-2 p-2 md:mt-2'>
          <input type="text" placeholder='City'  className='w-4/3 p-1 rounded-md overflow-hidden border-2'/>
          <input type="text" placeholder='PostalCode' className='md:w-4/12 p-1 rounded-md overflow-hidden mt-2 border-2' />
        </div>
        <hr className='mx-2 mt-4'/>
        <div className='grid md:grid-rows-4 md:grid-flow-col gap-4 mt-4 px-4'>
          <div className=''>
            <input type="checkbox" id='CCTV'/>
           <span className='md:px-4 px-2'>C C T V</span>
          </div>
          <div> 
            <input type="checkbox" id='HomeAutomation'/>
            <span className='md:px-4 px-2'>Home Automation</span>
          </div>
          <div>
            <input type="checkbox" id='Inverter'/>
            <span className='md:px-4 px-2'>Inverter & Batterys</span>
          </div>
          <div>
            <input type="checkbox" id='Solar'/>
            <span className='md:px-4 px-2'>Solar</span>
            </div>
          <div>
            <input type="checkbox" id='GateAutoMation'/>
            <span className='md:px-4 px-2'>GateAutomation</span>
          </div>
          <div>
            <input type="checkbox" id='Computer and office'/>
            <span className='md:px-4 px-2'>Computer & Office Equipments</span>
          </div>
          <div>
            <input type="checkbox" id='Facility management'/>
            <span className='md:px-4 px-2'>Facility management</span>
            </div>
          <div>
            <input type="checkbox" id='amc'/>
            <span className='md:px-4 px-2'>A M C Service</span>
            </div>
        </div>
        <div className='px-4 p-4 w-full'>
          <textarea name="" id="" className='w-full' />
         <div>
         <button className='bg-blue-500 flex hover:bg-blue-700 hover:cursor-pointer px-4 p-2 rounded-md lg:mx-52 mx-24 text-white'><IoPaperPlaneOutline /></button>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default AboutPage
