import React from 'react'
import HeroSection from '../Component/HeroSection'
import Trusted from '../Component/Trusted'
import Services from '../Component/Services'


const Home = () => {

  const mydata = {
    name: "MK's Ecom store"
  }
  return (
    <>
      <div>
        <HeroSection data={mydata} />
        <Services />
        <Trusted />
      </div>
    </>
  )
}

export default Home