import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

function SocialMedia() {
  return (
    <div className="grid grid-cols-4 p-8 md:ml-32 md:gap-16 gap-12">
      <span><FaWhatsapp className="md:text-4xl text-2xl fill-green-700" /></span>
      <span><IoLogoInstagram className="md:text-4xl text-2xl fill-orange-600"/></span>
      <span><FaFacebookMessenger className="md:text-4xl text-2xl fill-blue-600 " /></span>
      <span><AiOutlineYoutube className="md:text-4xl text-2xl fill-red-700"/></span>
    </div>
  )
}

export default SocialMedia
