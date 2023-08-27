import React from 'react'
import { useState } from 'react';
import {FaCheck} from 'react-icons/fa'
import TooggleAmount from './TooggleAmount';

const AddtoCart = ({ product }) => {
    const { colors, stock } = product;
    const [Color, setColor] = useState(colors[0])
    const [Quantity, setQuantity] = useState(1)

    const increase = () => {
        {stock > Quantity ? setQuantity (Quantity + 1) : setQuantity(stock)  }
    }

    const decrease = () => {
        {Quantity > 1 ? setQuantity(Quantity - 1) : setQuantity(1) }
    }

    return (
        <div>
            <div className='d-flex fs-3 text-center'>
                colors:  {colors.map((elem, index) => {
                    return <button className='btn rounded-circle mx-1 '
                        key={index}
                        style={Color === elem ? { backgroundColor: elem, width: "38px" } : { backgroundColor: elem, opacity: "50%", width: "38px" }}
                        onClick={()=>setColor(elem)}>
                        {Color === elem ? <FaCheck className='text-light' /> : null}
                    </button>
                })}
            </div>
           <TooggleAmount quantity={Quantity} increasevalue={increase} decreasevalue={decrease} />
        </div>
    )
}

export default AddtoCart