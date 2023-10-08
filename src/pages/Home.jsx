import React from 'react'
import Header from '../components/common/Header'
import Twitch from '../components/twitch/Twitch'
import Players from '../components/players/Players';
import Blog from '../components/blog/Blog';
import ContactUs from '../components/ContactUs';
import Partners from './../components/Partners';
import Mobile from './../components/menu/Mobile';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>xrayTeam</title>
      </Helmet>
      <Header />
      <Mobile />
      <main className='font-main relative min-h-screen z-10 mb-[100vh] sm:mb-[580px]'>
        <Twitch />
        <Players />
        <Blog />
        <ContactUs />
        <Partners />
      </main>
    </>
  )
}

export default Home