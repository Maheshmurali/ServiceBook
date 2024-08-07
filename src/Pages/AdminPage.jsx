import React, { useContext } from 'react'
import AdminConsole from '../Components/AdminConsole/AdminConsole'
import AdminStatic from '../Components/AdminStatic/AdminStatic'
import { AdminPageContext } from '../Store/AdminPageContext'
import Complaints from './../Components/Complaints/Complaints'
import Customer from './../Components/Customer/Customer'
import Registration from './../Components/Registration/Registration'
import Enquiry from './../Components/Enquiry/Enquiry'
function AdminPage() {
  const {page} = useContext(AdminPageContext)
  return (
    <div className='flex h-screen w-full  justify-center'>
      <div className='grid w-full grid-cols-10 grid-rows-4 md:gap-2'>
      <AdminConsole/>
      {(page === '' || page === 'home') && <AdminStatic/>}
      {page === 'complaints' && <Complaints />}
      {page === 'customer' && <Customer />}
      {page === 'registration' && <Registration />}
      {page === 'enquiry' && <Enquiry />}

      </div>
    </div>
    
  )
}

export default AdminPage
