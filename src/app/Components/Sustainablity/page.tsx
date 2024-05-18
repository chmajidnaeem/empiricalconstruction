import React from 'react'
import Hero from './Hero'
import SustainabilityApproach from './SustainabilityApproach'
import SustainabilityHighlights from './SustainabilityHighlights'
import CaseStudies from './CaseStudies'
import ContactUs from './ContactUs'
import Awards from './Awards'
import LatestNews from './LatestNews'
import Testimonials from './Testimonials'

const page = () => {
  return (
    <div className='pt-24'>
        <Hero />
        <SustainabilityApproach />
        <SustainabilityHighlights />
        <CaseStudies />
        <ContactUs />
        <Awards />
        <LatestNews />
        <Testimonials />
    </div>
  )
}

export default page