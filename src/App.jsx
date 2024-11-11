import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaHome } from "react-icons/fa";
import NavMobile from './components/Navbar/NavMobile';
import Nav from './components/Navbar/Nav';
import CardDetail from './components/Product/CardDetail';
import CardDesc from './components/Product/CardDesc';
function App() {


  return (
    <>
      {/* <Nav logo back search title="Test" cart /> */}
      {/* <Nav logo search />
      <Nav back title="หมวดหมู่ทั้งหมด" />
      <Nav back search cart /> */}

      {/* <Nav back title="ประวัติสั่งซื้อ" /> */}
      {/* <Nav back title="หมวดหมู่ทั้งหมด" /> */}



      {/* <Nav back search cart />  */}

      <div className='bg-ga-bg'>
        {/* <h1 className="text-3xl font-bold underline text-ga-primary">
          Hello world!YYYYYYYY
        </h1> */}
        <Nav back cart />
        <CardDetail />
        <CardDesc />

        <NavMobile />





      </div>




    </>
  )
}

export default App
