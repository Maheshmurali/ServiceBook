import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className='grid gap-4 p-2 md:grid-cols-4 md:m-12  md:gap-4 mt-12'>
      <div className='min-h-[100px] flex flex-col justify-center text-center'>
             <p className="md:px-32 px-40 py-2"><IoLocationSharp className="md:text-4xl text-2xl"/></p>
             <p>gghfdsf</p>
             <p>sdvhgvsdgh</p>
      </div>
      <div className='flex min-h-[100px]  justify-center flex-col text-center'>
        <span className="md:px-32 px-40 py-2"><FaPhoneAlt className="md:text-4xl text-2xl"/></span>
        <p>dfsdfsfsfsdfsdf</p>
      </div>
      <div className='min-h-[100px]  flex justify-center flex-col text-center'>
        <span className="md:px-32 px-40 py-2"><MdAlternateEmail className="md:text-4xl text-2xl"/></span>
        <p>dfsdfsfsfsdfsdf</p>
      </div>
      <div className='min-h-[100px] flex justify-center flex-col text-center'>
        <span className="md:px-32 px-40 py-2"><IoEarthOutline className="md:text-4xl text-2xl"/></span>
        <p>dfsdfsfsfsdfsdf</p>
      </div>
    </div>
  )
}

export default Footer
