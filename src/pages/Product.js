import React, { useContext } from 'react'
import Sort from '../Component/Sort'
import ProductList from '../Component/Productlist'
import Filtersection from '../Component/Filtersection'
import { Filtercontext } from '../contexts/filtercontext'


const Product = () => {

  
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
            <ProductList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Product