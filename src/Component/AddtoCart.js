import React from 'react'
import { useState } from 'react';
import {FaCheck} from 'react-icons/fa'

const AddtoCart = ({ product }) => {
    const { colors } = product;
    const [Color, setColor] = useState(colors[0])

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
            <div>
                <button className="btn btn-primary fs-4"> + </button>
                <button className="btn btn-primary fs-4"> - </button>
                
            </div>
        </div>
    )
}

export default AddtoCart