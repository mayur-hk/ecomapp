import React from 'react'
import HeroSection from '../Component/HeroSection'

const About = () => {
  const mydata= {
    name: "Caption about MK's Ecom store"
  }
  return (
    <div>
      <HeroSection data={mydata} />
    </div>
  )
}

export default About