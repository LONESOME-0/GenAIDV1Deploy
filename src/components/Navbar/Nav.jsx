import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FaFire } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { PiPillFill } from "react-icons/pi";
const Nav = ({ logo, back, search, title, cart }) => {
    const iconSize = '2.3rem'
    return (
        <>

            {(logo || back || search || title || cart) && (
                <nav className=" nav lg:hidden flex justify-between items-center h-[60px] p-3 space-x-6 bg-white fixed top-0 w-full z-50">
                    {back && <button className="nav-back"><IoMdArrowRoundBack className='text-2xl' /></button>}
                    {logo && <div className="nav-logo"><img src="/src/assets/img/logo-genaid.png" alt="" className='max-h-10' /></div>}
                    <div className="flex-grow flex justify-center">

                        {title && <div className="nav-title">{title}</div>}
                        {search && <input className="nav-search w-full rounded-full p-1 border-solid border-[3px] border-ga-primary" type="text" placeholder="Search" />}
                    </div>
                    {cart && <button className="nav-cart"><FaCartShopping size={24} /></button>}
                </nav>
            )}
            {/* <nav className="nav flex justify-between items-center h-[60px] p-3 space-x-6 bg-white">
                {back && <button className="nav-back"><IoMdArrowRoundBack className='text-2xl' /></button>}
                {logo && <div className="nav-logo"><img src="/src/assets/img/logo-genaid.png" alt="" className='max-h-10' /></div>}
                <div className="flex-grow flex justify-center">

                    {title && <div className="nav-title">{title}</div>}
                    {search && <input className="nav-search w-full rounded-full p-1 border-solid border-[3px] border-ga-primary" type="text" placeholder="Search" />}
                </div>
                {cart && <button className="nav-cart"><FaCartShopping size={24} /></button>}
            </nav> */}

            

                    <nav className="hidden lg:block bg-white shadow-xl w-full fixed top-0 z-50">
                        <div className="container mx-auto">
                            {/* Top Section */}
                            <div className="flex items-center justify-between p-4">
                                <div className="nav-logo">
                                    <img src="/src/assets/img/logo-genaid.png" alt="" className="h-12" />
                                </div>

                                <div className="flex-1 mx-8">
                                    <input
                                        className="w-full rounded-full px-4 py-2 border-2 focus:outline-none focus:border-blue-500"
                                        type="text"
                                        placeholder="ค้นหา สินค้า ประเภทสินค้า อาการ แท็ก"
                                    />
                                </div>

                                <div className="flex items-center space-x-6">
                                    <div className="flex flex-col items-center cursor-pointer hover:text-ga-primary">
                                        <FaCartShopping className="text-2xl mb-1" />
                                        <span className="text-sm">รถเข็น</span>
                                    </div>

                                    <div className="flex flex-col items-center cursor-pointer hover:text-ga-primary">
                                        <FaUser className="text-2xl mb-1" />
                                        <span className="text-sm">บัญชี</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="flex items-center justify-center space-x-8 py-2 border-t">
                                <div className="flex items-center space-x-2 cursor-pointer hover:text-ga-primary">
                                    <FaHome className="text-lg" />
                                    <span>หน้าหลัก</span>
                                </div>
                                <div className="flex items-center space-x-2 cursor-pointer hover:text-ga-primary">
                                    <BiSolidCategory className="text-lg" />
                                    <span>หมวดหมู่ทั้งหมด</span>
                                </div>
                                <div className="flex items-center space-x-2 cursor-pointer hover:text-ga-primary">
                                    <FaFire className="text-lg" />
                                    <span>สินค้าขายดี</span>
                                </div>
                                <div className="flex items-center space-x-2 cursor-pointer hover:text-ga-primary">
                                    <RiDiscountPercentFill className="text-lg" />
                                    <span>สินค้าลดราคา</span>
                                </div>
                                <div className="flex items-center space-x-2 cursor-pointer hover:text-ga-primary">
                                    <PiPillFill className="text-lg" />
                                    <span>เกี่ยวกับเรา</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                  

                <div>
                {/* // <nav className="nav flex flex-col justify-between items-center h-[60px] bg-white">
                    //     <div className="flex w-full justify-between space-x-7 p-4">
                    //         <div className="nav-logo"><img src="/src/assets/img/logo-genaid.png" alt="" className="max-h-20" /></div>
                    //         <input className="nav-search w-[90%] rounded-full p-1 border-solid border-[3px] max-h-11" type="text" placeholder=" ค้นหา สินค้า ประเภทสินค้า อาการ แท็ก" />
                    //         <div className="flex flex-col items-center text-center">
                    //             <FaCartShopping size={30} />
                    //             <span>รถเข็น</span>
                    //         </div>
                    //         <div className="flex flex-col items-center">
                    //             <FaUser size={40} />
                    //             <span>บัญชี</span>
                    //         </div>
                    //     </div>

                    //     <div className="space-x-3">
                    //         <div className="inline-flex space-x-1 items-center">
                    //             <FaHome size={20} />
                    //             <span>หน้าหลัก</span>
                    //         </div>
                    //         <div className="inline-flex space-x-1 items-center">
                    //             <BiSolidCategory size={20} />
                    //             <span>หมวดหมู่ทั้งหมด</span>
                    //         </div>
                    //         <div className="inline-flex space-x-1 items-center">
                    //             <FaFire size={20} />
                    //             <span>สินค้าขายดี</span>
                    //         </div>
                    //         <div className="inline-flex space-x-1 items-center">
                    //             <RiDiscountPercentFill size={20} />
                    //             <span>สินค้าลดราคา</span>
                    //         </div>
                    //         <div className="inline-flex space-x-1 items-center">
                    //             <PiPillFill size={20} />
                    //             <span>เกี่ยวกับเรา</span>
                    //         </div>
                    //     </div>
                    // </nav> */}
                </div>
        </>
    )
}

export default Nav


