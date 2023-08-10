import React from 'react'
import hero from "../images/hero.jpg"

const HeroSection = (mydata) => {
    
    const {data} = mydata
    
    return (
        <div className='container'>
            <div className="d-flex flex-row justify-content-evenly mb-3">
                <div className="p-2 bd-highlight align-self-center">
                    <p className='fs-3'>Welcome to</p>
                    <h1 className='fs-1'>{data.name}</h1>
                    <p className='fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique obcaecati vitae eaque modi corporis rerum id aut nesciunt? Ducimus, officiis quia ut a quasi voluptatum, temporibus reprehenderit fuga ipsam, voluptatibus unde aspernatur quae odio.</p>
                    <button className="btn btn-primary">Shop now</button>
                </div>
                <div className="p-2 bd-highlight">
                    <figure>
                        <img src={hero} className='hero shadow-lg p-3 mb-5  ml-5 mt-4 bg-body rounded' alt="Hero" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default HeroSection