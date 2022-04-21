import React from 'react'

import { Helmet } from 'react-helmet'

import Banner from '../components/banner'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './our-favouritethings.css'

const OurFavouritethings = (props) => {
  return (
    <div className="our-favouritethings-container">
      <Helmet>
        <title>Our Favourite things - Landing Page</title>
        <meta
          property="og:title"
          content="Our Favourite things - Landing Page"
        />
      </Helmet>
      <Banner rootClassName="banner-root-class-name11"></Banner>
      <Navbar rootClassName="navbar-root-class-name11"></Navbar>
      <Footer rootClassName="footer-root-class-name18"></Footer>
    </div>
  )
}

export default OurFavouritethings
