import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'
import Mobile from '../components/menu/Mobile'
import Navbar from '../components/menu/Navbar'

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 640;
      setIsMobile(isMobileView);
    };

    handleResize();
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  return (
    <>
        <Navbar/>
        {isMobile && <Mobile/>}
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout