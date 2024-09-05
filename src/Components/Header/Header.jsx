import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import {  Link } from "react-router-dom";
import {TechnicianContext} from './../../Store/TechnicianContext'
function Header() {
  const [menuopen , setMenuOpen] = useState(false)


  const menubar = ()=>{
        setMenuOpen(!menuopen)
        console.log(menuopen)
  }

  return (
    <div className="grid md:grid-cols-2 gap-2 md:gap-4 m-2 shadow-xl rounded-lg">
      <div className="min-h-[70px]  rounded-2xl  flex justify-between">
        <Link to='/'><img src="https://i.postimg.cc/dQTqGxLH/Logo.jpg" alt="" className="justify-self-center p-4 max-h-[100px] rounded-full" /></Link>
        <div className="p-6 md:hidden mt-2"><FaBars onClick={menubar} /></div>
      </div>
      <div className={`min-h-[70px] rounded md:block ${menuopen ? 'block' : 'hidden'}`}>
      <ul className="md:flex md:gap-32 justify-end p-4">
  <li className="my-2 hover:px-4 md:my-0 hover:cursor-pointer hover:bg-blue-600 p-1 hover:rounded-lg hover:text-white relative after:content-[''] after:block after:border-t after:border-gray-300 after:absolute after:w-full after:bottom-0 after:left-0 md:after:border-none">
    <Link to='/'>Home</Link>
  </li>
  <li className="my-2 hover:px-8 md:my-0 hover:cursor-pointer hover:bg-blue-600 p-1 hover:rounded-lg hover:text-white relative after:content-[''] after:block after:border-t after:border-gray-300 after:absolute after:w-full after:bottom-0 after:left-0 md:after:border-none">
  <Link to='/about'>About</Link>
  </li>
  <li className="my-2 hover:px-8 md:my-0 hover:cursor-pointer hover:bg-blue-600 p-1 hover:rounded-lg hover:text-white relative">
  <Link to='/login'>LogIn</Link>
  </li>
</ul>

      </div>
    </div>
  );
}

export default Header;
