import React, { useContext } from 'react'
import { Filtercontext } from '../contexts/filtercontext'


const Filtersection = () => {
  const context = useContext(Filtercontext);
  const { filters: { text }, updateFilterproduct } = context
  return (
    <div>
      <div className="container-fluid">
        <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
          <input className="form-control me-2" type="search" name="text" value={text} placeholder="Search" aria-label="Search" onChange={updateFilterproduct}
            style={{width : "130px"}} />
        </form>
      </div>
    </div>
  )
}

export default Filtersection