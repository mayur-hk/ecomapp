import React from 'react'
import pic1 from '../images/trusted1.png'
import pic2 from '../images/trusted2.jpg'
import pic3 from '../images/trusted3.jpg'
import pic4 from '../images/trusted4.jpg'
import pic5 from '../images/trusted5.jpg'


const Trusted = () => {
  return (
    <>
      <div className='container-fluid bg-secondary py-3'>
        <div className='container my-3'>
          <h3 className='text-center'>Trusted by 1000+ compnies</h3>
        <div className="d-flex justify-content-between my-3">
          <div className="p-2 bd-highlight">
            <img src={pic1} alt="pic1" />
          </div>
          <div className="p-2 bd-highlight">
          <img src={pic2} alt="pic2" />
          </div>
          <div className="p-2 bd-highlight">
          <img src={pic3} alt="pic3" />
          </div>
          <div className="p-2 bd-highlight">
          <img src={pic4} alt="pic4" />
          </div>
          <div className="p-2 bd-highlight">
          <img src={pic5} alt="pic5" />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Trusted