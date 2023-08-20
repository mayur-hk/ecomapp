import React from 'react'
import { useState } from 'react';

const Images = (props) => {

  const image = props.img;
  const [useImage, setuseImage] = useState(image[0])

  return (
    <div className='d-flex flex-row align-items-center'>
      <div className='d-flex flex-column justify-content-between '>

        {image.map((currele) => {
          return <img src={currele.url} alt={currele.filename} key={currele.id} style={{ width: 125, height: 125, margin: 7 }} onClick={()=>{setuseImage(currele)}}/>
        })}

      </div>
      <div>
        <figure>
          <img src={useImage.url} alt={useImage.filename} style={{ width: 345, height: 345, margin: '98px 78px' }} />
        </figure>
      </div>
    </div>
  )
}

export default Images