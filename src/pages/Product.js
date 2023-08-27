import React, { useContext } from 'react'
import { productContext } from '../contexts/productcontext'
import Sort from '../Component/Sort'
import ProductList from '../Component/Productlist'
import Filtersection from '../Component/Filtersection'


const Product = () => {

  const data = useContext(productContext)
  const { products } = data


  return (
    <>
      <div className='container mb-5 '>
        <div className="d-flex gap-3">
          <div>
            <Filtersection />
          </div>
          <div>
            <div>
              <Sort />
            </div>
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Product