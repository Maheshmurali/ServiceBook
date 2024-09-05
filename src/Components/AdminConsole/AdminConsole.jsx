import React, {useContext } from 'react'
import { AdminPageContext } from '../../Store/AdminPageContext';
import { FirebaseContex } from "../../Store/FirebaseContext";
import { TechnicianContext } from '../../Store/TechnicianContext';
import { useNavigate } from 'react-router-dom';
function AdminConsole() {
  const{setPage} = useContext(AdminPageContext)
  const {firebase} = useContext(FirebaseContex)
  const {technician} = useContext(TechnicianContext)
  const navigate = useNavigate()
  const MenuItems = ['Home','Customer','Complaints','Registration','Enquiry']
  if (technician) {

    MenuItems.push('Logout'); 
  }
  function logOut() {
    firebase.auth().signOut()
      .then(() => {
        console.log('User signed out successfully.');
        navigate('/login'); 
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  }

  return (
    <div className='bg-black md:col-span-2 col-span-3 row-span-8 justify-center text-center'>
        <div className='flex justify-center mr-6'>
          <img className='bg-white w-16 h-16 rounded-full mt-6 ml-6 p-1 ' src="https://i.postimg.cc/dQTqGxLH/Logo.jpg" alt="Logo" />
        </div>
        <div>
        <h4 className='mt-2 text-white'>Yasha Innovation</h4>
        <p className='text-gray-100'>Admin</p>
        </div>
        <div className='bg-white w-full border-1 mt-2'></div>
        {MenuItems.map((obj)=>{
           return <div key={obj}>
           <ul className='text-white mt-4'>
              <li
                onClick={() => {
                  if (obj === 'Logout') {
                    logOut()
                  } else {
                    setPage(obj.toLowerCase());
                  }
                }}
                className='pb-2 hover:cursor-pointer'
              >
                {obj}
              </li>
              <div className='bg-white w-full border-1 mt-2'></div>
            </ul>
         </div>
        })}
       <div>All Right Reserved {new Date().getFullYear()}</div>
    </div>
  )
}

export default AdminConsole
