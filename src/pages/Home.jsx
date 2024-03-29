import React from 'react'
import Header from '../components/common/Header'
import Twitch from '../components/twitch/Twitch'
import Players from '../components/players/Players';
import Blog from '../components/blog/Blog';
import ContactUs from '../components/ContactUs';
import Partners from './../components/Partners';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>xrayTeam</title>
      </Helmet>
      <Header />
      <main className='font-main section-over'>
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