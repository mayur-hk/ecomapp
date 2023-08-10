import React from 'react'
import { GiTruck, GiReceiveMoney } from 'react-icons/gi'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { MdSecurity } from 'react-icons/md'

const services = () => {
  return (
    <div className='container'>
      <div className="d-flex flex-row justify-content-evenly m-3">
        <div className="p-9 text-center box align-self-center">
          <GiTruck style={{ width: 40, height: 40, margin: "60 0 10 0" }} />
          <p className='mt-3 fs-5'>Super Fast and Free Delivery</p>
        </div>
        <div className="d-flex text-center flex-column box1 align-self-center m-3">
          <div className="boxr d-flex justify-content-center align-items-center ">
            <MdSecurity style={{ width: 40, height: 40}} />
            <p className='mt-3 ml-3 fs-5'>Non contect delivary</p>
          </div>
          <div className="boxr d-flex justify-content-center align-items-center">
          <GiReceiveMoney style={{ width: 40, height: 40}} />
            <p className='mt-3 ml-3 fs-5'>Super secure payment system</p>
          </div>
        </div>
        <div className="p-2 text-center box align-self-center bd-highlight">
          <RiSecurePaymentLine style={{ width: 40, height: 40, margin: "60 0 10 0" }} />
          <p className='mt-3 fs-5'>Super Fast and Free Delivery</p>
        </div>
      </div>

    </div>
  )
}

export default services