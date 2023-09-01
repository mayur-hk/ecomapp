import React, { useContext } from 'react'
import { BsList, BsFillGridFill } from "react-icons/bs"
import { Filtercontext } from '../contexts/filtercontext'

const Sort = () => {

  const context = useContext(Filtercontext)
  const { filterProduct, isGridview, gridView, listView } = context
  

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
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort items
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sort