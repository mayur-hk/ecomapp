import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const TooggleAmount = ({ quantity, increasevalue, decreasevalue }) => {

    return (
        <div>
            <div className='d-flex align-items-center mt-4'>
                <FaMinus onClick={() => decreasevalue()} />
                <p className='mx-3 pt-3'>{quantity}</p>
                <FaPlus onClick={() => increasevalue()} />
            </div>
            <NavLink to="/cart">
                <button className="btn btn-primary"> Add to cart</button>
            </NavLink>
        </div>
    )
}

export default TooggleAmount