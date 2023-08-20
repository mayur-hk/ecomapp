import React from 'react'
import HeroSection from '../Component/HeroSection'
import Trusted from '../Component/Trusted'
import Services from '../Component/Services'
import Featuredproduct from '../Component/Featuredproduct'


const Home = () => {

  const mydata = {
    name: "MK's Ecom store"
  }
  return (
    <>
      <div>
        <HeroSection data={mydata} />
        <Featuredproduct />
        <Services />
        <Trusted />
      </div>
    </>
  )
}

export default Home