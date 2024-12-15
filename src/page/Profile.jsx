import React from 'react'
import Navbar from '../components/Navbar/Nav';
import NavMobile from '../components/Navbar/NavMobile';
import { CgProfile } from "react-icons/cg";
import BoxMenu from '../components/Profile/BoxMenu';
import BoxDataUser from '../components/Profile/BoxDataUser';

function Profile() {
  return (
    <>
    <Navbar/>
    <NavMobile/>
    <div className='flex'>
    
    <BoxMenu/>
    <BoxDataUser/>
    </div>
    
    </>
  )
}

export default Profile