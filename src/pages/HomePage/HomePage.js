import React, { Fragment } from 'react'
import Navbar from '../../Components /navbar/Navbar'
import Carousel from '../../Components /Carousel/Carousel'
import GetInTouch from '../../Components /ContactUs/GetInTouch'
import ServicesSection from '../../Components /ServiceSection/ServiceSection'
import EventsSection from '../../Components /Events/Events'
import DigitalProduct from '../../Components /DigitalProduct/DigitalProduct'

export default function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Carousel />
      <ServicesSection />
      <GetInTouch />
      <DigitalProduct />
      <EventsSection />
    </Fragment>
  )
}
