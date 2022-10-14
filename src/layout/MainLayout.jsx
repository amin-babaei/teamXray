import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'
import Mobile from '../components/menu/Mobile'
import Navbar from '../components/menu/Navbar'

const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <Mobile/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout