import React, { useContext } from 'react'
import { BsList, BsFillGridFill } from "react-icons/bs"
import { Filtercontext } from '../contexts/filtercontext'

const Sort = () => {

  const context = useContext(Filtercontext)
  const { filterProduct, isGridview, gridView, listView, sorting } = context


  return (
    <div className='container mt-3'>
      <div className='d-flex justify-content-between'>
        <div>
          <button className={isGridview ? "mx-2 border btn" : "mx-2 border btn active"} onClick={listView}>
            <BsList />
          </button>
          <button className={isGridview ? "mx-2 border active btn" : " btn mx-2 border"} onClick={gridView}>
            <BsFillGridFill />
          </button>

        </div>
        <div>
          {filterProduct.length} Product available
        </div>
        <div>
          <select className="form-select" id="sort" onClick={(e)=>{sorting(e)}}>
            <option value='highest'>highest-lowest</option>
            <option value='lowest'>lowest-highest</option>
            <option value='a-z'>sort(A-Z)</option>
            <option value='z-a'>sort(Z-A)</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Sort