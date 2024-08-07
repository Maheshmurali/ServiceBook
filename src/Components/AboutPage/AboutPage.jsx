import React, { useEffect, useState } from 'react'
import { IoPaperPlaneOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';


function AboutPage() {
const [data,setData] = useState([])

const form = useForm()
 const {handleSubmit,register,setValue,formState} = form;
 const {errors,isDirty} = formState;
  const formHandle = (data)=>{
    console.log(data)
    alert("success")

  }
   const TextAreaUpdate = (event)=>{
      const {name} = event.target
       setData(previousData => previousData.includes(name) ? previousData.filter(item => item !==name) : [...previousData,name]);
       console.log(data)
   }
   useEffect(() => {
    setTimeout(() => setValue("Enquiries",data.join(',')));
  }, [setValue, data]);

  
  return (
    <form onSubmit={handleSubmit(formHandle)} noValidate>
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
      <div id='enquiry-form' className='border-2 shadow-xl rounded-lg md:min-h-[600px] min-h-[700px] m-2 md:m-8 grid-rows-5 p-2'>
        <div className='grid grid-rows-2 max-h-[90px]'>
          <div className='grid grid-cols-2 gap-2'>
          <input {...register("Firstname",{required:{
            value : true,
            message : "* Name Is Required"
          }

          })} type="text" placeholder='Firstname' className='w-6/2 p-1 rounded-md overflow-hidden mt-4 border-2' />
          <input {...register("Lastname")} type="text" placeholder='Lastname' className='w-3/4 p-1 rounded-md overflow-hidden mt-4 border-2'/>
          </div>
          <div className='pt-6'>
          {errors.Firstname?.message && <p className='text-red-600 text-sm'>{errors.Firstname.message}</p> }
          </div>
        </div>
        <div className='grid grid-rows-2 gap-2  max-h-[67px]'>
          <div className='grid grid-cols-2 '>
            <input {...register("ContactNumber",{pattern:{
            value : 123456789,
            message : 'Enter A Valid Phone Numberr'
          },minLength : {
            value : 10,
            message : 'Please Check Phone Number'
          },maxLength : {
            value : 10 ,
            message : 'Please Check Phone Number'
          }
          }
          )} type="Tel" placeholder='ContactNumber' className='w-6/2 p-1 rounded-md mt-2  border-2' />
          <input {...register("WhatsappNumber",{pattern:{
            value : 1234567890,
            message : 'Enter A Valid Phone Number'
          },minLength:{
            value : 10,
            message : 'Please Check Phone Number'
            }
          }
            )} type="Tel" placeholder='WhatsAppNumber' className='w-6/2 p-1 rounded-md mt-2 border-2' /></div>
          <div className='grid grid-cols-2 max-h-[10px] pt-2'>
          {errors.ContactNumber?.message && <p className='text-red-600 text-sm'>{errors.ContactNumber.message}</p> }
          {errors.WhatsappNumber?.message && <p className='text-red-600 text-sm'>{errors.WhatsappNumber.message}</p> }
          </div>
        </div>
        <div className='grid md:grid-rows-2 gap-2 max-h-[65px]'>
          <div className='grid md:grid-cols-2 gap-2'>
          <input {...register("HouseName",{required:{value:true,message:'Please Enter Full Address'}})} type="text" placeholder='House Name' className='w-6/2 p-2 rounded-md overflow-hidden  border-2' />
          <input {...register("Street",{required:{value:true,message:'Please Enter Full Address'}})} type="text" placeholder='Street' className='w-6/2 p-2 rounded-md overflow-hidden mt-2 border-2'/>
          </div>
          <div className='grid md:grid-cols-2 gap-2 pt-3'>
          {errors.HouseName?.message && <p className='text-red-600 text-sm'>{errors.HouseName.message}</p> }
          {errors.Street?.message && <p className='text-red-600 text-sm'>{errors.Street.message}</p> }
          </div>
        </div>
        <div className='grid md:grid-rows-2 gap-2 p-2 md:mt-2 max-h-[79px]'>
        <div className='grid md:grid-cols-2 gap-2 p-2 md:mt-2'>
        <input {...register('City',{required:{value:true,message:'Please Enter Full Address'}})} type="text" placeholder='City'  className='w-4/3 p-1 rounded-md overflow-hidden border-2'/>
          <input {...register('PostalCode',{pattern:{value:/^[0-9]{5,6}$/,message:'Please Enter A Valid Code'},
          maxLength : {
              value : 6,
              message : 'Enter A Valid Postal Code'
          }
          }
          )} type="text" placeholder='PostalCode' className='md:w-6/12 p-1 rounded-md overflow-hidden mt-2 border-2 mx-4' />
        </div>
        <div className='grid md:grid-cols-2 gap-12 pt-4'>
        {errors.City?.message && <p className='text-red-600 text-sm'>{errors.City.message}</p> }
        {errors.PostalCode?.message && <p className='text-red-600 text-sm'>{errors.PostalCode.message}</p> }
        </div>
        </div>
        <hr className='mx-2 mt-4'/>
        <div className='grid md:grid-rows-4 md:grid-flow-col gap-4 mt-4 px-4'>
          <div className=''>
            <input onClick={TextAreaUpdate} name='CCTV' value={data}  type="checkbox" id='CCTV'/>
           <span className='md:px-4 px-2'>C C T V</span>
          </div>
          <div> 
            <input onClick={TextAreaUpdate} name='Home Automation' value={data}  type="checkbox" id='HomeAutomation'/>
            <span className='md:px-4 px-2'>Home Automation</span>
          </div>
          <div>
            <input onClick={TextAreaUpdate} name='Inverter' value={data}  type="checkbox" id='Inverter'/>
            <span className='md:px-4 px-2'>Inverter & Batterys</span>
          </div>
          <div>
            <input onClick={TextAreaUpdate} name='Solar' value={data}  type="checkbox" id='Solar'/>
            <span className='md:px-4 px-2'>Solar</span>
            </div>
          <div>
            <input onClick={TextAreaUpdate} name='Gate Automation' value={data}  type="checkbox" id='GateAutoMation'/>
            <span className='md:px-4 px-2'>GateAutomation</span>
          </div>
          <div>
            <input  onClick={TextAreaUpdate} name='Computer And Office' value={data}  type="checkbox" id='Computer and office'/>
            <span className='md:px-4 px-2'>Computer & Office Equipments</span>
          </div>
          <div>
            <input onClick={TextAreaUpdate} name='Facility Management' value={data}  type="checkbox" id='Facility management'/>
            <span className='md:px-4 px-2'>Facility management</span>
            </div>
          <div>
            <input onClick={TextAreaUpdate} name='AMC Service' value={data}  type="checkbox" id='amc'/>
            <span className='md:px-4 px-2'>A M C Service</span>
            </div>
        </div>
        <div className='px-4 p-4 w-full'>
          <textarea {...register("Enquiries")} readOnly value={data} name="" id="" className='w-full border-2'></textarea>
          
         <div>
         <button disabled = {!isDirty} className='bg-blue-500 flex hover:bg-blue-700 hover:cursor-pointer px-4 p-2 rounded-md lg:mx-52 mx-24 text-white'><IoPaperPlaneOutline /></button>
          </div> 
        </div>
      </div>
    </div>
    </form>
  )
}

export default AboutPage
