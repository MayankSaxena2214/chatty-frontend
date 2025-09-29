import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
 
  return (
    <div className='h-[5dvh] px-2 flex items-center gap-2 border'>
      <FaWhatsapp className='h-5 w-5 text-gray-700'/>
      <div>Whatsapp</div>
    </div>
  )
}

export default Navbar
