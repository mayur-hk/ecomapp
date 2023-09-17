import React, { useContext } from 'react'
import { Filtercontext } from '../contexts/filtercontext'


const Filtersection = () => {
  const context = useContext(Filtercontext);
  const { filters: { text }, updateFilterproduct, allProducts } = context;

  const getUniqueData = (data, type) => {
    let newval = data.map((element) => {
      return element[type]
    })
    if(type === "colors"){
     // newval = [...new Set([].concat(...newval))]
      newval = newval.flat();
    }
    return ["all", ...new Set(newval)]
  }

  const getCategorydata = getUniqueData(allProducts, "category");
  const getCompanydata = getUniqueData(allProducts, "company");
  const getColors = getUniqueData(allProducts, "colors")
  console.log("🚀 ~ file: Filtersection.js:19 ~ Filtersection ~ getColors:", getColors)



  return (
    <>
      <div className="container-fluid">
        <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
          <input className="form-control me-2" type="search" name="text" value={text} placeholder="Search" aria-label="Search" onChange={updateFilterproduct}
            style={{ width: "130px" }} />
        </form>
      </div>
      <div>
        <div>
          <h4>
            Category
          </h4>
          <div className='d-flex flex-column'>
            {
              getCategorydata.map((currElem, index) => {
                return (
                  <button type='button' key={index} className='btn' style={{ width: "8rem", textAlign: "left" }} name="category" value={currElem} onClick={updateFilterproduct}>
                    {currElem}
                  </button>
                )
              })
            }
          </div>
          <h4>
            Company
          </h4>
          <div>
            <form>
              <select className="form-select" name="company" id="company" onClick={(e) => { updateFilterproduct(e) }}>
                {
                  getCompanydata.map((currElem, index) => {
                    return (<option key={index} name="company" value={currElem}>{currElem}</option>)
                  })
                }
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filtersection