import React from 'react'
import { NavLink } from 'react-router-dom'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineYoutube} from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <div className='container-fluid bg-secondary'>
                <div className="container">
                    <div className="position-relative my-4 "> 
                            <div className=" d-flex justify-content-between align-items-center border top-0 translate-middle fsbox fcontainer">
                            <h5> Ready to get Started? Talk to us Today</h5>
                            <NavLink to='/contact'>
                            <button  className="btn btn-primary mr-3">Get Started</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className="d-flex .flex-md-column justify-content-evenly mb-3">
                            <div className="p-2 fbox ">
                                <h3>MK technical guide</h3>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, perspiciatis est. Mollitia, eum quas animi veritatis libero assumenda ad ab?</h5>
                            </div>
                            <div className="p-2 fbox ">
                                <h5>Subscribe to get important updates</h5>
                                <input type='email' placeholder='Enter your email'></input>
                                <button className='btn btn-primary my-2'>Subscribe</button>
                            </div>
                            <div className="p-2 fbox ">
                                <h5>Follow us</h5>
                                <NavLink>
                                    <BiLogoFacebookCircle style={{ width: 40, height: 40}}/>
                                    <BsInstagram style={{ width: 40, height: 40}} />
                                    <AiOutlineYoutube style={{ width: 40, height: 40}} />
                                </NavLink>
                            </div>
                            <div className="p-2 fbox">
                                <h5>Contact Us</h5>
                                <h5>Mobile +91 - 1234567890</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer