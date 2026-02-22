import React from 'react'
import ContactHeader from './contactBanner'
import FeaturesBar from '../shop/featuresBar'
import Details from './details'

const Contact = () => {
  return (
    <div className='pt-24'>
        <ContactHeader/>
      <Details/>
      <FeaturesBar/>
      
    </div>
  )
}

export default Contact
