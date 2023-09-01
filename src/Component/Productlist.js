import React from 'react'
import FeatureP from './FeatureP'
import { useContext } from 'react'
import { Filtercontext } from '../contexts/filtercontext'
import Listview from './Listview'

const Productlist = () => {
    const data = useContext(Filtercontext)

    const { filterProduct, isGridview } = data
    

    if (isGridview) {
        return (
            <div>
                <div className="row text-center ">
                    {
                        filterProduct.map((currele) => {
                            return <FeatureP key={currele.id} {...currele} />
                        })
                    }

                </div>
            </div>
        )
    }

    if (!isGridview) {
        return (
            <div className="container my-2 ">
                {
                    filterProduct.map((currele) => {
                        return <Listview key={currele.id} {...currele} />
                    })
                }
            </div>
        )
    }
}

export default Productlist