import React, {useContext } from 'react'
import { AdminPageContext } from '../../Store/AdminPageContext';

function AdminConsole() {
  const{setPage} = useContext(AdminPageContext)
  const MenuItems = ['Home','Customer','Complaints','Registration','Enquiry','LogOut']
 
  return (
    <div className='bg-black md:col-span-2 col-span-3 row-span-8 justify-center text-center'>
        <div className='flex justify-center mr-6'>
          <img className='bg-white w-16 h-16 rounded-full mt-6 ml-6 p-1 ' src="https://i.postimg.cc/dQTqGxLH/Logo.jpg" alt="Logo" />
        </div>
        <div>
        <h4 className='mt-2 text-white'>Yasha Innovation</h4>
        </div>
        <div className='bg-white w-full border-1 mt-2'></div>
        {MenuItems.map((obj)=>{
           return <div key={obj}>
           <ul className='text-white mt-4'>
            <li onClick={()=>
                setPage(obj.toLowerCase())
              } className='pb-2 hover:cursor-pointer'>{obj}</li>
            <div className='bg-white w-full border-1 mt-2'></div>
           </ul>
         </div>
        })}
       <div>All Right Reserved {new Date().getFullYear()}</div>
    </div>
  )
}

export default AdminConsole
