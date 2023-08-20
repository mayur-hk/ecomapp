import React, { useContext } from 'react'
import { productContext } from '../contexts/productcontext'


const Product = () => {

  const data = useContext(productContext)
    console.log("🚀 ~ file: Product.js:8 ~ Product ~ data:", data)
    
    
  return (
    <div>Product </div>
  )
}

export default Product