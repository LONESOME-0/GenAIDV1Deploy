import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";


function BoxMenu() {
  return (
  <>
    <div className='bg-white flex flex-col space-y-4 mt-20 ms-20 p-3 w-60 h-56 border border-3 grey-500 shadow-lg rounded'>
      
      <p className='flex items-center'> <FaUserCircle className='flex m-2' /> ประวัติของฉัน</p>
      <p className='flex items-center'> <FaLocationDot className='flex m-2' /> ที่อยู่ของฉัน</p>
      <p className='flex items-center'> <IoMdNotifications className='flex m-2' /> ประวัติการสั่งซื้อ</p>
      <br/>
      <p className='flex items-center'> <MdOutlineLogout className='flex m-2' /> ออกจากระบบ</p>
    </div>
  </>
  )
}

export default BoxMenu