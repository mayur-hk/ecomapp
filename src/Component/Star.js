import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'

const Star = ({ stars, reviews }) => {
    
    const datavalue = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        
        return (
        <span key={index}>
            {stars >= index + 1 ? <AiFillStar /> : stars >= number ? <BsStarHalf /> : <AiOutlineStar />}
        </span>
        );
    });


return (
    <>
        <div className='d-flex mb-3'>
            <div className='mr-6' style={{ color: 'orange', fontSize : '30px'}}>{datavalue}</div>
            <div className='mx-4 align-self-center '>( {reviews} Customer reviews)</div>
        </div>
    </>
)
}

export default Star